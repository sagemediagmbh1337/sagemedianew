export interface VideoTestimonial {
  title: string
  initials: string
  name: string
  role: string
  vimeoId: string
  vimeoHash?: string
}

export interface TextReview {
  quote: string
  initials: string
  name: string
  role: string
}

export const videoTestimonials: VideoTestimonial[] = [
  { title: 'Von 200 auf 3.400 Besucher/Monat', initials: 'MB', name: 'Markus B.', role: 'CEO, E-Commerce', vimeoId: '1136116624' },
  { title: 'Wie wir 80% unserer Neupatienten über Google gewinnen', initials: 'JH', name: 'Julia H.', role: 'Praxisinhaberin, Zahnmedizin', vimeoId: '1115108100' },
  { title: 'SEO als wichtigster Vertriebskanal im B2B', initials: 'SL', name: 'Stefan L.', role: 'Geschäftsführer, Maschinenbau', vimeoId: '1115110019', vimeoHash: 'd330a8b9b1' },
]

export const textReviews: TextReview[] = [
  { quote: '„Die Beratungsleistung ist wirklich top. Man hat das Gefühl, dass hier der Kunde König ist. Ich bin begeistert von der Expertise der Mitarbeiter – man bekommt auf jede Frage eine Antwort."', initials: 'SB', name: 'Stefan Beck', role: 'Inhaber, Pressebeck' },
  { quote: '„Top Agentur für SEO & SEA! Durch gezielte SEO Optimierungen konnten wichtige Keywords deutlich bessere Rankings erzielen und unsere Sichtbarkeit ist spürbar gestiegen. Klare Empfehlungen, schnelle Kommunikation und echte Resultate."', initials: 'DK', name: 'Dennis Koch', role: 'GF, Kaweha Absaugtechnik' },
  { quote: '„Unsere Leads aus Deutschland werden immer mehr. Auch im SEO-Bereich sehen wir einen sehr großen Erfolg bei den Besucherzahlen. Es gibt eine echte Strategie – wir besprechen gemeinsam unsere Ziele und KPIs. Die Zusammenarbeit ist hervorragend."', initials: 'BH', name: 'Björn Hoekstra', role: 'Marketingleiter, Kiekens' },
  { quote: '„Ich bin Kunde und Geschäftspartner gleichermaßen. Die extrem hohe fachliche Kompetenz in puncto SEO und SEA und das überdurchschnittliche Engagement machen die Zusammenarbeit besonders."', initials: 'JK', name: 'Jochen Koch', role: 'Inhaber, Jochen Koch Onlinemarketing' },
  { quote: '„Die Arbeit von sagemedia war sofort bemerk- und sichtbar. Das Ranking hat sich binnen kürzester Zeit stark verbessert – viel besser, als wir es erwartet hatten. Wir sind sehr, sehr zufrieden."', initials: 'StW', name: 'Stefanie Wagenblast', role: 'Rechtsanwaltskanzlei Wagenblast' },
  { quote: '„Sagemedia ist ein sehr wertvoller Partner für uns! Dank Sagemedia konnten unsere neuen Produkte schnell und einfach online gefunden werden. Wir freuen uns, unsere Bekanntheit noch weiter zu steigern."', initials: 'MZ', name: 'Matthias Zech', role: 'GF, Cherry-Bikes Nürnberg' },
  { quote: '„sagemedia hat unsere Rosenthal Website in allen Bereichen rund um SEO ausgezeichnet betreut: ausgezeichnete Analyse, Beratung und Betreuung."', initials: 'LH', name: 'Lisa Hofweller', role: 'Marketing, Rosenthal Porzellan' },
  { quote: '„Im SEO-Workshop von André wurden alle grundlegenden SEO-Themen praxisnah direkt an der Live-Website vermittelt. Leicht verständlich und sofort umsetzbar. Absolute Empfehlung!"', initials: 'SBr', name: 'Sabrina Brückner', role: 'Marketing, Vierling Production' },
  { quote: '„Unsere Webseite wurde durch sagemedia neugestaltet und wir fühlten uns rundum sehr gut aufgehoben. Wir sind nun endlich auch bei Google Maps sichtbar. Ich freue mich auf eine langjährige Zusammenarbeit."', initials: 'JP', name: 'Jürgen Pluschke', role: 'Inhaber, Bestattungsinstitut Pluschke' },
  { quote: '„Sagemedia ist ein Dienstleister mit großer Kompetenz, insbesondere zur Schaffung von Sichtbarkeit. Stets erreichbar, nachhaltige Ergebnisse. Für uns der erste Ansprechpartner."', initials: 'CM', name: 'Christian Mitter', role: 'Rechtsanwaltskanzlei Mitter' },
]
