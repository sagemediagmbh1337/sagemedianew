---
title: "Indexierung"
category: "Technisches SEO"
description: "Indexierung ist der Prozess, bei dem Suchmaschinen Webseiten crawlen, analysieren und in ihren Index aufnehmen, damit sie in Suchergebnissen erscheinen."
author:
  name: "André Schäfer"
  role: "Geschäftsführer & SEO-Stratege"
  bio: "André Schäfer (*1990, Kronach) ist Gründer der sagemedia GmbH in Bad Staffelstein. Ehemaliger E-Sportler (n!faculty, deutsches Nationalteam) und seit 2009 im SEO tätig. 2021 gewann er den deutschen SEO-Contest, 2022 Top-5 beim SommerSEO. Sein Fokus: datengetriebene SEO-Strategien mit Branchenexklusivität."
  image: "/v2/images/andre-schaefer-stage.jpg"
related: []
---

## Wie wird der Google Index gefüllt?

Googles Crawler (Bots) navigieren über Hyperlinks durch das Web, analysieren den Quellcode gefundener Seiten und übertragen die Inhalte an das zentrale Indexierungssystem. Im Index werden Seiten nach Relevanz, Struktur, Autorität und weiteren Rankingfaktoren eingeordnet.

Voraussetzung für die Aufnahme: Ein externer Link muss auf die Seite verweisen. Ohne eine solche Referenz bleibt die Seite für den Crawler unsichtbar. Jede neu gefundene Seite durchläuft einen Bewertungs- und Kategorisierungsprozess, bevor sie in den organischen Suchergebnissen (SERPs) erscheint.

## Wie kann eine Webseite indexiert werden?

Indexierung erfolgt passiv über externe Verlinkungen oder aktiv durch gezielte Maßnahmen. Drei Methoden stehen Website-Betreibern zur Verfügung:

- **Einreichung über das Google-Formular**

Unter http://www.google.de/addurl/ lässt sich eine URL direkt bei Google einreichen. Voraussetzung: ein gültiges Google-Konto. Keine Garantie auf Indexierung.

- **Nutzung der Google Search Console mit XML-Sitemap**

Eine Sitemap im .xml-Format enthält alle relevanten URLs der Website.

- Diese Datei wird in der Google Search Console unter „Sitemaps" eingereicht.

- Google crawlt die angegebenen Seiten meist innerhalb von 24 Stunden.

- Der Fortschritt lässt sich direkt in der Search Console überwachen.

- **Einzel-URL-Indexierung über „Abruf wie durch Google"**

Die Funktion „URL-Prüfung" (früher: „Abruf wie durch Google") prüft einzelne neue Seiten.

- Google überprüft, ob der Crawler alle Inhalte korrekt erfassen kann, einschließlich JavaScript.

- Anschließend kann die Seite gezielt an den Index gesendet werden.

- Limit: 10 URLs pro Monat und Konto.

## Wie lässt sich eine Indexierung verhindern?

Nicht jede Seite soll im Index erscheinen. Drei Methoden unterbinden die Indexierung gezielt:

- **Verwendung des Meta-Tags „noindex"**

Der HTML-Tag <meta name="robots" content="noindex"/> signalisiert dem Googlebot, die Seite nicht zu indexieren.

- Diese Direktive ist technisch eine Empfehlung, keine absolute Sperre.

- **Aussperren über die Datei robots.txt**

In der robots.txt im Stammverzeichnis wird festgelegt, welche Bereiche für Crawler gesperrt sind.

- Gesamte Seite blockieren: User-agent: * Disallow: / 

- Einzelne Pfade sperren: User-agent: * Disallow: /admin/ Disallow: /entwurf/ 

- **Zugriffsverhinderung über .htaccess mit Passwortschutz**

Serverseitiger Zugriffsschutz mittels .htaccess schützt Bereiche durch Authentifizierung.

- Suchmaschinen haben keinen Zugang zu passwortgeschützten Verzeichnissen. Die Indexierung wird vollständig unterbunden.

- Google empfiehlt diese Methode als zuverlässigste Lösung (vgl. Google Support).

## Enthält der Index auch Bilder und Videos?

Ja. Google betreibt einen separaten Bildindex. Bilder werden indexiert, wenn sie für den Googlebot zugänglich sind, beschreibende ALT-Texte und sprechende Dateinamen tragen und nicht durch „noimageindex" ausgeschlossen werden. Externe Einbettungen ordnet Google der Ursprungsquelle zu. CSS-generierte Hintergrundgrafiken ignoriert Google vollständig.

Bei Videos priorisiert Google das visuell dominierende Element einer Seite. Video-URL, Vorschaubild (Thumbnail) und Einbettungsstruktur fließen in den Index ein. Die Google Search Console bietet Diagnose-Tools für die Video-Indexierbarkeit.

## Gibt es eine Garantie auf Indexierung bei URL-Einreichung?

Nein. Die Übermittlung von URLs oder Sitemaps über die Search Console ist ein Signal an den Googlebot, keine Garantie. Google entscheidet anhand interner Qualitätsrichtlinien und algorithmischer Bewertung über die Aufnahme. Ablehnungsgründe: Duplicate Content, technische Mängel oder Verstöße gegen Webmaster-Richtlinien.

### Warum wirkt sich Duplicate Content negativ auf die Indexierung bei Google aus?

Duplicate Content erschwert die Bestimmung der relevantesten Seite, belastet das begrenzte Crawl-Budget und verzögert die Indexierung. Zusätzlich fragmentiert er Rankingsignale und verursacht Keyword-Kannibalisierung, bei der mehrere identische Seiten um dieselben Suchbegriffe konkurrieren.

### Wie unterscheiden sich Seiten mit hoher vs. niedriger Indexierungspriorität?

Seiten mit hoher Priorität haben geringe Klicktiefe, starke interne Verlinkung und einzigartigen, regelmäßig aktualisierten Content. Externe Signale wie Backlinks und Social Shares stützen ihre Relevanz. Technisch zeichnen sie sich durch kurze Ladezeiten, fehlerfreie Markups und keine blockierenden Direktiven aus.

Seiten mit niedriger Priorität sind schwer auffindbar, veraltet, inhaltlich dünn oder technisch fehlerhaft.

### Wie beeinflusst das Crawl Budget die Indexierung neuer Seiten?

Das Crawl Budget bestimmt, wie viele URLs Google pro Domain in einem Zeitfenster crawlt. Die Indexierung neuer Seiten hängt von der effizienten Nutzung dieses Kontingents ab, besonders bei Websites mit hohem URL-Volumen.

- **Ressourcengrenzen:** Google crawlt pro Domain nur eine begrenzte Menge an URLs pro Zeitfenster. Effiziente Nutzung beschleunigt die Indexierung neuer Seiten.

- **Priorisierungslogik:** Seiten mit hoher interner Linkdichte, frischen Inhalten oder externer Autorität erhalten vorrangige Beachtung.

- **Verzögerungsrisiko:** Bei ausgeschöpftem Budget werden neue Inhalte verspätet oder gar nicht gecrawlt.

- **Optimierungshebel:** Fehlerhafte Weiterleitungen, Duplicate Content und Low-Value-Pages verschwenden Crawling-Ressourcen. Deren Reduktion steigert die Effizienz für relevante Inhalte.

Strukturiertes technisches Setup und kluge Inhaltsarchitektur maximieren die Wahrscheinlichkeit, dass neue Seiten zügig indexiert werden.
