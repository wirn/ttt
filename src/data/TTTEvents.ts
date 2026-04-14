import { Colleague, TTTEvent } from '../app/model/model';
import { colleagues } from './Colleagues';

type LegacyEvent = Omit<TTTEvent, 'heldBy'> & {
  heldBy: Colleague | Colleague[];
};

const rawEvents: LegacyEvent[] = [
  {
    heldBy: [colleagues['Emil Hägglöv'], colleagues['Leo Hemmingsson']],
    topic: 'Ai-driven Orderhantering hos Permobil',
    date: new Date('2026-03-19'),
  },
  {
    heldBy: colleagues['Daniel Holmström Wikell'],
    topic: 'Data Factory and what not to use it for',
    date: new Date('2026-03-05'),
  },
  {
    heldBy: colleagues['Anton Täcklind'],
    topic:
      'n8n, open source lösning för workflows och pipelines mellan tjänster',
    date: new Date('2026-02-05'),
  },

  {
    heldBy: colleagues['Georg Sandholm'],
    topic:
      ' AI kan användas genom hela utvecklingskedjan – från idé till fungerande applikation',
    date: new Date('2026-01-29'),
  },

  {
    heldBy: colleagues['Tomasz Czekierda'],
    topic: 'React Native + Reeniuneted',
    date: null,
  },
  {
    heldBy: colleagues['Tomasz Czekierda'],
    topic: 'Golfens workflow på frontend',
    date: null,
  },
  {
    heldBy: colleagues['Tomasz Czekierda'],
    topic: 'Kan hitta på nåt ny teknik',
    date: null,
    note: '?',
  },
  {
    heldBy: colleagues['Mattias Malmqvist'],
    topic: 'Vue Validate',
    date: null,
  },
  {
    heldBy: colleagues['Anna Söderström'],
    topic: 'AI Terminologi för alla',
    date: null,
    note: 'I slutet av kursen, mars?',
  },
  {
    heldBy: colleagues['Anna Söderström'],
    topic: 'Volontärarbete på PMI',
    date: null,
  },
  {
    heldBy: colleagues['Jens Kristensen'],
    topic: 'Speeddating med företag, hur går det till?',
    date: null,
    note: '',
  },
  {
    heldBy: colleagues['Anna Söderström'],
    topic: 'Genomgång av vad en AI-modell är',
    date: new Date('2025-12-16'),
    note: 'I slutet av kursen, mars?',
  },
  {
    heldBy: [colleagues['Henrik Bergdahl'], colleagues['Emma Henriksson']],
    topic: 'Det ultimata kravet, hur ser det ut?',
    date: new Date('2025-11-27'),
  },
  {
    heldBy: colleagues['Henrik Bergdahl'],
    topic: 'Workshop, "Mitt bästa collaboration tips"',
    date: null,
    note: '',
  },
  {
    heldBy: colleagues['Daniel Persson'],
    topic: 'Kod/arbetsval hos olika kunder',
    date: null,
  },

  {
    heldBy: colleagues['Daniel Persson'],
    topic: 'Sidekick, hur introducera sidekicks i en uppdrag',
    date: null,
  },

  {
    heldBy: colleagues['Daniel Persson'],
    topic: '.NET Blazor',
    date: null,
    note: 'verkar inte så pepp på ämnet',
  },
  {
    heldBy: colleagues['Daniel Persson'],
    topic: 'Microsoft Learn - Lärande och certifieringar',
    date: null,
    note: '',
  },

  {
    heldBy: colleagues['Lina Björklund'],
    topic: 'Vad fan ska vi med AI till',
    date: new Date('2025-12-04'),
    note: '',
  },
  {
    heldBy: colleagues['Yashaswini Seeta'],
    topic: 'A first look at Boomi',
    date: new Date('2025-10-23'),
    note: '',
  },
  {
    heldBy: colleagues['Johan Stålnacke'],
    topic: 'Hacka kaffemaskin med hjälp av AI',
    date: new Date('2025-10-09'),
  },
  {
    heldBy: colleagues['Daniel Persson'],
    topic: 'Structs och performance i C#',
    date: new Date('2025-05-20'),
  },
  {
    heldBy: colleagues['Robert Karlsson'],
    topic: 'Introduktion till Daana',
    date: new Date('2025-05-08'),
  },
  {
    heldBy: colleagues['Imtiaz Akhtar'],
    topic: 'Infrastructure as Code',
    date: new Date('2025-04-10'),
  },
  {
    heldBy: colleagues['Jens Kristensen'],
    topic: 'CV-skola',
    date: new Date('2025-04-03'),
  },
  {
    heldBy: colleagues['Georg Sandholm'],
    topic: 'Erfarenheter kring nopCommerce',
    date: new Date('2025-03-20'),
  },
  {
    heldBy: colleagues['Eric Björklund'],
    topic: 'Rundabordsdiskussion AI i jobbet',
    date: new Date('2025-03-06'),
  },
  {
    heldBy: colleagues['Anna Söderström'],
    topic: 'CPMAI Certifiering',
    date: new Date('2025-02-13'),
  },

  {
    heldBy: colleagues['Tomasz Czekierda'],
    topic: 'API Management, Micro Frontend',
    date: new Date('2025-09-25'),
  },
  {
    heldBy: colleagues['Mikaela Kurtson Bellman'],
    topic: '"Bli snäll, lyckad och kanske rik"',
    date: new Date('2025-09-11'),
    note: '',
  },

  {
    heldBy: colleagues['Ludvig Stenström'],
    topic: 'Exercism, Kompetensutveckling i hanterbar storlek',
    date: new Date('2025-01-23'),
  },
  {
    heldBy: colleagues['Daniel Holmström Wikell'],
    topic: 'Tillämpning av AI-tjänster med Azure Open AI',
    date: new Date('2025-01-16'),
  },
  {
    heldBy: colleagues['Tomasz Czekierda'],
    topic: 'Server Side Rendering/Static Site Generation',
    date: new Date('2024-12-12'),
  },
  {
    heldBy: colleagues['Tomas Bylund'],
    topic: 'Regelverk kring AI',
    date: new Date('2024-11-21'),
  },
  {
    heldBy: colleagues['Daniel Holmström Wikell'],
    topic: 'CSS-animations - gör din web mer levande!',
    date: new Date('2024-11-07'),
  },
  {
    heldBy: colleagues['Hans Ehrenborg'],
    topic: 'The trusted advisor',
    date: new Date('2024-10-24'),
  },
  {
    heldBy: colleagues['Matilda Bouchet'],
    topic: 'Nonviolent communication el Giraff-ståket',
    date: new Date('2024-10-10'),
  },
  {
    heldBy: colleagues['Petri Teeri'],
    topic: 'React hooks',
    date: new Date('2024-10-03'),
  },
  {
    heldBy: colleagues['Magnus Nordlund'],
    topic: 'Lakehouse',
    date: new Date('2024-09-19'),
  },
  {
    heldBy: colleagues['Anna Söderström'],
    topic: 'Klokheter kring projektledning',
    date: new Date('2024-09-12'),
  },
  {
    heldBy: colleagues['Emma Henriksson'],
    topic: 'Hållbara konsulter',
    date: new Date('2024-05-23'),
  },
  {
    heldBy: colleagues['Martin Eklund'],
    topic: 'Tailwind',
    date: new Date('2024-05-16'),
  },
  {
    heldBy: colleagues['Shao Xiang Sum'],
    topic: 'GraphQL',
    date: new Date('2024-04-25'),
  },
  {
    heldBy: colleagues['Oscar Nordling'],
    topic: 'Scraping och kvantitativ processning av hemsidor',
    date: new Date('2024-04-11'),
  },
  {
    heldBy: colleagues['Anton Täcklind'],
    topic: 'Introduktion till spelmotorer',
    date: new Date('2024-03-21'),
  },
  {
    heldBy: colleagues['Shao Xiang Sum'],
    topic: 'Serverless computing med serverless framework',
    date: new Date('2024-03-07'),
  },
  {
    heldBy: colleagues['Shao Xiang Sum'],
    topic: 'Cybersäkerhet & LogoFAIL',
    date: new Date('2024-02-15'),
  },
  {
    heldBy: colleagues['Hans Ehrenborg'],
    topic: 'Konsultintervjun hot eller möjlighet',
    date: new Date('2024-02-01'),
  },
  {
    heldBy: colleagues['Matilda Bouchet'],
    topic: 'Förändringsledning med Prosci och ADKAR metoden',
    date: new Date('2024-01-18'),
  },
  {
    heldBy: colleagues['Anna Söderström'],
    topic: 'Projektledning enligt PMI - en crash kurs',
    date: new Date('2023-12-14'),
  },
  {
    heldBy: colleagues['Daniel Persson'],
    topic: 'GitHub Copilot',
    date: new Date('2023-11-30'),
  },
  {
    heldBy: colleagues['Paul Wirén'],
    topic: 'Minimal API',
    date: new Date('2023-11-16'),
  },
  {
    heldBy: colleagues['Daniel Holmström Wikell'],
    topic: 'Azure API Management',
    date: new Date('2023-11-02'),
  },
  {
    heldBy: colleagues['Daniel Persson'],
    topic: 'HTMX',
    date: new Date('2023-10-09'),
  },
  {
    heldBy: colleagues['Mikaela Kurtson Bellman'],
    topic: 'SAFE/Förändringsledning',
    date: new Date('2023-09-28'),
  },
  {
    heldBy: colleagues['Jens Kristensen'],
    topic: 'Förbättra dina chanser till drömuppdraget!',
    date: new Date('2023-09-14'),
  },
  {
    heldBy: colleagues['Magnus Nordlund'],
    topic: 'Snowflake',
    date: new Date('2023-06-08'),
  },
  {
    heldBy: colleagues['Daniel Persson'],
    topic: 'Certifiering, hur går det till och hur kan man studera?',
    date: new Date('2023-05-11'),
  },
  {
    heldBy: colleagues['Therese Lindberg'],
    topic: 'Data Warehousing/Datalager',
    date: new Date('2023-04-20'),
  },
  {
    heldBy: colleagues['Anton Täcklind'],
    topic: 'AI och ChatGPT',
    date: new Date('2023-03-09'),
  },
  {
    heldBy: colleagues['Daniel Persson'],
    topic: 'Azure KeyVault',
    date: new Date('2023-02-09'),
  },
  {
    heldBy: colleagues['Tobias Reinhammar'],
    topic: 'Azure DevOps',
    date: new Date('2023-01-26'),
  },
  {
    heldBy: colleagues['Eric Björklund'],
    topic: 'Angular',
    date: new Date('2023-02-23'),
  },
  {
    heldBy: colleagues['Johan Wallén'],
    topic: 'Kubernetes för dummisar',
    date: new Date('2022-12-01'),
  },
];

export const events: TTTEvent[] = rawEvents.map((event) => ({
  ...event,
  heldBy: Array.isArray(event.heldBy) ? event.heldBy : [event.heldBy],
}));
