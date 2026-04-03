---
title: "Cloaking"
category: "Technisches SEO"
description: "Cloaking ist eine verbotene Black-Hat-SEO-Technik, bei der Suchmaschinen und Nutzern unterschiedliche Inhalte angezeigt werden, was zu Abstrafungen führt."
author:
  name: "André Schäfer"
  role: "Geschäftsführer & SEO-Stratege"
  bio: "André Schäfer (*1990, Kronach) ist Gründer der sagemedia GmbH in Bad Staffelstein. Ehemaliger E-Sportler (n!faculty, deutsches Nationalteam) und seit 2009 im SEO tätig. 2021 gewann er den deutschen SEO-Contest, 2022 Top-5 beim SommerSEO. Sein Fokus: datengetriebene SEO-Strategien mit Branchenexklusivität."
  image: "/images/andre-schaefer-stage.jpg"
related: []
---

Cloaking bezeichnet das Ausliefern unterschiedlicher Inhalte an Suchmaschinen-Crawler und menschliche Besucher unter derselben URL. Google stuft Cloaking in den Search Essentials als Spam-Verstoß ein. Die Konsequenz reicht von manuellen Penalties über algorithmische Abwertung bis zur vollständigen Deindexierung der Domain.

## Wie wird Cloaking technisch umgesetzt?

Der Server erkennt den Besucher anhand von User-Agent-String, IP-Adresse oder HTTP-Headern und liefert je nach Ergebnis unterschiedliche HTML-Dokumente aus.

- User-Agent-Erkennung

- IP-gestützte Auslieferung

- JavaScript-Nachladung

- HTTP-Header-Auswertung

- **User-Agent-Erkennung:** Der Server prüft den User-Agent-String der HTTP-Anfrage. Enthält er "Googlebot" oder "Bingbot", wird eine keyword-optimierte HTML-Version ausgeliefert. Menschliche Besucher erhalten eine andere Darstellung.

- **IP-gestützte Auslieferung:** Die IP-Adresse wird gegen bekannte Crawler-IP-Bereiche abgeglichen (Googles Crawler-IPs sind öffentlich dokumentiert). Bei Treffer wird eine crawler-spezifische Version geladen.

- **JavaScript-Nachladung:** Der initiale HTML-Code enthält crawler-optimierte Inhalte. Per JavaScript werden nach dem Seitenaufbau andere Inhalte für Browser-Nutzer nachgeladen. Da Googles Renderer JavaScript ausführt, funktioniert diese Methode zunehmend schlechter.

- **HTTP-Header-Auswertung:** Der Server entscheidet anhand von Accept-Language, Referer oder anderen HTTP-Headern, welche Seitenvariante ausgeliefert wird.

## Warum wird Cloaking genutzt?

- Suchmaschinenoptimierung

- Tarnung kommerzieller Inhalte

- Gezielte Segmentierung

- **Suchmaschinenoptimierung:** Dem Crawler wird eine text- und keywordreiche Version gezeigt, dem Nutzer eine visuell aufbereitete Seite mit wenig Text. Das erzeugt kurzfristig Ranking-Vorteile bei gleichzeitig anderer Nutzererfahrung.

- **Tarnung kommerzieller Inhalte:** Affiliate-Links, Banner und Tracking-Pixel werden vor dem Googlebot versteckt. Der Bot sieht eine informative Seite, der Nutzer sieht Werbeinhalte. Ziel: Google bewertet die Seite als informativ, obwohl sie primär kommerziell ist.

- **Gezielte Segmentierung:** Geografische oder sprachliche Anpassung ist technisch legitim (z.B. Hreflang-basierte Lokalisierung). Cloaking-Grenze: Wenn der Crawler eine andere Sprache oder andere Inhalte sieht als der Nutzer am selben Standort.

## Welche Risiken hat Cloaking?

- Manuelle Penaltys

- Algorithmische Herabstufung

- Deindexierung

- Vertrauensverlust

- **Manuelle Penaltys:** Googles Search-Quality-Team identifiziert Cloaking bei manuellen Überprüfungen. Die Penalty erscheint in der Google Search Console unter "Manuelle Maßnahmen". Aufhebung erfordert eine Reconsideration Request nach Entfernung des Cloakings. Bearbeitungszeit: Wochen bis Monate.

- **Algorithmische Herabstufung:** Googles SpamBrain (seit 2022 Hauptsystem zur Spam-Erkennung) erkennt Cloaking-Muster automatisch. Betroffene Seiten verlieren Rankings ohne Vorwarnung und ohne manuellen Eintrag in der Search Console.

- **Deindexierung:** Google entfernt die gesamte Domain aus dem Index. Die Seite erscheint bei keiner Suchanfrage mehr. Wiederaufnahme erfordert vollständige Bereinigung und Reconsideration Request.

- **Vertrauensverlust:** Nutzer, die über ein Suchergebnis auf andere Inhalte treffen als erwartet, verlassen die Seite sofort. Die steigende Absprungrate signalisiert Google niedrige Relevanz.

### Hat Cloaking strafrechtliche Auswirkungen in Deutschland?

Cloaking allein ist nicht strafbar. Strafrechtliche Relevanz entsteht durch Kombination mit anderen Verstößen:

- **§ 263 StGB (Betrug):** Wenn Cloaking zur gezielten Täuschung von Nutzern dient, die zu einem Vermögensschaden führt.
- **UWG (Unlauterer Wettbewerb):** Irreführende Werbung durch unterschiedliche Inhalte für Crawler und Nutzer.
- **§ 106 UrhG:** Wenn Cloaking zur Verbreitung urheberrechtlich geschützter Inhalte eingesetzt wird.
- **§ 202a StGB:** Bei unbefugtem Datenzugriff im Zusammenhang mit Cloaking-Techniken.
- **DSGVO/BDSG:** Bei unrechtmäßiger Verarbeitung personenbezogener Daten durch Cloaking-Skripte.

### Wie unterscheidet sich Cloaking von Doorway Pages?

Cloaking zeigt unter einer URL zwei verschiedene Inhalte (crawler-spezifisch vs. nutzer-spezifisch). Doorway Pages sind eigenständige, keyword-optimierte Seiten, die nur als Einstiegspunkte dienen und per Redirect oder Klick zur eigentlichen Zielseite weiterleiten.

Cloaking manipuliert die Inhaltsebene einer bestehenden URL. Doorway Pages manipulieren die Seitenstruktur durch zusätzliche URLs. Beide verstoßen gegen die Google-Search-Essentials. Google erkennt Doorway Pages an dünnem Inhalt, fehlender interner Verlinkung und Redirect-Ketten.

### Inwiefern ist Cloaking ein klassisches Beispiel für Black Hat SEO?

Cloaking verstößt gegen Googles Grundprinzip: "Erstelle Seiten für Nutzer, nicht für Suchmaschinen." Die Google Search Essentials listen Cloaking explizit als Spam-Verstoß. SpamBrain erkennt Cloaking-Muster durch maschinelles Lernen. Die Erkennungsrate steigt mit jeder Iteration, weshalb Cloaking als Ranking-Strategie ein sinkendes Kosten-Nutzen-Verhältnis aufweist.
