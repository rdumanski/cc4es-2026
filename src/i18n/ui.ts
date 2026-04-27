export type Lang = 'pl' | 'en';

export const ui = {
  pl: {
    // Navbar
    'nav.about':   'O konferencji',
    'nav.tracks':  'Ścieżki',
    'nav.agenda':  'Agenda',
    'nav.cfp':     'Call for Papers',

    // Hero
    'hero.badge':      'System Online — Rejestracja wkrótce',
    'hero.subtitle':   'Konferencja cyberbezpieczeństwa dla sektora energetycznego',
    'hero.date':       '21–23 września 2026',
    'hero.location':   'Józefów, Polska',
    'hero.learnMore':  'Dowiedz się więcej',
    'hero.contact':    'Kontakt',
    'hero.countdown':  'Konferencja zaczyna się za',

    // Stats
    'stats.days':      'Dni konferencji',
    'stats.attendees': 'Uczestników',
    'stats.sessions':  'Sesji i wystąpień',
    'stats.countries': 'Krajów',
    'stats.hosted':    'Organizowana w Polsce',

    // About
    'about.eyebrow':         '// O konferencji',
    'about.title':           'Gdzie spotykają się eksperci OT/ICS',
    'about.p1':              'CC4ES (Cybersecurity Conference for Energy Sector) gromadzi 300+ inżynierów bezpieczeństwa, specjalistów ds. reagowania na incydenty, decydentów i badaczy z całej Europy i świata.',
    'about.p2':              'Organizowana przez CERT PSE we współpracy z SANS Institute, trzydniowa konferencja łączy techniczne deep-dive\'y, warsztaty hands-on oraz strategiczne dyskusje na temat ochrony krytycznej infrastruktury energetycznej.',
    'about.infoDate':        'Data',
    'about.infoVenue':       'Lokalizacja',
    'about.infoLanguage':    'Język',
    'about.infoFocus':       'Tematyka',
    'about.infoPartner':     'Partner',
    'about.dateValue':       '21–23 września 2026',
    'about.venueValue':      'Holiday Inn Józefów, Polska',
    'about.languageValue':   'Angielski',
    'about.focusValue':      'OT / ICS / SCADA / Infrastruktura Krytyczna',
    'about.partnerValue':    'SANS Institute',

    // Video
    'video.eyebrow':  '// Poprzednia edycja',
    'video.title':    'CC4ES w akcji',
    'video.subtitle': 'Sprawdź jak wyglądała konferencja. Dołącz do nas we wrześniu 2026.',

    // Speakers
    'speakers.eyebrow':  '// Keynote',
    'speakers.title':    'Prelegenci',
    'speakers.subtitle': 'Światowej klasy eksperci z infrastruktury krytycznej, administracji i nauki.',
    'speakers.topic':    'Temat',
    'speakers.photoTba': 'Zdjęcie wkrótce',

    // Agenda
    'agenda.eyebrow': '// Program',
    'agenda.title':   'Agenda',
    'agenda.day':     'Dzień',
    'agenda.locale':  'pl-PL',

    // Workshops
    'workshops.eyebrow': '// Szkolenia praktyczne',
    'workshops.title':   'Warsztaty SANS',

    // CFP section (on main page)
    'cfp.eyebrow':      '// Zgłoszenia',
    'cfp.title':        'Call for Papers',
    'cfp.topicsTitle':  'Tematy',
    'cfp.datesTitle':   'Ważne daty',
    'cfp.submitBtn':    'Zgłoś referat →',

    // Sponsors
    'sponsors.eyebrow':          '// Partnerzy',
    'sponsors.title':            'Sponsorzy',
    'sponsors.yourBrand':        '+ Twoja marka',
    'tier.Strategic Partner':    'Partner Strategiczny',
    'tier.Diamond':              'Diamentowy',
    'tier.Platinum':             'Platynowy',
    'tier.Gold':                 'Złoty',
    'tier.Silver':               'Srebrny',
    'tier.Media Partners':       'Partnerzy Medialni',

    // Venue
    'venue.eyebrow':       '// Lokalizacja',
    'venue.title':         'Miejsce konferencji',
    'venue.distance':      '~25 km od lotniska Warszawa Chopin',
    'venue.gettingThere':  'Jak dojechać',
    'venue.train':         'Pociąg: Warszawa Wschodnia → Józefów (35 min)',
    'venue.car':           'Samochód: autostrada S17, zjazd Józefów',
    'venue.shuttle':       'Shuttle z lotniska WAW (szczegóły wkrótce)',

    // Footer
    'footer.org':     'Organizowana przez',
    'footer.partner': 'Partner',
    'footer.rights':  'Wszelkie prawa zastrzeżone.',

    // CFP page header
    'cfpPage.eyebrow':  '// Call for Papers',
    'cfpPage.title':    'Zgłoś referat',
    'cfpPage.subtitle': 'Komitet programowy oceni każde zgłoszenie i poinformuje autorów do',
    'cfpPage.deadline': '30 czerwca 2026',
    'cfpPage.problems': 'Problemy z formularzem?',
    'cfpPage.topicsTitle': 'Tematy',
    'cfpPage.datesTitle':  'Ważne daty',

    // CfP form labels
    'form.paperTitle':       'Tytuł referatu',
    'form.authors':          'Autorzy',
    'form.affiliation':      'Afiliacja / Organizacja',
    'form.topic':            'Kategoria tematyczna',
    'form.email':            'E-mail kontaktowy',
    'form.abstract':         'Abstrakt (50–500 słów)',
    'form.comments':         'Uwagi dla komitetu (opcjonalne)',
    'form.required':         '* Pola obowiązkowe. Dane przetwarzane zgodnie z RODO.',
    'form.submit':           'Wyślij zgłoszenie',
    'form.submitting':       'Wysyłanie…',
    'form.selectTopic':      '-- wybierz --',
    'form.wordCount':        'słów',
    'form.titlePh':          'np. Zero Trust Architecture in OT Environments',
    'form.authorsPh':        'Jan Kowalski, Anna Nowak',
    'form.affiliationPh':    'CERT PSE / Politechnika Warszawska',
    'form.abstractPh':       'Opisz cel, metodę i główne wnioski swojego referatu…',
    'form.commentsPh':       'Dodatkowe informacje, wymagania sprzętowe, itp.',
    'form.successTitle':     'Zgłoszenie przyjęte',
    'form.successMsg':       'Dziękujemy za przesłanie abstraktu. Komitet programowy skontaktuje się z Tobą do',
    'form.successDate':      '30 czerwca 2026',
    'form.successAgain':     '> Wyślij kolejne zgłoszenie',
    'form.errorMsg':         'Wystąpił błąd podczas wysyłania. Spróbuj ponownie lub napisz na cfp@cc4es.pl',
    'val.titleRequired':     'Tytuł jest wymagany',
    'val.abstractMin':       'Abstrakt powinien mieć co najmniej 50 słów',
    'val.abstractMax':       'Abstrakt nie może przekraczać 500 słów',
    'val.authorsRequired':   'Podaj imię i nazwisko co najmniej jednego autora',
    'val.affiliationReq':    'Afiliacja jest wymagana',
    'val.topicRequired':     'Wybierz kategorię tematyczną',
    'val.emailRequired':     'E-mail kontaktowy jest wymagany',
    'val.emailInvalid':      'Nieprawidłowy format adresu e-mail',

    // Countdown labels
    'time.days': 'DNI',
    'time.hrs':  'GODZ',
    'time.min':  'MIN',
    'time.sec':  'SEK',
  },

  en: {
    // Navbar
    'nav.about':   'About',
    'nav.tracks':  'Tracks',
    'nav.agenda':  'Agenda',
    'nav.cfp':     'Call for Papers',

    // Hero
    'hero.badge':      'System Online — Registration Coming Soon',
    'hero.subtitle':   'Cybersecurity Conference for the Energy Sector',
    'hero.date':       'September 21–23, 2026',
    'hero.location':   'Józefów, Poland',
    'hero.learnMore':  'Learn More',
    'hero.contact':    'Contact',
    'hero.countdown':  'Conference begins in',

    // Stats
    'stats.days':      'Conference Days',
    'stats.attendees': 'Expert Attendees',
    'stats.sessions':  'Sessions & Talks',
    'stats.countries': 'Countries',
    'stats.hosted':    'Hosted in Poland',

    // About
    'about.eyebrow':         '// About the conference',
    'about.title':           'Where OT/ICS Security Practitioners Meet',
    'about.p1':              'CC4ES (Cybersecurity Conference for Energy Sector) brings together 300+ security engineers, incident responders, policy makers and researchers from across Europe and beyond.',
    'about.p2':              'Hosted by CERT PSE in partnership with SANS Institute, the three-day event combines technical deep-dives, hands-on workshops and strategic discussions on protecting critical energy infrastructure.',
    'about.infoDate':        'Date',
    'about.infoVenue':       'Venue',
    'about.infoLanguage':    'Language',
    'about.infoFocus':       'Focus',
    'about.infoPartner':     'Partner',
    'about.dateValue':       'September 21–23, 2026',
    'about.venueValue':      'Holiday Inn Józefów, Poland',
    'about.languageValue':   'English',
    'about.focusValue':      'OT / ICS / SCADA / Critical Infrastructure',
    'about.partnerValue':    'SANS Institute',

    // Video
    'video.eyebrow':  '// Previous edition',
    'video.title':    'CC4ES in Action',
    'video.subtitle': 'See what the conference looked like. Join us in September 2026.',

    // Speakers
    'speakers.eyebrow':  '// Keynote',
    'speakers.title':    'Speakers',
    'speakers.subtitle': 'World-class practitioners from critical infrastructure, government, and academia.',
    'speakers.topic':    'Topic',
    'speakers.photoTba': 'Photo TBA',

    // Agenda
    'agenda.eyebrow': '// Schedule',
    'agenda.title':   'Agenda',
    'agenda.day':     'Day',
    'agenda.locale':  'en-GB',

    // Workshops
    'workshops.eyebrow': '// Hands-on training',
    'workshops.title':   'SANS Workshops',

    // CFP section (on main page)
    'cfp.eyebrow':      '// Submit',
    'cfp.title':        'Call for Papers',
    'cfp.topicsTitle':  'Topics of Interest',
    'cfp.datesTitle':   'Key Dates',
    'cfp.submitBtn':    'Submit Your Paper →',

    // Sponsors
    'sponsors.eyebrow':          '// Partners',
    'sponsors.title':            'Sponsors',
    'sponsors.yourBrand':        '+ Your brand',
    'tier.Strategic Partner':    'Strategic Partner',
    'tier.Diamond':              'Diamond',
    'tier.Platinum':             'Platinum',
    'tier.Gold':                 'Gold',
    'tier.Silver':               'Silver',
    'tier.Media Partners':       'Media Partners',

    // Venue
    'venue.eyebrow':       '// Location',
    'venue.title':         'Venue',
    'venue.distance':      '~25 km from Warsaw Chopin Airport',
    'venue.gettingThere':  'Getting there',
    'venue.train':         'Train: Warsaw Wschodnia → Józefów (35 min)',
    'venue.car':           'Car: S17 motorway, exit Józefów',
    'venue.shuttle':       'Shuttle from WAW airport (details TBA)',

    // Footer
    'footer.org':     'Organized by',
    'footer.partner': 'Partner',
    'footer.rights':  'All rights reserved.',

    // CFP page header
    'cfpPage.eyebrow':  '// Call for Papers',
    'cfpPage.title':    'Submit a Paper',
    'cfpPage.subtitle': 'The program committee will review every submission and notify authors by',
    'cfpPage.deadline': 'June 30, 2026',
    'cfpPage.problems': 'Issues with the form?',
    'cfpPage.topicsTitle': 'Topics of Interest',
    'cfpPage.datesTitle':  'Key Dates',

    // CfP form labels
    'form.paperTitle':       'Paper Title',
    'form.authors':          'Authors',
    'form.affiliation':      'Affiliation / Organization',
    'form.topic':            'Topic Category',
    'form.email':            'Contact Email',
    'form.abstract':         'Abstract (50–500 words)',
    'form.comments':         'Notes for the committee (optional)',
    'form.required':         '* Required fields. Data processed in accordance with GDPR.',
    'form.submit':           'Submit Paper',
    'form.submitting':       'Sending…',
    'form.selectTopic':      '-- select --',
    'form.wordCount':        'words',
    'form.titlePh':          'e.g. Zero Trust Architecture in OT Environments',
    'form.authorsPh':        'John Smith, Jane Doe',
    'form.affiliationPh':    'CERT PSE / Warsaw University of Technology',
    'form.abstractPh':       'Describe the objective, methodology and main findings of your paper…',
    'form.commentsPh':       'Additional information, equipment requirements, etc.',
    'form.successTitle':     'Submission received',
    'form.successMsg':       'Thank you for submitting your abstract. The program committee will contact you by',
    'form.successDate':      'June 30, 2026',
    'form.successAgain':     '> Submit another paper',
    'form.errorMsg':         'An error occurred while sending. Please try again or email cfp@cc4es.pl',
    'val.titleRequired':     'Title is required',
    'val.abstractMin':       'Abstract should be at least 50 words',
    'val.abstractMax':       'Abstract cannot exceed 500 words',
    'val.authorsRequired':   'Please provide at least one author name',
    'val.affiliationReq':    'Affiliation is required',
    'val.topicRequired':     'Please select a topic category',
    'val.emailRequired':     'Contact email is required',
    'val.emailInvalid':      'Invalid email address format',

    // Countdown labels
    'time.days': 'DAYS',
    'time.hrs':  'HRS',
    'time.min':  'MIN',
    'time.sec':  'SEC',
  },
} as const;

export type TranslationKey = keyof typeof ui.pl;

export function t(lang: Lang, key: TranslationKey): string {
  return (ui[lang] as Record<string, string>)[key]
      ?? (ui.pl as Record<string, string>)[key]
      ?? key;
}
