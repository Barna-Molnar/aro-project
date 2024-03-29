import { ReactComponent as Calendar } from '../assets/images/calendar.svg';
import { ReactComponent as Galery } from '../assets/images/galery.svg';
import Renault from '../assets/images/renault.png';
import Audi from '../assets/images/audi.png';
import { TextPosition } from '../interfaces';

export const Services = [

    {
        label: '',
        value: '',
    },
    {
        label: 'Shuttle',
        value: 'Shuttle',
    },
    {
        label: 'Vermietung',
        value: 'Vermietung',
    },
    {
        label: 'Kurier',
        value: 'Kurier',
    },
]
export const Cars = [

    {
        label: '',
        value: '',
    },
    {
        label: 'Audi Q7',
        value: 'Audi Q7',
    },
    {
        label: 'Renault Traffic',
        value: 'Renault Traffic',
    },
    {
        label: 'Ford Transit',
        value: 'Ford Transit',
    },
]

const aboutSection = {
    title: "Warum ARO",
    textPosition: TextPosition.Left,
    description: [
        {
            title: undefined,
            paragraph: "Sie möchten einen 9-Sitzer Bus oder einen Transporter mieten, mit oder ohne Fahrer, dann sind Sie hier richtig."
        },
        {
            title: undefined,
            paragraph: "Kundenzufriedenheit hat bei uns einen hohen Stellenwert. Deshalb bieten wir Qualität und Zuverlässigkeit zu fairen Preisen an."
        }
    ],
    accordion: undefined,
    buttons: [
        {
            title: 'Jetzt Anfragen',
            icon: Calendar,
            border: true
        }
    ],
    img: undefined
}

const rentSection = {
    title: "Vermietlung",
    textPosition: TextPosition.Right,
    description: [
        {
            title: undefined,
            paragraph: "Sie können bei uns einen Renault Trafic 9-Sitzer mit viel Platz und Beinfreiheit sowie großem Kofferraum mieten. Die hintere Reihe kann eingeklappt oder die Sitze rausgenommen werden.  Zudem können auch zwei Kindersitze und als auch eine Babyschale  zusätzlich angemietet werden. Auf Anfrage kann der Bus auch ausgeliefert werden."
        },
        {
            title: undefined,
            paragraph: "Der Bus ist Vollkasko versichert und kann von Personen  ab 23 Jahre angemietet werden. Die Kaution beträgt 350 €."
        }
    ],
    accordion: [
        {
            title: "Technische daten",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor  sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
        {
            title: "Kosten von Backnang",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor  sit amet"
        },
        {
            title: " Kosten von Fellbach, Ludwigsburg, Kirchheim unter Teck, Marbach am Neckar, Esslingen",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor  sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        }
    ],
    buttons: [
        {
            title: 'Jetzt Anfragen',
            icon: Calendar,
            border: true
        },
        {
            title: 'Zur Bildergalerie',
            icon: Galery,
            border: true
        }
    ],
    img: {
        imgPath: Renault,
        altText: "Renault Photo"
    }

};

const shuttleSection = {
    title: "Shuttle",
    textPosition: TextPosition.Left,
    description: [
        {
            title: "Audi Q7",
            paragraph: "Sie möchten bequem und komfortabel zum Flughafen oder zu einer Veranstaltung befördert werden? Mit diesem SUV genießen Sie die Fahrt, haben ein hohes Komfort und Sicherheit."
        },
        {
            title: "Renault Trafic 9 Sitzer",
            paragraph: "Wir sind ein Mietwagenunternehmen und chauffieren Sie oder Ihre Gäste zuverlässig und sicher ans Ziel. Ob Hochzeiten, Geburtstagsfeier, Stadion besuch, Ausflugsfahrt oder einfach zu einer Party. Wir planen die Fahrt mit Ihnen."
        },
        {
            title: undefined,
            paragraph: "Egal, für welchen Shuffle-Service Sie sich intereressieren – wir erstellen gerne ein unverbindliches Angebot für Sie. Kontaktieren Sie uns einfach."
        }
    ],
    accordion: undefined,
    buttons: [
        {
            title: 'Jetzt kontaktieren',
            icon: Calendar,
            border: true
        }
    ],
    img: {
        imgPath: Audi,
        altText: "Audi Photo"
    }
};

const kurierSection = {
    title: "Kurier — Transporter mit Fahrer",
    textPosition: TextPosition.Right,
    description: [
        {
            title: "",
            paragraph: "Sie möchten einen 9-Sitzer Bus oder einen Transporter mieten, mit oder ohne Fahrer? Sie möchten ein gebrauchtes Möbelstück erwerben, wissen aber nicht, wie Sie es transportieren sollen? Wir helfen Ihnen dabei. Buchen Sie hierfür unseren Transporter mit einem Fahrer. Das Möbelstück wird gemeinsam mit Ihnen abgeholt und an Ihr gewünschtes Ziel gebracht. Selbstverständlich steht dieser Service auch für andere Gegenstände zur Verfügung. Bei weiteren Fragen oder Wünschen zögern Sie nicht und kontaktieren uns.ann sind Sie hier richtig. "
        },
        {
            title: "",
            paragraph: "Kundenzufriedenheit hat bei uns einen hohen Stellenwert. Deshalb bieten wir Qualität und Zuverlässigkeit zu fairen Preisen an.."
        }
    ],
    accordion: [
        {
            title: "Kosten",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor  sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        }
    ],
    buttons: [
        {
            title: 'Jetzt Anfragen',
            icon: Calendar,
            border: true
        }
    ],
    img: undefined
}

export const sections = [aboutSection, rentSection, shuttleSection, kurierSection];