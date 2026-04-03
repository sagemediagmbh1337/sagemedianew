---
title: "PageRank"
category: "OffPage SEO"
description: "PageRank ist Googles ursprünglicher Algorithmus zur Bewertung von Webseiten anhand der Quantität und Qualität eingehender Backlinks auf einer Skala von 0 bis 10."
author:
  name: "André Schäfer"
  role: "Geschäftsführer & SEO-Stratege"
  bio: "André Schäfer (*1990, Kronach) ist Gründer der sagemedia GmbH in Bad Staffelstein. Ehemaliger E-Sportler (n!faculty, deutsches Nationalteam) und seit 2009 im SEO tätig. 2021 gewann er den deutschen SEO-Contest, 2022 Top-5 beim SommerSEO. Sein Fokus: datengetriebene SEO-Strategien mit Branchenexklusivität."
  image: "/v2/images/andre-schaefer-stage.jpg"
related: []
---

## Wie ist PageRank entstanden?

Larry Page und Sergey Brin entwickelten PageRank 1996 an der Stanford University. Sie übertrugen das Prinzip bibliometrischer Zitationsanalysen auf Webseiten: Jeder Hyperlink zählt als Empfehlung, wobei die Autorität der verlinkenden Seite in die Gewichtung einfließt.

Damalige Suchmaschinen wie AltaVista stuften Seiten rein nach Schlagwortfrequenz ein. Page und Brin nutzten stattdessen das Random-Surfer-Modell, das Nutzerverhalten simuliert und eine probabilistische Relevanzbewertung ermöglicht. Vorarbeiten von Eugene Garfield (Zitationsanalyse), Jon Kleinberg (HITS-Algorithmus) und Robin Li (RankDex) schufen das akademische Fundament.

1997 wurde PageRank patentiert. Die Rechte blieben bei Stanford. Google erhielt exklusive Nutzungslizenzen. 1998 gründeten Page und Brin Google auf Basis dieses Algorithmus.

### Wurde die Echtheit von PageRank bestätigt?

Ja. Die algorithmische Struktur basiert auf der Google Matrix, deren Eigenvektor sich über den Satz von Perron-Frobenius eindeutig bestimmen lässt. Hunderte akademische Publikationen haben den Algorithmus unabhängig analysiert und bestätigt.

Gary Illyes erklärte 2017 öffentlich, dass PageRank weiterhin im Suchmaschinenkern relevant ist. Die Toolbar-Anzeige wurde 2016 deaktiviert, der interne Algorithmus arbeitet weiter.

## Gibt es ein Patent zum PageRank von Google?

Das Patent US6285999B1 wurde 1998 angemeldet und 2001 erteilt. Titel: „Method for Node Ranking in a Linked Database". Larry Page ist als Erfinder eingetragen. Stanford hielt das Patent. Google sicherte sich exklusive Nutzungsrechte und übertrug dafür 1,8 Millionen Aktien an Stanford. Stanford verkaufte diese 2005 für rund 336 Millionen US-Dollar. Das Patent lief im Juni 2019 aus und ist seitdem freigegeben.

## Wie lässt sich der PageRank ermitteln?

Die Berechnung basiert auf einem rekursiven Verfahren über die gesamte Linkstruktur eines Netzwerks. Die Relevanz einer Seite ergibt sich aus der Summe der Gewichtungen aller eingehenden Backlinks. Verweise von stark bewerteten Seiten haben höheren Einfluss. Der PageRank einer verlinkenden Seite wird gleichmäßig auf alle ausgehenden Zielseiten verteilt.

Beginnend mit beliebigen Startwerten werden die Werte zyklisch aktualisiert, bis sich ein stationärer Zustand einstellt. Dieses Konvergenzverhalten beruht auf stochastischer Matrixalgebra.

Spezialisierte Software wie Gephi oder NetworkX kann die Berechnung für begrenzte Netzwerke nachbilden. Für das globale Web erfordert die Berechnung massive Infrastruktur.

### Gibt es eine offizielle Formel zur Berechnung des PageRanks?

Ja. Die Formel lautet:

**PR(A) = (1 − d) + d × Σ [PR(Ti) / C(Ti)]**

PR(A) ist der PageRank der Zielseite A. PR(Ti) ist der PageRank jeder verlinkenden Seite Ti. C(Ti) ist die Anzahl der ausgehenden Links auf Ti. Der Parameter d ist der Dämpfungsfaktor, typischerweise 0,85.

Der Dämpfungsfaktor modelliert das Random-Surfer-Konzept: Mit 85 % Wahrscheinlichkeit klickt der Nutzer auf einen Link der aktuellen Seite. Mit 15 % Wahrscheinlichkeit springt er zufällig zu einer anderen Seite. Die Berechnung wird iterativ wiederholt, bis sich die Werte stabilisieren.

## Wie wichtig ist PageRank für den Algorithmus?

PageRank ist weiterhin ein Bestandteil des Google-Algorithmus, aber einer von über 200 Signalen. In der Frühphase von Google war PageRank der dominierende Rankingfaktor. Heute fließen Content-Tiefe, Nutzerverhalten, technische Performance und semantische Passgenauigkeit gleichberechtigt ein.

Der interne PageRank bleibt relevant für die Einschätzung von Linkautorität und die Verteilung von Relevanz innerhalb einer Website durch interne Verlinkung.

### Welche Auswirkungen hat PageRank auf die Rankings einer Webseite?

- Steigerung der Sichtbarkeit durch hohe Linkautorität

- Relevanzgewichtung durch hochwertige Backlinks

