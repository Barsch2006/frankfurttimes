import type { Author } from "@/types/users";

export {
    teamData
};

const teamData: { [key: string]: Author } = {
    norbertLarson: {
        name: 'Norbert Larson',
        job: 'Redaktionsleiter für Umwelt und Natur',
        img: 'https://frankfurtdynamics.github.io/frankfurt-times/NorbertLarson.jpg',
        about: 'Ich habe an keiner Uni Studiert bin aber ein Experte und sehe mich als Wissenschaftler. Ich lebe seit 7 Jahren im Wald und kenne mich daher sehr gut mit der Natur aus. Für diese Zeitung arbeite ich seitdem ich all meine Zähne verloren habe, als ich zu stark an einbem Baum kaute. Meine Hobbies sind Bäume anschauen und Wanderer erschrecken.'
    },
    heinzStein: {
        name: 'Heinz Stein',
        job: 'Reporter für Digitalisierung und IT Sicherheit',
        img: 'https://frankfurtdynamics.github.io/frankfurt-times/HeinzStein.png',
        about: ' Hallo, bin ich Online? Ja, ok. Mein Name ist Heinz ich habe 1982 mein Informatik Studium abgebrochen, und habe danach bis 2020 als IT Berater für die Bundesregierung gearbeitet. Ich bin wirklich gut mit moderner Technik, ich habe sogar mal ein Fax-Gerät benutzt.'
    }
}