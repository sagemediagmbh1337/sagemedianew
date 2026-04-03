---
title: "BERT"
category: "Suchmaschinen"
description: "BERT ist Googles KI-Sprachmodell, das Suchanfragen kontextbezogen versteht und die Qualität der Suchergebnisse durch Natural Language Processing verbessert."
author:
  name: "André Schäfer"
  role: "Geschäftsführer & SEO-Stratege"
  bio: "André Schäfer (*1990, Kronach) ist Gründer der sagemedia GmbH in Bad Staffelstein. Ehemaliger E-Sportler (n!faculty, deutsches Nationalteam) und seit 2009 im SEO tätig. 2021 gewann er den deutschen SEO-Contest, 2022 Top-5 beim SommerSEO. Sein Fokus: datengetriebene SEO-Strategien mit Branchenexklusivität."
  image: "/images/andre-schaefer-stage.jpg"
related: []
---

BERT (Bidirectional Encoder Representations from Transformers) ist ein 2018 von Google veröffentlichtes Sprachmodell mit 340 Millionen Parametern (BERT-Large). Es analysiert Wörter bidirektional, gleichzeitig von links nach rechts und von rechts nach links, und versteht dadurch Wortbedeutungen im Satzkontext. Google setzt BERT seit Oktober 2019 in der Suche ein, um Suchanfragen semantisch statt nur per Keyword-Matching zu interpretieren.

## Wie unterscheiden sich BERT und GPT?

BERT liest einen Satz gleichzeitig in beide Richtungen und extrahiert Bedeutung (Natural Language Understanding). GPT liest von links nach rechts und generiert Text (Natural Language Generation). BERT verwendet nur den Encoder-Teil der Transformer-Architektur, GPT nur den Decoder-Teil.

Konkretes Beispiel: Bei der Suchanfrage "Kann man mit einem Visum aus Brasilien in die USA reisen" erkennt BERT, dass "aus" sich auf die Herkunft des Visums bezieht, nicht auf die Herkunft der Person. GPT würde diese Anfrage eher als Aufforderung zur Textproduktion interpretieren. BERT dekonstruiert Bedeutung, GPT konstruiert Ausdruck.

## Wie funktioniert BERT?

BERT basiert auf gestapelten Encoder-Layern mit Self-Attention-Mechanismen. BERT-Base nutzt 12 Layer, BERT-Large 24 Layer. Im Training werden 15 % der Wörter eines Satzes durch ein [MASK]-Token ersetzt. Das Modell lernt, diese maskierten Wörter aus dem umgebenden Kontext vorherzusagen (Masked Language Modeling).

Zusätzlich trainiert BERT mit Next Sentence Prediction (NSP): Zwei Sätze werden präsentiert und das Modell bestimmt, ob Satz B tatsächlich auf Satz A folgt. Das Vortraining erfolgte auf dem englischen Wikipedia-Korpus (2,5 Milliarden Wörter) und dem BookCorpus (800 Millionen Wörter). Nach dem Vortraining lässt sich BERT per Fine-Tuning auf spezifische Aufgaben wie Textklassifizierung oder Named-Entity-Recognition anpassen.

## Nutzt BERT einen Selbstaufmerksamkeitsmechanismus?

Der Self-Attention-Mechanismus berechnet für jedes Wort im Satz einen Gewichtungswert zu allen anderen Wörtern. Im Satz "Das Tier überquerte die Straße, weil es müde war" berechnet Self-Attention, dass "es" sich auf "Tier" bezieht, nicht auf "Straße". Jeder Attention-Head fokussiert auf andere linguistische Beziehungen: syntaktische Abhängigkeiten, Koreferenzen oder semantische Rollen.

BERT-Large verwendet 16 Attention-Heads pro Layer, insgesamt 384 Attention-Heads. Diese parallele Verarbeitung ermöglicht es, mehrdeutige Sätze zu disambiguieren, ohne den Text sequentiell zu lesen.

## ** Wofür wird BERT verwendet? **

- Fragebeantwortung

- Textzusammenfassung

- Satzvorhersage

- Konversationsantworten

- Disambiguierung von Wortbedeutungen

- Koreferenzauflösung

- Sentimentanalyse

- Patentklassifikation

- Dokumentenklassifizierung

- Biomedizinisches Text Mining

- Visuell-linguistische Analyse

- Wissenschaftliche Texte

- Medizinische Empfehlungen

- Effiziente Modelle (TinyBERT, DistilBERT, ALBERT)

- Abschnittsvorhersage (SpanBERT)

- Leistungssteigerung (RoBERTa)

- Hochwertige Textrepräsentationen (ELECTRA)

- **Fragebeantwortung:** Google setzt BERT ein, um bei Suchanfragen die passende Textpassage aus einem Dokument zu extrahieren. Das Modell identifiziert Start- und Endposition der Antwort im Quelltext.