- Beeinflussung durch interne Verlinkungsstruktur

- Differenzierung zwischen DoFollow und NoFollow Links

- Risiko durch toxische oder künstliche Linkquellen

- Eingebettete Rolle in Googles Rankingmatrix neben weiteren Faktoren

- **Sichtbarkeit durch verlinkte Autorität:** Webseiten mit hohem PageRank erscheinen bei relevanten Suchanfragen weiter oben. Wikipedia oder große Nachrichtenseiten gelten als starke Referenzquellen.

- **Qualität vor Quantität:** Ein einzelner Backlink von *zeit.de* oder *heise.de* wiegt stärker als dutzende Links von irrelevanten Quellen. Google analysiert das gesamte Umfeld des Links inklusive Domainreputation.

- **Interne Linkarchitektur:** PageRank lässt sich innerhalb einer Domain gezielt verteilen. Links von der Startseite oder zentralen Kategorien zu fokussierten Unterseiten stärken deren Rankings und Crawlbarkeit.

- **DoFollow versus NoFollow:** Nur DoFollow-Links übertragen PageRank aktiv. NoFollow-Attribute signalisieren Suchmaschinen, dass dem Link kein Vertrauen geschenkt wird.

- **Risiko durch toxische Links:** Verweise von Spam-Domains, Linkfarmen oder gehackten Seiten können zu algorithmischer Abstrafung führen. Googles Penguin-Filter erkennt solche Manipulationsmuster.

- **Eingebettete Rolle im modernen Algorithmus:** Google bezieht über 200 Signale ein. PageRank agiert als verdeckter Autoritätsindikator innerhalb dieses Systems.

## Wie kann man den PageRank steigern?

- Aufbau relevanter, thematisch passender Backlinks

- Erstellung verlinkungswürdiger Inhalte

- Optimierung der internen Linkarchitektur

- Technische Verbesserung der Websitestruktur

- Nutzung von Verzeichnissen und Foren

- Reichweitenerhöhung über soziale Plattformen

- **Aufbau externer Verlinkungen:** Backlinks von *spiegel.de*, *t3n.de* oder *netzpolitik.org* fungieren als starke Autoritätssignale. Natürliche Links aus redaktioneller Empfehlung wiegen schwerer als gekaufte Verweise.

- **Erstellung verlinkungsstarker Inhalte:** Tiefgreifende Ratgeber, datenbasierte Studien oder interaktive Infografiken werden häufiger als Referenzquelle verlinkt. Content dient als Magnet für freiwillige Verlinkungen.

- **Stärkung durch interne Verlinkung:** Strategische Links von starken Seiten (Startseite, Kategorien) zu fokussierten Unterseiten verteilen vorhandenen PageRank gezielt. Screaming Frog und Sitebulb analysieren die interne Linkstruktur datenbasiert.

- **Technische SEO:** Schnelle Ladezeiten, saubere Quellcodes und mobile Optimierung verbessern die Indexierung. Eine klare Seitenarchitektur erhöht die Relevanzverteilung im Crawlingprozess.

- **Zusätzliche Backlinkquellen:** Seriöse Branchenverzeichnisse und thematische Fachportale liefern ergänzende Backlinks. Besonders lokale Unternehmen profitieren von Plattformen mit vertrauenswürdigem Linkprofil.

- **Indirekte Verstärkung durch soziale Signale:** Inhalte mit hoher Reichweite auf LinkedIn, YouTube oder X generieren sekundäre Backlinks, wenn Blogs oder Magazine sie aufgreifen. Plattformlinks selbst sind meist NoFollow, der indirekte Effekt wirkt trotzdem.

### Wie unterscheiden sich Link Equity und PageRank?

Link Equity bezeichnet den über Hyperlinks weitergegebenen Wert. Dieser hängt von Domainautorität, thematischer Relevanz und Anzahl ausgehender Links ab. PageRank ist der Algorithmus, der diesen kumulierten Wert in einen mathematisch messbaren Score übersetzt.

Link Equity ist dynamisch, kontextsensibel und steuerbar. PageRank ist ein statischer Indexwert, der die gesammelte Bedeutung einer Seite reflektiert. Kurz: Link Equity ist der Input, PageRank das algorithmische Output.

## Zählt PageRank als iterativer Algorithmus?

Ja. Die Berechnung basiert auf wiederholter Anwendung einer rekursiven Formel. Der PageRank jeder Seite wird in Abhängigkeit von den aktuellen Werten der verlinkenden Seiten bestimmt. Dieser Prozess wird durchlaufen, bis sich die Werte stabilisieren. Die Bedeutung einer Seite lässt sich nicht isoliert berechnen, sondern nur im Beziehungsgeflecht des gesamten Netzwerks.

### Wie wirkt sich die Linkstruktur auf die Anzahl der Iterationen beim PageRank aus?

Ungleichmäßige, asymmetrische Linkstrukturen erfordern mehr Iterationen als symmetrische Netze. Sackgassen (Seiten ohne ausgehende Links), Rückkopplungen und hierarchische Strukturen verzögern die Konvergenz.

Der Dämpfungsfaktor beeinflusst die Geschwindigkeit: 0,85 verlangsamt die Gleichverteilung und verstärkt die Abhängigkeit vom konkreten Linkmuster. Niedrigere Werte verkürzen die Rechenzyklen. Vorherige Näherungswerte aus früheren Berechnungen beschleunigen die Konvergenz zusätzlich.

In realen Webgraphen werden zwischen 50 und 100 Iterationen benötigt.
