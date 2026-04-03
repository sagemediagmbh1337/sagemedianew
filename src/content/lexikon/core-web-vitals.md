---
title: "Core Web Vitals"
category: "Technisches SEO"
description: "Core Web Vitals messen Ladezeit, Reaktionsfähigkeit und visuelle Stabilität. Erfahre, wie LCP, INP und CLS das Google-Ranking beeinflussen."
author:
  name: "André Schäfer"
  role: "Geschäftsführer & SEO-Stratege"
  bio: "André Schäfer (*1990, Kronach) ist Gründer der sagemedia GmbH in Bad Staffelstein. Ehemaliger E-Sportler (n!faculty, deutsches Nationalteam) und seit 2009 im SEO tätig. 2021 gewann er den deutschen SEO-Contest, 2022 Top-5 beim SommerSEO. Sein Fokus: datengetriebene SEO-Strategien mit Branchenexklusivität."
  image: "/v2/images/andre-schaefer-stage.jpg"
related:
  - term: "Sichtbarkeitsindex"
    slug: "sichtbarkeitsindex"
  - term: "Indexierung"
    slug: "indexierung"
  - term: "Generative Engine Optimization"
    slug: "generative-engine-optimization-geo"
  - term: "Relaunch"
    slug: "relaunch"
---

Core Web Vitals sind drei Metriken von Google, die Ladegeschwindigkeit, Interaktivität und visuelle Stabilität einer Webseite anhand realer Nutzerdaten messen. Seit Juni 2021 fließen sie als Teil des Page-Experience-Signals in das Google-Ranking ein.

## Was sind Core Web Vitals?

Google stellte die Web-Vitals-Metriken im Mai 2020 vor. Die Bewertung basiert auf dem 75. Perzentil der gesammelten Felddaten. Eine Seite gilt nur dann als „gut", wenn mindestens 75 % aller Seitenaufrufe die Schwellenwerte einhalten.

Ergänzende Messwerte wie Time to First Byte (TTFB), First Contentful Paint (FCP) und Total Blocking Time (TBT) dienen als diagnostische Indikatoren. Sie fließen nicht direkt in die Core-Web-Vitals-Bewertung ein.

## Welche Metriken gehören zu den Core Web Vitals?

Die drei Metriken decken jeweils einen Aspekt der Nutzererfahrung ab: Ladeperformance, Reaktionsfähigkeit und visuelle Stabilität.

| Metrik | Messgröße | Schwellenwert (Gut) | Auswirkung |
|---|---|---|---|
| Largest Contentful Paint (LCP) | Ladezeit des größten sichtbaren Elements | ≤ 2,5 Sekunden | Wahrgenommene Ladegeschwindigkeit |
| Interaction to Next Paint (INP) | Reaktionszeit auf Nutzerinteraktionen | ≤ 200 Millisekunden | Gefühlte Reaktionsfähigkeit |
| Cumulative Layout Shift (CLS) | Unerwartete Layout-Verschiebungen | ≤ 0,1 | Visuelle Stabilität beim Laden |

### Was misst der Largest Contentful Paint (LCP)?

LCP misst die Renderzeit des größten sichtbaren Inhaltselements im Viewport, typischerweise ein Hero-Bild, eine Überschrift oder ein Textblock. Ein Wert von maximal 2,5 Sekunden gilt als gut. Werte zwischen 2,5 und 4,0 Sekunden erfordern Verbesserungen.

Häufige Ursachen für langsame LCP-Werte: unkomprimierte Bilder, langsame Server-Antwortzeiten und render-blockierende CSS- oder JavaScript-Dateien.

### Was misst Interaction to Next Paint (INP)?

INP erfasst die Latenz zwischen einer Nutzerinteraktion (Klick, Tipp, Tasteneingabe) und der nächsten visuellen Aktualisierung. Im März 2024 löste INP den bisherigen First Input Delay (FID) ab.

Der Unterschied zu FID: INP bewertet alle Interaktionen während des gesamten Seitenbesuchs, nicht nur die erste. Der schlechteste gemessene Wert (abzüglich statistischer Ausreißer) bestimmt den INP-Score. Werte unter 200 Millisekunden gelten als gut.

### Was misst der Cumulative Layout Shift (CLS)?

CLS quantifiziert unerwartete Verschiebungen sichtbarer Elemente während des Seitenaufbaus. Typische Auslöser: nachladende Werbebanner, Bilder ohne definierte Abmessungen, dynamisch eingefügte Inhalte.

Die Berechnung multipliziert den Anteil des verschobenen Bereichs mit der Verschiebungsdistanz. Ein CLS-Wert von maximal 0,1 gilt als gut. Bewusste Verschiebungen durch Nutzeraktionen wie Klicks fließen nicht in die Berechnung ein.