- **Textzusammenfassung:** BERT extrahiert die relevantesten Sätze aus langen Texten. Extractive Summarization mit BERT (BertSum) erreicht auf dem CNN/DailyMail-Benchmark State-of-the-Art-Ergebnisse.

- **Satzvorhersage:** Durch NSP-Training erkennt BERT logische Satzfolgen. Das dient der Kohärenzprüfung in automatisierter Textproduktion.

- **Konversationsantworten:** Chatbots nutzen BERT-basierte Modelle, um die Nutzerintention in Dialogkontexten zu klassifizieren und passende Antwortvorlagen auszuwählen.

- **Disambiguierung von Wortbedeutungen und Koreferenzauflösung:** BERT trennt "Bank" (Geldinstitut) von "Bank" (Sitzgelegenheit) und löst Pronomenreferenzen wie "sie" auf den richtigen Bezug auf.

- **Sentimentanalyse:** BERT klassifiziert Texte nach Stimmung. Fine-Tuning auf dem SST-2-Benchmark erreicht über 94 % Genauigkeit.

- **Patentklassifikation (PatentBERT):** PatentBERT kategorisiert Patentdokumente automatisch nach IPC-Klassen.

- **Dokumentenklassifizierung (DocBERT):** DocBERT ordnet Dokumente in vordefinierte Kategorien ein, z.B. für Nachrichtenaggregate oder juristische Datenbanken.

- **Biomedizinisches Text Mining (BioBERT):** BioBERT wurde auf PubMed-Abstracts (4,5 Milliarden Wörter) nachtrainiert und extrahiert Wirkstoff-Krankheit-Relationen aus Fachliteratur.

- **Visuell-linguistische Analyse (VideoBERT):** VideoBERT kombiniert visuelle Token aus Videos mit Sprach-Token und generiert automatische Videobeschreibungen.

- **Wissenschaftliche Texte (SciBERT):** SciBERT wurde auf 1,14 Millionen Volltextartikeln aus Semantic Scholar trainiert und erkennt domänenspezifische Entitäten wie Methodennamen oder Datensätze.

- **Medizinische Empfehlungen (G-BERT):** G-BERT nutzt ICD- und ATC-Codes zur Generierung personalisierter Medikationsempfehlungen.

- **Effiziente Modelle (TinyBERT, DistilBERT, ALBERT):** DistilBERT reduziert BERTs Parameterzahl um 40 % bei 97 % der Leistung. TinyBERT komprimiert auf 7,5 Millionen Parameter. ALBERT teilt Parameter über Layer hinweg und senkt den Speicherbedarf um 18x.

- **Abschnittsvorhersage (SpanBERT):** SpanBERT maskiert zusammenhängende Wortgruppen statt einzelner Token und übertrifft BERT bei Koreferenzauflösung.

- **Leistungssteigerung (RoBERTa):** RoBERTa trainiert mit 160 GB Text (vs. BERTs 16 GB), dynamischer Maskierung und ohne NSP. Batch-Größe: 8.000.

- **Hochwertige Textrepräsentationen (ELECTRA):** ELECTRA ersetzt das [MASK]-Verfahren durch einen Generator-Diskriminator-Ansatz. Das Modell lernt, ob ein Token original oder ersetzt ist, und erreicht mit weniger Rechenzeit BERT-Niveau.

### Was ist maskierte Sprachmodellierung?

Beim Masked Language Modeling (MLM) werden 15 % der Eingabe-Token zufällig ausgewählt. Von diesen werden 80 % durch [MASK] ersetzt, 10 % durch ein zufälliges Wort und 10 % bleiben unverändert. Das Modell prognostiziert das originale Wort. Diese Verteilung verhindert, dass BERT lernt, nur auf [MASK]-Token zu achten.

## Wie versteht der BERT Algorithmus Entitäten?

BERT löst Entitäten über bidirektionale Kontextanalyse auf. Im Satz "Paris Hilton besuchte Paris" erkennt BERT durch Self-Attention, dass das erste "Paris" von "Hilton" begleitet wird (Person) und das zweite "Paris" Objekt von "besuchte" ist (Ort).

Im Pre-Training lernt BERT typische Entitätsmuster: "Apple" gefolgt von "CEO" oder "Aktie" verweist auf das Unternehmen, "Apple" gefolgt von "Kuchen" oder "Baum" auf die Frucht. Für NER-Aufgaben wird ein Klassifikations-Layer auf BERT aufgesetzt und mit annotierten Daten (z.B. CoNLL-2003) auf Kategorien wie PER, ORG, LOC und MISC trainiert.

### Was ist Named-Entity-Recognition (NER)?

