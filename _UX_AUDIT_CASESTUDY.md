# UX/UI Audit – /ergebnisse/energieversum
Datum: 2026-04-03

## Gesamteindruck

Die Page hat jetzt erheblich mehr Substanz als vorher. 13 Sektionen erzählen eine komplette Story: Ausgangslage → Ziel → Strategie → Timeline → Ergebnisse → SERP-Beweis → Keywords → Customer Journey → Wachstumsmotor → Unternehmen → CTA. Das Problem: Die Sektionen wirken isoliert voneinander — zu viel Padding zwischen Sektionen (py-20/py-28 bei den Case-Komponenten, py-32/py-44 bei Section.astro) und die narrative Spannung geht verloren. Es fühlt sich an wie 13 separate Landing-Pages übereinander gestapelt, nicht wie eine Story.

## Scoring (1-10)
- Visual Design: 7/10 — Einzelne Komponenten sehen gut aus, das Gesamtbild ist aber repetitiv
- Consistency: 8/10 — Alle Case-Komponenten nutzen dasselbe Design-System
- Conversion-Optimierung: 4/10 — Nur 2 CTAs (Hero + Seiten-Ende), über 13 Sektionen hinweg
- Mobile Experience: 6/10 — Grundsätzlich responsive, aber die Page wird extrem lang
- Content-Qualität: 9/10 — Starker Content mit echten Zahlen, Keywords, Proof
- Vertrauensaufbau: 7/10 — Gute Zahlen, aber keine Screenshots, kein Testimonial, kein Video

## Kritisch – kostet euch Conversions

### 1. Nur 2 CTAs auf der gesamten Page — Hero und ganz unten
**Wo:** Page-Struktur [slug].astro
**Was:** Der erste CTA ist im Hero ("Erstgespräch vereinbaren"), der nächste erst nach 12 weiteren Sektionen am Seitenende (CaseCta). Dazwischen 0 CTAs.
**Warum Impact:** Ein Besucher der nach der Ergebnis-Sektion überzeugt ist (Sektion 7 von 13), hat keine Handlungsoption. Er müsste weitere 6 Sektionen scrollen.
**Fix:** Einen Zwischen-CTA nach CaseResults einfügen. Außerdem einen sticky "Kontakt"-Button am unteren Viewport-Rand.

### 2. Kein einziges Bild/Screenshot als Beweis auf der gesamten Page
**Wo:** Gesamte Page
**Was:** Die Page behauptet "44.362 Organic Traffic" und "Position 1 bei Google" — aber kein einziger Screenshot beweist es. Der SERP-Preview ist ein HTML-Mockup (gut!), aber ein echter Semrush/GSC-Screenshot wäre deutlich glaubwürdiger.
**Warum Impact:** B2B-Entscheider wollen Beweise sehen, keine nachgebauten UI-Elemente.
**Fix:** `proofImage` im Markdown setzen — mindestens ein Semrush-Traffic-Chart-Screenshot. Idealerweise auch ein echtes SERP-Screenshot.

### 3. Kein Testimonial/Kundenzitat
**Wo:** Energieversum Frontmatter — `testimonial` Feld fehlt
**Was:** Die Page zeigt keine Kundenstimme. Bei einer Case Study ist das der stärkste Trust-Builder.
**Fix:** Testimonial-Feld im Markdown befüllen (Quote vom Energieversum-Ansprechpartner).

### 4. CaseStrategy zeigt nur 4 kurze Einzeiler — keine Details
**Wo:** CaseStrategy.astro + energieversum.md
**Was:** Im Original-Content war bei "Wissensportal aufgebaut" ein detaillierter Text. Jetzt steht dort nur ein kurzer Satz pro Karte. Das ist die Kernleistung eurer Arbeit und sie wird in 4 generischen Cards abgehandelt.
**Warum Impact:** Der Interessent versteht nicht WAS konkret gemacht wurde.
**Fix:** Strategy-Beschreibungen im MD deutlich erweitern. Eventuell CaseStrategy um ein "detail" Feld erweitern für Aufklapptexte.

## Wichtig – fällt professionellen Besuchern auf

### 5. Sektionsreihenfolge ist nicht storytelling-optimal
**Wo:** [slug].astro Zeile 39-77
**Was:** Aktuell: Hero → KPIs → Ausgangslage → Ziel → Strategie → Timeline → Ergebnisse → SERP → Keywords → Journey → Growth → Company → CTA. Die "Company"-Section kommt NACH dem Wachstumsmotor — aber man will wissen wer der Kunde ist BEVOR man die Story liest.
**Fix:** Reihenfolge ändern auf: Hero → KPIs → **Company** → Ausgangslage → Ziel → Strategie → Timeline → Ergebnisse → SERP → Keywords → Journey → Growth → CTA.

