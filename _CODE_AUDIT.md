# Code Audit – sagemedia.de
Datum: 2026-04-03

## Zusammenfassung

Solide Basis mit sauberen Content Collections, konsistentem Design-System und guter TypeScript-Nutzung (alle Komponenten haben Props-Interfaces). Die Komponentenstruktur ist durchdacht – case-study/ Subfolder, wiederverwendbare Section/SectionHeader Pattern. **Größte Schwächen:** (1) SEO-kritischer Bug: Canonical URL ist auf allen Pages identisch hartcodiert auf die Startseite. (2) Kein einziges Bild nutzt Astros `<Image>`/`<Picture>` – alle sind plain `<img>` ohne Optimierung. (3) Massive Daten-Duplizierung: videoTestimonials und textReviews sind in 5-6 Pages copy-pasted. (4) index.astro ist mit 1.189 Zeilen ein Monolith der dringend aufgeteilt werden muss. (5) Fehlende og:image und og:url auf allen Pages.

## Kritisch (sofort fixen)

### 1. Canonical URL ist auf JEDER Page `https://sagemedia.de/` — SEO-Killer
**Datei:** `src/layouts/Layout.astro:25`
```html
<link rel="canonical" href="https://sagemedia.de/" />
```
Das sagt Google: "Jede Seite ist ein Duplikat der Startseite." Das kannibalisiert dein gesamtes Ranking.

**Fix:** Canonical dynamisch aus `Astro.url` generieren oder als Prop übergeben.

### 2. Fehlende og:image und og:url Meta-Tags
**Datei:** `src/layouts/Layout.astro`
Es gibt og:title, og:description, og:locale – aber KEIN og:image und og:url. Wenn jemand eine Seite teilt (LinkedIn, Slack, WhatsApp), wird kein Vorschaubild gezeigt und die URL kann falsch aufgelöst werden.

**Fix:** og:url dynamisch setzen, og:image als Layout-Prop mit Fallback.

### 3. 0 von ~35 Bildern nutzen Astros `<Image>` oder `<Picture>`
Alle Bilder sind plain `<img>` Tags. Das bedeutet:
- Keine automatische WebP/AVIF Konvertierung
- Keine responsive srcsets
- Keine Build-Time Optimierung
- Unnötig große Dateien werden ausgeliefert

Besonders kritisch bei:
- `TrustLogos.astro` — 6 Press-Logos als unkomprimierte PNGs
- `team.astro:56` — Büro-Foto als großes JPG, lazy loaded aber nicht optimiert
- `FaqSection.astro:61` — André-Portrait als volles JPG

**Fix:** Import aus `astro:assets` und `<Image>` Component nutzen. Für public/-Bilder mindestens width/height setzen.

### 4. Kein einziges `<img>` hat explizite width/height Attribute
0 von 35 Bildern. Das verursacht Layout Shifts (CLS), was Core Web Vitals und damit Rankings verschlechtert.

**Fix:** width/height auf alle `<img>` Tags setzen, oder besser: Astro `<Image>` nutzen.

### 5. Tote Links im Header und Footer
- Header: Link zu `/magazin` — Page existiert nicht
- Footer: Links zu `/lexikon` (sollte `/glossar` sein), `/impressum`, `/datenschutz`, `/leistungen/google-ads`, `/leistungen/webdesign`, `/leistungen/landingpages` — keine dieser Pages existiert

Das sind 404s die Google crawlt = schlechtes Signal.

**Fix:** Tote Links entfernen oder Pages erstellen. `/lexikon` → `/glossar` fixen.

### 6. Google Fonts über externen CSS-Import geladen — Render-Blocking
**Datei:** `src/styles/global.css:1`
```css
@import url('https://fonts.googleapis.com/css2?family=...');
```
Das ist ein render-blocking Request. Die Seite kann nicht gerendert werden, bis Google Fonts geladen ist.

**Fix:** Fonts lokal hosten (z.B. via `@fontsource/plus-jakarta-sans`) oder zumindest `<link rel="preload">` im Layout head setzen und `display=swap` sicherstellen.

## Wichtig (diese Woche)

### 7. Massive Daten-Duplizierung: videoTestimonials & textReviews
Dieselben Testimonial-Arrays sind copy-pasted in:
- `src/pages/leistungen/seo.astro`
- `src/pages/leistungen/geo-aio-llmo.astro`
- `src/pages/leistungen/google-stellenanzeigen.astro`
- `src/pages/leistungen/index.astro`
- `src/pages/team.astro`
- `src/pages/kontakt.astro`

