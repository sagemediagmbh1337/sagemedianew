# UX/UI Audit – sagemedia.de
Datum: 2026-04-03

## Gesamteindruck

Die Seite macht auf den ersten Blick einen professionellen, durchdesignten Eindruck. Das Emerald-Green-Branding ist durchgehend konsistent, die Section-Struktur (Eyebrow → Headline → Content → CTA) ist klar wiedererkennbar. Für eine B2B-Agentur-Seite ist das visuell überdurchschnittlich. **Aber:** Die Seite hat ein massives Spacing-Problem – jede Section hat 128px/176px Padding (py-32/py-44), was bei 10+ Sektionen pro Page tausende Pixel totes Whitespace erzeugt. Der Besucher scrollt sich tot bevor er zum CTA kommt. Außerdem: text-gray-400 und text-gray-500 dominieren die Seite und fallen bei WCAG AA Kontrast-Checks durch.

## Scoring (1-10)
- Visual Design: 8/10
- Consistency: 7/10
- Conversion-Optimierung: 6/10
- Mobile Experience: 5/10
- Content-Qualität: 8/10
- Vertrauensaufbau: 8/10

## Kritisch – kostet euch Conversions

### 1. Sektions-Padding ist extrem – py-32/py-44 auf JEDER Section
**Wo:** Alle Pages, alle Sektionen
**Was:** Jede Section hat `py-32 md:py-44` = 128px/176px Padding oben+unten. Bei der Homepage mit ~12 Sektionen ergibt das allein ~3.500px reines Padding. Der Nutzer muss extrem viel scrollen um zum Content zu kommen.
**Warum Impact:** Mehr Scroll = weniger Conversions. Studien zeigen: jeder Scroll-Fold verliert ~20% der Besucher.
**Fix:** Sections differenzieren:
- Hero: py-32 md:py-44 (bleibt, braucht Luft)
- Content Sections: py-20 md:py-28 (weniger, content-fokussiert)
- StatsStrip: py-16 md:py-20 (bleibt, ist schon kompakter)
- CTA: py-24 md:py-32 (reduzieren)

