---
title: "Alt-Text"
category: "Technisches SEO"
description: "Alt-Text ist ein HTML-Attribut, das Bildinhalte für Suchmaschinen und Screenreader beschreibt und für Barrierefreiheit sowie Bilder-SEO unverzichtbar ist."
author:
  name: "André Schäfer"
  role: "Geschäftsführer & SEO-Stratege"
  bio: "André Schäfer (*1990, Kronach) ist Gründer der sagemedia GmbH in Bad Staffelstein. Ehemaliger E-Sportler (n!faculty, deutsches Nationalteam) und seit 2009 im SEO tätig. 2021 gewann er den deutschen SEO-Contest, 2022 Top-5 beim SommerSEO. Sein Fokus: datengetriebene SEO-Strategien mit Branchenexklusivität."
  image: "/images/andre-schaefer-stage.jpg"
related: []
---

Das Alt-Attribut (`alt=””`) im HTML-`<img>`-Tag liefert Suchmaschinen-Crawlern und Screenreadern eine textbasierte Beschreibung des Bildinhalts. Google nutzt diesen Text als primäres Signal für die Bildersuche-Indexierung. Seit dem 28. Juni 2025 ist die korrekte Vergabe durch das Barrierefreiheitsstärkungsgesetz (BFSG) in Deutschland gesetzlich verpflichtend.

## Beeinflussen Alt-Texte die SEO-Performance?

Crawler können Bildinhalte nicht visuell auswerten. Der Alt Text liefert die textuelle Beschreibung, die Google zur Einordnung in die Bildersuche verwendet. Gleichzeitig wertet Google den Alt Text als Ankertext, wenn das Bild als Link dient. Ein Bild mit Alt Text “Balkendiagramm Umsatzentwicklung Q1-Q4 2025” rankt in der Bildersuche für diese Begriffe. Ein Bild ohne Alt Text bleibt unsichtbar.

Für die Onpage-Optimierung liefert der Alt Text ein zusätzliches Keyword-Signal im HTML-Quellcode, das den thematischen Fokus der Seite stärkt.

## Müssen Bilder immer einen Alt-Text haben?

Jedes `<img>`-Element braucht laut HTML-Spezifikation ein `alt`-Attribut. Informative Bilder erhalten eine beschreibende Textalternative. Dekorative Elemente wie Trennlinien oder Hintergrundgrafiken bekommen ein leeres Attribut (`alt=””`), damit Screenreader sie überspringen.

Das BFSG verpflichtet seit Juni 2025 alle Unternehmen mit B2C-Digitalangeboten, nicht-textuelle Inhalte barrierefrei darzustellen. Fehlende Alt Texte auf funktionalen Bildern stellen einen Verstoß gegen die WCAG-2.1-Kriterien dar, die das BFSG als technischen Standard referenziert.

## Verwendet Google Alt-Texte zur Indexierung von Bildern?

Google bestätigt in der Search-Central-Dokumentation, dass der Alt Text die primäre Informationsquelle für die Bildersuche-Indexierung ist. Der Googlebot extrahiert drei Signale aus Bildern: den Alt Text, den umgebenden Seitentext und den Dateinamen.

Bei verlinkten Bildern behandelt Google den Alt Text als Ankertext des Links. Ein `<a href=”/produkt”><img alt=”Laufschuh Nike Pegasus 41”>` überträgt die Keyword-Relevanz “Laufschuh Nike Pegasus 41” auf die Zielseite. Google nutzt Alt Texte auch als Quelle für Featured-Snippet-Beschreibungen bei bildlastigen Suchanfragen.

## Was ist ein guter Alt-Text?

Ein guter Alt Text beschreibt den Bildinhalt spezifisch in unter 125 Zeichen. Er benennt das dargestellte Objekt, die Handlung oder den Datenpunkt, nicht das Format. “Foto von” oder “Bild zeigt” verschwenden Zeichen ohne Informationswert.

Beispiel: Statt `alt=”Bild eines Diagramms”` besser `alt=”Liniendiagramm: organischer Traffic steigt von 12.000 auf 34.000 Sitzungen, Jan-Dez 2025”`. Keywords passen nur dann in den Alt Text, wenn sie den Bildinhalt korrekt beschreiben.

### **Schritte zur Erstellung eines guten Alt Textes**

- Bestimme die zentrale Aussage oder Funktion des Bildes.

- Formuliere eine Beschreibung unter 125 Zeichen.

- Nutze konkrete Begriffe statt Adjektive (“roter Toyota Supra” statt “schönes Auto”).

- Streiche Präfixe wie “Foto von”, “Grafik zeigt” oder “Bild enthält”.

- Setze Keywords nur ein, wenn sie den Bildinhalt korrekt wiedergeben.

- Berücksichtige den Seitenkontext: dasselbe Produktfoto braucht auf der Kategorieseite einen anderen Alt Text als auf der Detailseite.

- Vergib bei dekorativen Bildern ein leeres Alt Attribut (`alt=””`).

### Was empfiehlt die W3C für den Umgang mit Alt-Text?

Die WCAG 2.1 (Erfolgskriterium 1.1.1) verlangt für jedes nicht-textuelle Element eine Textalternative. Die W3C unterscheidet fünf Bildtypen mit jeweils eigenen Regeln:

- **Informative Bilder:** Alt Text beschreibt die transportierte Information.
- **Funktionale Bilder (z.B. Buttons):** Alt Text beschreibt die Funktion, nicht das Aussehen.
- **Dekorative Bilder:** Leeres Alt Attribut (`alt=””`).
- **Komplexe Bilder (Diagramme, Infografiken):** Kurzer Alt Text plus verlinkter Langbeschreibung.
- **Bildergruppen:** Ein Bild der Gruppe trägt den Alt Text, die übrigen bleiben leer.

### Welche Rolle spielt Alt-Text für die Barrierefreiheit von Webseiten?

Screenreader wie JAWS, NVDA oder VoiceOver lesen den Alt Text vor, wenn sie auf ein `<img>`-Element treffen. Ohne Alt Text überspringt der Screenreader das Bild oder liest ersatzweise den Dateinamen vor, z.B. “IMG_20250315_143022.jpg”.

Drei deutsche Gesetze regulieren die Pflicht zur Bildbeschreibung: das BFSG (seit Juni 2025 für B2C-Unternehmen), die BITV 2.0 (für Bundesbehörden) und die jeweiligen Landes-Gleichstellungsgesetze (für Landesbehörden). Alle drei referenzieren die WCAG als technischen Standard.

### Was ist der Unterschied zwischen „Alt-Tag” und „Alt-Attribut”?

“Alt-Tag” ist eine umgangssprachliche, technisch falsche Bezeichnung. In HTML ist ein Tag das Element-Markup (`<img>`), ein Attribut ist eine Eigenschaft dieses Elements (`alt=””`, `src=””`, `width=””`). Der korrekte Begriff lautet “Alt-Attribut”. In der SEO-Praxis verwenden beide Begriffe dasselbe Konzept: die Textalternative innerhalb des `<img>`-Elements.