Wenn ein Review sich ändert, muss man 6 Dateien anfassen.

**Fix:** `src/data/testimonials.ts` erstellen mit `export const videoTestimonials` und `export const textReviews`. Überall importieren.

### 8. index.astro = 1.189 Zeilen Monolith
Die Homepage ist eine einzelne Datei mit ~1.200 Zeilen HTML, Daten und Scripts. Sektionen wie "Warum sagemedia", "Magazin", "Social Proof Zahlen", Chart-Animation-Script, Counter-Script sind alle inline.

**Fix:** Mindestens die inline Sektionen in eigene Komponenten extrahieren:
- Hero-Section → bleibt (ist page-spezifisch mit Chart-Widget)
- "Warum sagemedia" Section → `WhySagemedia.astro`
- Social Proof Zahlen → nutzt bereits `StatsStrip.astro` Pattern, sollte das nutzen
- Counter/Chart Animation Script → `HeroAnimations.astro` oder in VideoLightbox integrieren

### 9. DRY-Verstoß: Section-Header Pattern wird manuell wiederholt
Obwohl es `SectionHeader.astro` gibt, wird das Eyebrow+Title+Subtitle Pattern in mindestens 6 Stellen manuell mit rohem HTML gebaut:
- `CaseStudies.astro:37-49`
- `ServicesGrid.astro:32-44`
- `ProcessTimeline.astro:38-48`
- `Testimonials.astro:47-57`
- Mehrere Inline-Sections in `index.astro` und `team.astro`

**Fix:** Konsequent `SectionHeader` nutzen statt das Pattern jedes Mal neu zu schreiben.

### 10. CtaSection dupliziert Section-Logik
`CtaSection.astro` baut seine eigene dark Section mit noise-bg, glow orbs und divider lines, obwohl `Section.astro` genau dafür existiert (hat `dark` Prop).

**Fix:** CtaSection sollte intern `<Section dark>` nutzen statt die Logik zu duplizieren.

### 11. CTA-Button ist überall copy-pasted
Das emerald-gradient Button Pattern mit Arrow-SVG wird in ~10 Stellen manuell wiederholt:
- `HeroPage.astro:74-79`
- `CtaSection.astro:40-45`
- `FaqSection.astro:72-79`
- `ProcessTimeline.astro:82-88`
- `index.astro` (mehrfach)
- Alle Leistungs-Pages

**Fix:** `CtaButton.astro` Komponente mit `text`, `href`, `variant` Props.

### 12. Fehlende `loading="lazy"` auf einigen Bildern
- `Header.astro:26` — Logo im Header: kein `loading="lazy"` (korrekt, Above the Fold)
- `Footer.astro:10` — Logo: kein `loading="lazy"` (OK da Footer lazy ist)
- `index.astro` Hero-Section: Bilder haben kein loading-Attribut (sollte `eager` sein, Above the Fold)

Nicht dramatisch, aber `loading="eager"` explizit setzen für ATF-Bilder wäre sauberer.

### 13. SVG-Icons sind inline-dupliziert statt abstrahiert
Dieselben SVG-Icons (Phone, Email, Arrow, Checkmark, Star) werden 20+ Mal als Raw SVG eingefügt. Besonders schlimm:
- Phone-Icon: mindestens 6x identisch kopiert
- Arrow-Right: mindestens 15x kopiert
- Star-Rating: 5 SVGs pro Stelle, an 3 Stellen = 15 identische SVGs

**Fix:** `src/components/icons/` Folder mit Phone.astro, ArrowRight.astro, Star.astro etc.

## Verbesserungen (Backlog)

### 14. processSteps, kontaktFaqs, seoFaqs etc. sind in Pages hartcodiert
Daten-Arrays für FAQ-Sektionen und Prozess-Steps sind direkt in den Pages definiert. Bei einem zentralen `src/data/` Pattern wäre alles an einem Ort.

### 15. Kein robots.txt oder sitemap
Keine Sitemap-Integration (Astro hat `@astrojs/sitemap`), kein robots.txt im public/.

### 16. Tailwind @theme statt extend
`global.css` definiert Farben in `@theme {}` — das ist Tailwind v4 korrekt, aber es werden nur emerald und amber definiert. Gray fehlt, wird aber überall benutzt (gray-50, gray-100...gray-950). Das funktioniert weil Tailwind v4 default colors hat, aber es wäre sauberer explicit zu sein.