### 2. WCAG AA Kontrast-Verletzungen – text-gray-400 und text-gray-500
**Wo:** 167 Stellen quer durch alle Files
**Was:**
- `text-gray-400` (#9ca3af) auf weiß = 2.9:1 Kontrast (braucht 4.5:1) — 105 Vorkommen
- `text-gray-500` (#6b7280) auf weiß = 4.6:1 — knapp grenzwertig
- `text-gray-400` auf bg-gray-950 = 3.5:1 — durchgefallen
**Warum Impact:** Barrierefreiheit, aber auch: ältere Besucher (B2B-Entscheider sind oft 40+) können Text schlecht lesen
**Fix:** 
- Helle Sections: text-gray-400 → text-gray-500, text-gray-500 bleibt (knapp OK)
- Dunkle Sections: text-gray-400 → text-gray-300
- Subtile Labels (text-[10px] font-mono): text-gray-400 ist OK weil dekorativ, nicht informativ

### 3. Homepage hat 12 Sektionen ohne Zwischen-CTAs
**Wo:** / (Startseite)
**Was:** Nach dem Hero-CTA kommen ~8 Content-Sektionen (WhySagemedia, Gründer, Organic Ovation, Services, Case Studies, Stats, Testimonials, Presse) bevor der nächste CTA am Ende erscheint.
**Warum Impact:** Wer nicht sofort konvertiert aber nach 3-4 Sektionen überzeugt ist, hat keine Möglichkeit zu handeln.
**Fix:** Zwischen-CTAs nach den stärksten Trust-Sektionen einfügen (nach Case Studies, nach Testimonials).

### 4. Mobile Menu z-index Konflikt
**Wo:** Header.astro
**Was:** Header hat `z-50`, Mobile Menu hat `z-40`. Header überlagert das Menu.
**Warum Impact:** Mobile Navigation funktioniert nicht korrekt — Header-Elemente sind über dem Menu sichtbar.
**Fix:** Mobile Menu auf z-50, Header-Backdrop während Menu offen auf z-40.

### 5. Hero H1 clamp() Floor zu groß für kleine Screens
**Wo:** HeroPage.astro, index.astro, glossar/[slug].astro
**Was:** `text-[clamp(3rem,7vw,6rem)]` = Minimum 48px. Auf einem 320px Screen wird das ein 3-4-Zeiler und sprengt den Viewport.
**Warum Impact:** Erster Eindruck auf Mobile ist ein riesiger Textblock statt einer klaren Headline.
**Fix:** `text-[clamp(2.25rem,6vw,6rem)]` — 36px Minimum, skaliert besser.

## Wichtig – fällt professionellen Besuchern auf

### 6. Floating Badges können auf Mobile überlaufen
**Wo:** index.astro Hero, FounderSection, WhySagemedia, Team-Page, Kontakt-Page
**Was:** Absolute-positioned Badges mit negativen Offsets (`-bottom-5 -left-5`) können unter 360px Viewport-Breite aus dem sichtbaren Bereich ragen.
**Fix:** Responsive Badge-Offsets: `-bottom-3 lg:-bottom-5 -left-3 lg:-left-5`

### 7. MagazinSlider Cards haben Fixed Widths
**Wo:** MagazinSlider.astro
**Was:** Cards sind `w-[320px] sm:w-[360px]` — auf Screens unter 340px überlaufen die Cards den Viewport.
**Fix:** `w-[calc(100vw-48px)] sm:w-[360px]`

### 8. Emerald-Akzentfarbe wird inflationär eingesetzt
**Wo:** Alle Pages
**Was:** Emerald taucht auf in: Gradient-Headlines, Eyebrow-Badges, CTA-Buttons, Icon-Backgrounds, Border-Hovers, Glow-Effekte, Divider-Lines, Bullet-Points. Das sind ~8 verschiedene Einsatzzwecke. Wenn alles Emerald ist, hebt sich nichts mehr ab.
**Warum Impact:** CTA-Buttons konkurrieren visuell mit Headline-Gradienten und Icon-Hovers. Der Button ist nicht der hellste Punkt auf der Seite.
**Fix:** Dokumentieren, nicht fixen — das ist eine Design-Entscheidung. Empfehlung: Emerald nur für CTAs und Key-Akzente, Eyebrow/Labels in neutralem Grau.

### 9. Team-Page: Alle 3 Teammitglieder haben dasselbe Foto
**Wo:** team.astro Zeile 27-28
**Was:** Saskia A. und Miriam A. haben beide `/images/janin-schaefer-sagemedia.jpg` als Bild — das ist Janins Foto.
**Warum Impact:** Zerstört sofort das Vertrauen. Der Besucher merkt: "Das sind Platzhalter."
**Fix:** Entweder echte Fotos oder Initialen-Fallback (der Code dafür existiert bereits).

### 10. ProcessTimeline direction-rtl Syntax-Problem
**Wo:** ProcessTimeline.astro Zeile 58
**Was:** `lg:direction-rtl` ist keine valide Tailwind-Klasse. Müsste `lg:[direction:rtl]` sein.
**Fix:** Syntax korrigieren.

## Detailbefunde pro Seite

### / (Startseite)
- **Stärken:** Hero mit Dashboard-Mockup ist überzeugend, zeigt sofort "Data-Driven". StatsStrip nach Hero baut Vertrauen auf. Organic Ovation Section mit Pokal-Foto ist ein starker Proof.
- **Schwächen:** 12 Sektionen = endloser Scroll. Magazin-Section verlinkt auf /magazin das nicht existiert. Zwei StatsStrips auf einer Page (nach Hero + nach Cases) — wirkt redundant.
- **Fix:** Einen StatsStrip entfernen oder differenzieren (andere Zahlen). Magazin-Links entfernen bis Page existiert.

### /leistungen
- **Stärken:** Klare Service-Cards mit Icons, guter Hover-State. ProcessTimeline ist visuell ansprechend.
- **Schwächen:** Hero-Visual ist dasselbe Dashboard-Pattern wie auf anderen Pages — keine visuelle Differenzierung.

### /leistungen/seo
- **Stärken:** Gut strukturiert. FAQ-Section mit sticky Contact-Card ist clever. CTA-Verteilung ist die beste aller Pages.
- **Schwächen:** Hero-Dashboard ist wieder dasselbe Pattern.

### /ergebnisse
- **Stärken:** CaseGrid-Karten sind clean, KPIs prominent.
- **Schwächen:** Nur 1 Case Study hat eine Detail-Page (Energieversum). Die anderen 9 verlinken auf /ergebnisse/{slug} ohne Content → führt zu leeren Pages oder Redirects.

### /ergebnisse/energieversum
- **Stärken:** Gut strukturiert mit KPI-Bar, Timeline, Company-Info, Results.
- **Schwächen:** Keine echten Bilder/Screenshots als Proof.

### /glossar/[begriff]
- **Stärken:** Sticky TOC-Sidebar ist exzellent für lange Artikel. Author-Box baut E-E-A-T. CTA-Card in Sidebar ist immer sichtbar.
- **Schwächen:** Breadcrumb-Separator "/" sollte auf dunklem Background stehen (Brand-Guideline).

### /kontakt
- **Stärken:** Calendly-Placeholder ist klar. Hero-Visual mit Kontaktdaten-Card ist praktisch.
- **Schwächen:** Calendly ist noch nicht integriert — aktuell sieht der Besucher nur einen Platzhalter. Das ist der wichtigste Conversion-Punkt der Seite.

### /team
- **Stärken:** Gründer-Section mit Credentials ist überzeugend. Werte-Section (Dark) setzt guten Kontrast.
- **Schwächen:** Fake-Teamfotos (siehe Punkt 9). Kein CTA zwischen Gründer und Team-Grid.

### /404
- Neue Page, funktional korrekt. Minimalistisch.

### /glossar (Index)
- **Stärken:** Kategorie-Filter, Alphabet-Navigation, Suchfeld.
- **Schwächen:** Keine besonderen Probleme.