### 6. CaseHero hat kein Visual — die rechte Spalte ist leer
**Wo:** CaseHero.astro
**Was:** Weder `heroImage` noch `clientLogo` ist gesetzt in energieversum.md. Dadurch rendert HeroPage ohne `visual`-Slot — die rechte Spalte existiert nicht, aber der Hero fühlt sich linkslastig an.
**Fix:** Entweder ein Hero-Image setzen (z.B. Energieversum-Website-Screenshot oder PV-Anlage-Foto) oder ein Dashboard-Mockup wie auf der Homepage als Visual.

### 7. Heading-Texte sind im [slug].astro hardcoded statt aus Content
**Wo:** [slug].astro Zeilen 42-44
**Was:** "Eine Website mit Expertise, aber ohne Sichtbarkeit bei Google." und "Die erste Anlaufstelle für Photovoltaik-Interessenten in Deutschland." sind hardcoded. Das funktioniert nur für Energieversum, nicht für andere Cases.
**Fix:** Diese Texte als optionale Felder ins Schema übernehmen oder generische Headings nutzen.

### 8. Dark-Light-Wechsel der Sektionen ist inkonsistent
**Wo:** Page-Flow
**Was:** Light → Dark (KPIs) → Light → Gray → Light → Gray (Timeline) → **Dark (Results)** → Light (SERP) → Gray (Keywords) → Light (Journey) → **Dark (Growth)** → Light (Company) → Dark (CTA). Zwei Dark-Sektionen (Results + Growth) mit nur 3 Light/Gray-Sektionen dazwischen. Das wirkt unrhythmisch.
**Fix:** Growth Engine könnte auch Light/Gray sein. Oder die SERP-Sektion vor Results setzen für besseren Wechsel.

### 9. Keyword-Tabelle hat 12 Einträge die alle "NEU" sind
**Wo:** CaseKeywordRankings
**Was:** Alle 12 Keywords zeigen "–" → Position X mit Badge "NEU". Das ist monoton und verliert nach dem 3. Eintrag den Wow-Effekt.
**Fix:** Nur die 5-6 stärksten Keywords zeigen, mit einem "und 10.106 weitere Keywords" Hinweis darunter.

### 10. Customer Journey Stats wiederholen die KPIs
**Wo:** CaseCustomerJourney stats
**Was:** "100+ / Monat Leads", "6.680+ Keywords", "44.362 / Monat Besucher" — das sind exakt die KPIs von oben, nochmal.
**Warum Impact:** Fühlt sich repetitiv an.
**Fix:** Andere Metriken nutzen: z.B. Conversion Rate, Verweildauer, Bounce Rate Verbesserung, oder die Stats ganz weglassen.

## Detailbefunde

### CaseHero
- Funktioniert, aber ohne Visual wirkt er dünn
- Der Subtitle wird in `titleLine2` gemappt was "Photovoltaik" zeigt — nicht ideal, sollte ein eigener Satz sein

### CaseKpiBar (StatsStrip)
- Sauber, kompakt, guter Trust-Builder direkt nach Hero
- Kontrast der Labels (text-gray-400 auf dark) wurde bereits gefixt

### CaseNumberedCards (Ausgangslage + Ziele)
- Gutes Pattern mit nummerierten Karten
- `!py-20 md:!py-28` ist ein gutes, kompakteres Padding für Case-Sektionen

### CaseStrategy
- Zu dünn (siehe Punkt 4). Braucht mehr Detail-Text.
- 2-Column Grid auf Desktop ist gut, aber mit nur 1-2 Sätzen pro Karte sieht es leer aus

### CaseTimeline
- Desktop horizontal: gut, aber mit 7 Steps wird es eng bei < 1200px
- Mobile vertical: sauber gelöst
- "isCurrent" Badge auf dem letzten Step ist ein nettes Touch

### CaseResults (Dark Section)
- Gradient-Text KPIs sehen visuell stark aus
- 7 Highlight-Punkte sind viel — könnten in 2 Spalten

### CaseSerpPreview
- Kreatives Element, hebt die Page ab von Standard-Case-Studies
- Browser-Chrome (drei Dots + URL-Bar) ist ein guter Touch
- Competitor-Results bei opacity-50 sind subtil genug

### CaseKeywordRankings
- Tabelle ist sauber, Desktop/Mobile Varianten korrekt
- Monotonie-Problem (siehe Punkt 9)

### CaseCustomerJourney
- Pipeline-Layout mit Arrows ist intuitiv
- Search-Bar-Pill für Queries ist clever
- Auf Mobile stack die 4 Cards + Arrows zu einer sehr langen Liste

### CaseGrowthEngine
- Kreislauf-Konzept ist inhaltlich stark
- Das "Zyklus wiederholt sich" Element am Ende schließt den Kreis gut
- Dark-on-Dark glassmorphism Cards könnten etwas mehr Kontrast vertragen

### CaseCompany
- Pill-Tags für Facts sind ungewöhnlich aber funktional
- Website-Link ist wichtig, gut dass er drin ist

### CaseCta
- Standard-CTA, funktioniert
- Keine Kontaktdaten (Telefon/Mail) — die hat CtaSection aber per Default