### 17. global.css Lexikon-Styles: 350 Zeilen Custom CSS
Von Zeile 182 bis 549 sind ~350 Zeilen Custom CSS für `.lexikon-*` Klassen. Vieles davon dupliziert Tailwind-Utilities (colors, spacing, font-sizes). Das ist technisch nicht falsch (Markdown-Content braucht Prose-Styles), aber das könnte mit `@tailwindcss/typography` Plugin drastisch vereinfacht werden.

### 18. Kein Error-Handling bei dynamischen Routes
`ergebnisse/[slug].astro:28` hat `if (!entry) return Astro.redirect('/ergebnisse')` — gut.
`glossar/[slug].astro` hat `getStaticPaths()`, also kein 404-Problem bei SSG — gut.
Aber: Es gibt keine 404-Page (`src/pages/404.astro`).

### 19. Inconsistentes Naming
- Content-Collection heißt `lexikon`, aber die Page-Route heißt `/glossar`
- Footer verlinkt auf `/lexikon` (existiert nicht), Header auf `/glossar`
- `cases.ts` Daten sind komplett separat von der `caseStudies` Content Collection

### 20. animate-pulse auf Deko-Elementen
`index.astro:76` und mehrere Stellen nutzen Tailwinds `animate-pulse` auf dekorativen Ringen. Das ist eine Endlos-Animation die auf älteren Geräten GPU-Last erzeugt, ohne echten Mehrwert.

## Datei-für-Datei Befunde

### `src/layouts/Layout.astro`
- **Zeile 25:** Canonical URL hartcodiert auf Startseite → KRITISCH
- **Fehlend:** og:image, og:url Meta-Tags → KRITISCH
- **Fehlend:** Twitter Card Meta-Tags (twitter:card, twitter:image)
- **Fehlend:** Hreflang (wenn nur de, zumindest x-default)

### `src/styles/global.css`
- **Zeile 1:** Render-blocking Google Fonts @import → KRITISCH
- **Zeile 27:** `-webkit-font-smoothing: antialiased` bereits in Layout body class (`antialiased`) → Doppelt, CSS-Version unnötig
- **Zeile 182-549:** Lexikon-Styles als monolithisches Custom CSS → BACKLOG, funktioniert aber könnte vereinfacht werden

### `src/pages/index.astro`
- **1.189 Zeilen:** Monolith, braucht Aufteilung → WICHTIG
- **Zeile ~155-181:** Social Proof Zahlen inline statt StatsStrip zu nutzen → DRY
- **Script-Block am Ende (~100 Zeilen):** Chart-Animation und Counter-Logik gehört in separate Komponente

### `src/components/Header.astro`
- **Zeile 14:** Nav enthält `/magazin` Link → 404, Page existiert nicht
- Sonst sauber, gute Accessibility (aria-label, aria-expanded)

### `src/components/Footer.astro`
- **Zeile 36:** Link zu `/lexikon` → sollte `/glossar` sein
- **Zeilen 46-50:** Links zu nicht existierenden Pages (/google-ads, /webdesign, /landingpages)
- **Zeile 78-79:** Links zu /impressum und /datenschutz → Pages existieren nicht

### `src/components/TrustLogos.astro`
- **Zeilen 13-18:** 6 `<img>` Tags ohne width/height → CLS
- **Zeile 18:** ihk.jpg ist ein JPG unter PNGs/WebPs → Inkonsistent, sollte auch PNG/WebP sein

### `src/components/FaqSection.astro`
- **Zeile 61:** `<img>` ohne width/height

### `src/components/Testimonials.astro`
- **Zeile 36:** `Math.random()` für sliderId → Funktioniert, aber nicht deterministisch bei SSG

### `src/data/cases.ts`
- Enthält detaillierte Case-Study-Daten (ausgangslage, strategie, timeline etc.) die nur für den ERSTEN Case (energieversum) vollständig sind
- Gleichzeitig gibt es eine `caseStudies` Content Collection in `src/content/caseStudies/`
- Zwei parallele Datenquellen für das gleiche = Wartungsproblem
- **Fix:** Entscheiden: entweder alles in Content Collection ODER alles in cases.ts. Nicht beides.

### `src/content.config.ts`
- Sauber getypt, gutes Zod-Schema für beide Collections
- Einzige Verbesserung: `category` im Lexikon-Schema könnte ein `z.enum()` statt `z.string()` sein, um typo-sichere Kategorien zu erzwingen