## Warum sind Core Web Vitals ein Google-Rankingfaktor?

Core Web Vitals bilden zusammen mit HTTPS, Mobilfreundlichkeit und dem Verzicht auf aufdringliche Interstitials das Page-Experience-Signal. Sie funktionieren als Tiebreaker: Bei gleichwertiger inhaltlicher Relevanz entscheidet die technische Performance über die Platzierung.

Eine Seite mit starkem Content und schlechten Core-Web-Vitals-Werten fällt im Ranking hinter eine ähnlich relevante Seite mit besserer Performance zurück. Core Web Vitals allein heben keine schwache Seite auf Seite 1, können aber den Unterschied zwischen Position 5 und Position 3 ausmachen.

## Wie werden Core Web Vitals gemessen?

Google stellt mehrere Tools bereit, die entweder Felddaten von echten Nutzern oder Labordaten aus simulierten Tests liefern.

| Tool | Datentyp | Metriken |
|---|---|---|
| Google Search Console | Felddaten (CrUX) | LCP, INP, CLS, gruppiert nach URL-Status |
| PageSpeed Insights | Feld- und Labordaten | Alle Core Web Vitals + diagnostische Metriken |
| Lighthouse | Labordaten | LCP, CLS, TBT (als INP-Proxy) |
| Chrome User Experience Report (CrUX) | Felddaten | LCP, INP, CLS, öffentlich verfügbar via API |
| Chrome DevTools | Labordaten | Performance-Panel mit detaillierter Timeline |

Die Google Search Console liefert den aussagekräftigsten Überblick, weil sie technische Kennzahlen direkt mit dem Indexierungsstatus verknüpft. URLs werden nach Gut, Verbesserung nötig und Schlecht klassifiziert.

### Was ist der Unterschied zwischen Field Data und Lab Data?

Felddaten stammen von echten Chrome-Nutzern unter realen Bedingungen. Google verwendet ausschließlich Felddaten aus dem Chrome User Experience Report für die Ranking-Bewertung.

Labordaten werden in kontrollierten Testumgebungen erhoben, etwa über Lighthouse oder WebPageTest. Sie eignen sich zur Diagnose, bilden aber nicht die reale Nutzervielfalt ab.

Lighthouse kann einen perfekten Score anzeigen, während Felddaten gleichzeitig schlechte Werte melden. Variablen wie Gerätetyp, Netzwerkgeschwindigkeit und Standort erfassen nur Felddaten.

## Wie lassen sich Core Web Vitals verbessern?

Jede der drei Metriken erfordert gezielte technische Maßnahmen.

- **LCP durch Bildoptimierung beschleunigen.** Komprimiere Bilder in WebP oder AVIF, setze Width- und Height-Attribute und lade Above-the-Fold-Bilder per Preload-Hint priorisiert.
- **Server-Antwortzeit reduzieren.** Ein TTFB unter 800 Millisekunden ist die Basis für gute LCP-Werte. Serverseitiges Caching, ein CDN und optimierte Datenbankabfragen senken die Antwortzeit.
- **Render-blockierende Ressourcen eliminieren.** Verschiebe nicht-kritisches JavaScript mit defer oder async. Extrahiere Critical CSS und lade den Rest asynchron nach.
- **JavaScript-Ausführungszeit für INP minimieren.** Zerlege lange Main-Thread-Tasks in kleinere Einheiten (Yield-to-Main-Thread-Pattern). Verwende Web Workers für rechenintensive Operationen.
- **Layout-Verschiebungen für CLS verhindern.** Definiere feste Abmessungen für Bilder, Videos und Werbeplätze. Reserviere Platz für dynamisch nachladende Elemente.
- **Web Fonts stabilisieren.** Verwende font-display: swap oder font-display: optional. Hoste Schriften lokal und nutze Preload für kritische Font-Dateien.

## Wie wirken sich Core Web Vitals auf die Suchmaschinenoptimierung aus?

Performance-Optimierung ist ein messbarer Ranking-Einflussfaktor mit konkreten Schwellenwerten. Neben Content-Qualität und Backlink-Profil muss die technische Seitenperformance kontinuierlich überwacht werden. Die Google Search Console verknüpft den Core-Web-Vitals-Status direkt mit dem Indexierungsprozess.

Seiten mit guter Performance werden von Googlebot häufiger gecrawlt, weil der Server schneller antwortet und weniger Crawl-Budget verbraucht wird. Das beschleunigt die Indexierung neuer Inhalte.

Seiten, die technisch performant und semantisch sauber strukturiert sind, haben die besten Voraussetzungen für Sichtbarkeit in klassischen und KI-generierten Suchergebnissen.
