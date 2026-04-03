---
title: "Broken Link"
category: "Technisches SEO"
description: "Broken Links sind defekte Verweise auf nicht erreichbare Seiten (404-Fehler). Sie schaden der Nutzererfahrung und können negative SEO-Auswirkungen haben."
author:
  name: "André Schäfer"
  role: "Geschäftsführer & SEO-Stratege"
  bio: "André Schäfer (*1990, Kronach) ist Gründer der sagemedia GmbH in Bad Staffelstein. Ehemaliger E-Sportler (n!faculty, deutsches Nationalteam) und seit 2009 im SEO tätig. 2021 gewann er den deutschen SEO-Contest, 2022 Top-5 beim SommerSEO. Sein Fokus: datengetriebene SEO-Strategien mit Branchenexklusivität."
  image: "/v2/images/andre-schaefer-stage.jpg"
related: []
---

Ein Broken Link (Dead Link) ist ein Hyperlink, dessen Ziel-URL den HTTP-Statuscode 404, 410 oder 5xx zurückgibt statt den angefragten Inhalt. Defekte Links unterbrechen den internen PageRank-Fluss, verhindern die Indexierung verlinkter Seiten und vernichten den SEO-Wert eingehender Backlinks, die auf nicht mehr existierende URLs zeigen.

## Was ist ein Broken Link? Definition, Statuscodes und typische Fehlermeldungen

Beim Klick auf einen Hyperlink sendet der Browser eine HTTP-Anfrage an den Server der Ziel-URL. Antwortet der Server mit Statuscode 200, wird die Seite geladen. Bei einem Broken Link antwortet der Server stattdessen mit einem Fehlercode:

- **404 Not Found:** Die URL existiert nicht (mehr) auf dem Server.
- **410 Gone:** Die Ressource wurde dauerhaft entfernt. Anders als 404 signalisiert 410 dem Googlebot, die URL aus dem Index zu löschen.
- **500 Internal Server Error:** Serverfehler verhindert die Auslieferung.
- **503 Service Unavailable:** Temporäre Nichterreichbarkeit, z.B. bei Wartungsarbeiten.
- **Timeout:** Der Server antwortet nicht innerhalb der festgelegten Frist.

## Wie entstehen Broken Links? Häufige Ursachen

Der häufigste Auslöser ist ein Website-Relaunch: URLs ändern sich, 301-Redirects werden nicht eingerichtet, interne und externe Links zeigen auf die alten Pfade. Bei einer Website mit 500 Unterseiten und durchschnittlich 10 internen Links pro Seite entstehen bei einer URL-Umstrukturierung ohne Redirect-Mapping potenziell tausende Broken Links.

Tippfehler in manuell eingetragenen URLs sind der zweithäufigste Grund, besonders in Blogartikeln, Footer-Links und Bannern. In CMS wie WordPress können Plugin-Updates oder Permalink-Änderungen interne Links brechen, ohne dass der Betreiber es bemerkt.

### Typische Gründe für Broken Links im Überblick:

- Relaunch und Umstrukturierung ohne Redirect-Mapping

- Umbenennung von URLs bei neuen Sprachversionen oder Kategorien

- Löschung von Inhalten, PDFs oder Bildern ohne Ersatzseite

- Vertippte URLs in Blogartikeln, Footer, Navigation oder Bannern

- CMS-Updates, die Permalink-Strukturen verändern

- Domainwechsel, Servermigration oder fehlerhafte .htaccess-Regeln

## User Experience und Usability: Was tote Links mit Ihren Nutzern machen

Ein Broken Link auf einer Produktseite oder einem Kontaktformular kostet direkt Conversions. Der Nutzer erwartet eine Zielseite und erhält eine Fehlermeldung. Die Absprungrate steigt, die Verweildauer sinkt. Auf einer E-Commerce-Seite mit 100.000 monatlichen Besuchern und 2 % Broken-Link-Quote verlieren ca. 2.000 Nutzer pro Monat den Zugang zum gewünschten Inhalt.

Im B2B-Bereich wirken Dead Links besonders schädlich: Potenzielle Kunden schließen von einer ungepflegten Website auf veraltete Fachkompetenz.

## Broken Links und SEO: Warum defekte Links Ihre Sichtbarkeit kosten

Interne Broken Links unterbrechen den PageRank-Fluss. Wenn Seite A auf Seite B verlinkt und Seite B eine 404 zurückgibt, erreicht der PageRank von Seite A die Zielseite nicht. Seite B verliert Autorität, Seite A verschwendet Linkjuice.

Externe Backlinks auf 404-Seiten verlieren ihren SEO-Wert vollständig. Ein Backlink von einer DR-70-Domain auf eine gelöschte Unterseite verpufft, wenn kein 301-Redirect auf eine thematisch passende Seite zeigt.

Crawler haben ein begrenztes Crawl-Budget pro Domain. Jede 404-URL, die der Googlebot aufruft, reduziert die verfügbaren Crawls für indexierbare Seiten.

## Link Checker und Broken Link Checker: Tools, um tote Links aufzuspüren