NER identifiziert und klassifiziert Eigennamen in unstrukturiertem Text. Das System erkennt Begriffe wie "Berlin" oder "Microsoft" und ordnet ihnen Kategorien zu: LOC (Ort), ORG (Organisation), PER (Person), MISC (Sonstiges). BERT-basierte NER-Modelle erreichen auf dem CoNLL-2003-Benchmark F1-Scores über 92 %.

Der Prozess läuft in zwei Schritten: Erkennung der Token-Grenzen einer Entität, dann Klassifikation des Entitätstyps. Anwendungen umfassen Suchmaschinen-Indexierung, automatisierte Dokumentenanalyse, Chatbot-Intent-Erkennung und medizinische Textauswertung.

## ** Welche Rolle spielt BERT für Featured Snippets? **

BERT bestimmt mit, welche Textpassage als Featured Snippet über den organischen Ergebnissen erscheint. Bei der Anfrage "Brauche ich ein Visum für die USA aus Brasilien" erkennt BERT die Präposition "aus" als Herkunftsangabe des Visums und wählt die passende Textpassage.

Vor BERT ignorierte Google häufig Präpositionen, Negationen und Konjunktionen. BERT erkennt den Bedeutungsunterschied zwischen "Reise nach Paris" und "Reise von Paris". Bei Longtail-Anfragen und Sprachsuche-Queries steigt der Einfluss von BERT, weil diese Anfragen mehr grammatische Struktur enthalten als Zwei-Wort-Queries.

## Wie funktioniert Query Rewriting mit BERT?

BERT reformuliert Suchanfragen, indem es mehrdeutige Terme durch präzisere Entitäten ersetzt. "Apple Problem" wird kontextabhängig zu "Apple Inc. Softwarefehler" oder "Apfelbaum Schädlingsbefall". Das Modell segmentiert Phrasen wie "noise cancelling" als zusammengehörige Einheit statt als zwei separate Wörter.

Geo-BERT integriert Standortdaten: Die Anfrage "Pizza bestellen" wird je nach GPS-Koordinaten mit lokalen Restaurantnamen angereichert. Die Query-Reformulierungen verbessern sowohl Recall (mehr relevante Ergebnisse) als auch Precision (weniger irrelevante Ergebnisse).

## Wird BERT im Google AI Mode genutzt?

BERT bleibt Kernbestandteil des klassischen Google-Ranking-Systems für Query-Interpretation und Retrieval. Im "Google AI Mode", dem KI-gestützten Suchdienst mit synthetisierten Antworten, steuert Gemini 2.5 die Antwortgenerierung, Deep Search und multimodale Eingabeverarbeitung. BERT liefert dort Zuarbeit bei der Query-Analyse, ist aber nicht das generierende Modell.

## Welche Auswirkungen hat BERT auf die Suchmaschinenoptimierung?

BERT verschiebt den Ranking-Fokus von exakter Keyword-Übereinstimmung zur semantischen Relevanz. Seiten, die eine Suchanfrage inhaltlich beantworten, ranken besser als Seiten mit reinem Keyword-Matching. Keyword-Stuffing verliert Wirkung, weil BERT den gesamten Satzkontext auswertet.

Longtail-Anfragen mit 4+ Wörtern profitieren am stärksten von BERT. Seiten mit natürlich formuliertem, themenumfassendem Content erhalten mehr Sichtbarkeit bei diesen Queries. Strukturierte Absätze mit klaren Fragestellungen und direkten Antworten erhöhen die Chance auf Featured-Snippet-Auswahl.

### Was ist Natural Language Processing (NLP)?

NLP vereint Methoden aus Computerlinguistik, Statistik und Deep Learning zur maschinellen Verarbeitung menschlicher Sprache. Die Kernaufgaben: Tokenisierung (Text in Wörter zerlegen), Part-of-Speech-Tagging (Wortarten bestimmen), NER (Eigennamen erkennen), Sentimentanalyse (Stimmung klassifizieren), maschinelle Übersetzung und Speech-to-Text. BERT hat 2018 bei 11 NLP-Benchmarks gleichzeitig State-of-the-Art-Ergebnisse gesetzt und damit die gesamte NLP-Forschung in Richtung Transformer-Modelle verschoben.

### Was ist RoBERTa und wie unterscheidet es sich von BERT?

RoBERTa (Facebook AI, 2019) optimiert BERTs Training durch drei Änderungen: dynamische statt statischer Maskierung (Maskenpositionen ändern sich pro Epoche), Wegfall der NSP-Aufgabe und 10x mehr Trainingsdaten (160 GB vs. 16 GB). Die Batch-Größe steigt auf 8.000 (BERT: 256).

RoBERTa nutzt ein Byte-Pair-Encoding-Vokabular mit 50.000 Einträgen (BERT: 30.000). Diese Änderungen bringen auf dem GLUE-Benchmark 2-4 Punkte Verbesserung gegenüber BERT-Large.