Ein Link Checker crawlt alle URLs einer Website, prüft die HTTP-Statuscodes und listet Fehler auf. Die wichtigsten Tools:

- **Google Search Console:** Zeigt 404-Fehler unter “Seiten” > “Nicht indexiert” mit Referrer-URL.
- **Screaming Frog (Desktop):** Crawlt bis zu 500 URLs kostenlos, filtert nach Statuscode, exportiert als CSV.
- **Ahrefs Site Audit:** Erkennt interne und externe Broken Links mit Backlink-Daten.
- **Dead Link Checker / Dr. Link Check (Online):** Kostenlos für kleine Websites, keine Installation nötig.
- **WordPress-Plugins (Broken Link Checker):** Prüft Links automatisch im Hintergrund.

Workflow: Start-URL eingeben, crawlen lassen, nach Statuscode 4xx/5xx filtern, interne und externe Links trennen, nach Backlink-Anzahl priorisieren, Redirect oder Korrektur durchführen.

## 404-Seiten und Weiterleitungen: Wie Sie mit 301 Redirects sauber reparieren

Ein 301-Redirect überträgt 90-99 % des PageRank der alten URL auf die neue Zielseite (laut Google fließt kein PageRank-Verlust mehr bei 301-Redirects). Entscheidend: Die Zielseite muss thematisch zur alten URL passen. Ein Redirect von “/schuhe/nike-air-max” auf die Startseite wird von Google als Soft-404 behandelt.

### Best Practices für 404-Seiten und Weiterleitungen:

- Individuelle 404-Seite mit Suchfeld und Links zu den meistbesuchten Seiten

- 301-Redirect auf thematisch passende Zielseite bei dauerhaft gelöschten Inhalten

- 410-Statuscode bei Inhalten, die ohne Ersatz gelöscht wurden. Das beschleunigt die Deindexierung

- 404-Logs monatlich auswerten und häufig aufgerufene Fehlerseiten zuerst beheben

## Interne und externe Broken Links: Unterschiedliche Strategien für Verweise

Bei internen Links haben Sie volle Kontrolle: URL korrigieren, Redirect setzen oder Link entfernen. Jede URL-Änderung im CMS sollte ein automatisches Redirect-Mapping auslösen. In WordPress erledigen Plugins wie “Redirection” das automatisch.

Bei externen Links verweisen Sie auf fremde Domains. Prüfen Sie quartalsweise, ob Ziel-URLs noch erreichbar sind. Ersetzen Sie tote Links durch aktuelle Quellen oder Wayback-Machine-Archivlinks. Wenn kein Ersatz existiert, entfernen Sie den Link. Ein Dead Link schadet der Nutzererfahrung mehr als ein fehlender Verweis.

## Broken Links als Chance für SEO, Content und Linkaufbau

Broken-Link-Building nutzt tote Links auf fremden Websites als Outreach-Anlass: Sie identifizieren einen 404-Link auf einer thematisch relevanten Seite, erstellen passenden Ersatz-Content und bieten dem Webmaster Ihren Inhalt als neues Linkziel an. Die Erfolgsquote liegt bei 5-15 % der kontaktierten Webmaster.

### Typische Einsatzmöglichkeiten von Broken-Link-Daten:

- Domains mit toten Links finden, die thematisch zur eigenen Seite passen

- Inhalte erstellen, die gelöschte Ressourcen mit vielen Backlinks ersetzen

- Seiten priorisieren, auf die wertvolle, aber ins Leere laufende Backlinks zeigen

- Alte Themen mit aktueller Keyword-Recherche neu aufsetzen

## sagemedia: Broken Links mit SEO-Strategie in den Griff kriegen

sagemedia identifiziert Broken Links im Rahmen technischer SEO-Audits: Crawl-Analyse, Backlink-Prüfung, Redirect-Mapping und 404-Monitoring. Ziel ist ein sauberer Linkgraph ohne PageRank-Verluste. Das ist die Basis für stabile Rankings und eine funktionierende Nutzerführung.

### Was ist ein Broken Link?

Ein Broken Link ist ein Hyperlink, dessen Ziel-URL einen HTTP-Fehlercode zurückgibt (404, 410, 5xx). Der Server kann die angefragte Ressource nicht ausliefern.

### Wie erkenne ich defekte Links?

Google Search Console, Screaming Frog, Ahrefs Site Audit oder CMS-Plugins wie “Broken Link Checker” für WordPress scannen automatisch nach 4xx- und 5xx-Statuscodes. sagemedia führt diese Prüfung als Teil des technischen SEO-Audits durch.

### Wie funktioniert ein Link eigentlich?

Der Browser sendet eine HTTP-GET-Anfrage an die im href-Attribut hinterlegte URL. Der Server antwortet mit Statuscode 200 und dem HTML-Dokument. Bei Broken Links antwortet er mit 4xx oder 5xx, und der Browser zeigt die Fehlerseite.

### Warum sind Links generell wichtig?

Interne Links verteilen PageRank und ermöglichen dem Googlebot, alle Unterseiten zu entdecken. Externe Backlinks signalisieren Google thematische Autorität. Jeder defekte Link unterbricht einen dieser Mechanismen.
