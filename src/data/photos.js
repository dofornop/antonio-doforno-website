// ─────────────────────────────────────────────────────────────────────────────
// PHOTOS DATA FILE
// To add more photos:
//   1. Add the image file to public/images/
//   2. Add a new object to the photos array below using "/images/yourfile.jpg"
//
// Categories: "family" | "community" | "honors" | "military" | "faith"
// ─────────────────────────────────────────────────────────────────────────────

export const photos = [
  {
    id: 1,
    src: `${process.env.PUBLIC_URL}/images/img_01.jpg`,
    caption: "António Joaquim Pereira Alves do Forno",
    subcaption: "Community Leader, Chatham, Ontario",
    category: "community",
    featured: true
  },
  {
    id: 2,
    src: `${process.env.PUBLIC_URL}/images/img_02.jpg`,
    caption: "Inauguration of the Portuguese Club",
    subcaption: "The Club Years",
    category: "community",
    featured: false
  },
  {
    id: 3,
    src: `${process.env.PUBLIC_URL}/images/img_03.jpg`,
    caption: "Opening of the Club Hall",
    subcaption: "1997",
    category: "community",
    featured: false
  },
  {
    id: 4,
    src: `${process.env.PUBLIC_URL}/images/img_04.jpg`,
    caption: "Conselho das Comunidades",
    subcaption: "Representing the Community",
    category: "community",
    featured: false
  },
  {
    id: 5,
    src: `${process.env.PUBLIC_URL}/images/img_05.jpg`,
    caption: "António with Portuguese dignitaries",
    subcaption: "",
    category: "community",
    featured: false
  },
  {
    id: 6,
    src: `${process.env.PUBLIC_URL}/images/img_06.jpg`,
    caption: "António with President Jorge Sampaio and Premier Bob Rae",
    subcaption: "",
    category: "honors",
    featured: true
  },
  {
    id: 7,
    src: `${process.env.PUBLIC_URL}/images/img_07.jpg`,
    caption: "Nossa Senhora de Fátima Festa",
    subcaption: "Chatham, Ontario",
    category: "faith",
    featured: false
  },
  {
    id: 8,
    src: `${process.env.PUBLIC_URL}/images/img_08.jpg`,
    caption: "Medalha de Mérito das Comunidades Portuguesas",
    subcaption: "Presented by Secretary of State José Cesário",
    category: "honors",
    featured: false
  },
  {
    id: 9,
    src: `${process.env.PUBLIC_URL}/images/img_09.jpg`,
    caption: "Certificate of Exemplary Service to Canada",
    subcaption: "2023",
    category: "honors",
    featured: false
  },
  {
    id: 10,
    src: `${process.env.PUBLIC_URL}/images/img_10.jpg`,
    caption: "Notary Public Appointment",
    subcaption: "Appointed by the Ontario Government",
    category: "honors",
    featured: false
  },
  {
    id: 11,
    src: `${process.env.PUBLIC_URL}/images/img_11.jpg`,
    caption: "Honorary Consul of Portugal",
    subcaption: "Named Honorary Consul, 1998",
    category: "honors",
    featured: false
  },
  {
    id: 12,
    src: `${process.env.PUBLIC_URL}/images/img_12.jpg`,
    caption: "Forno's Travel Agency",
    subcaption: "Chatham, Leamington & Windsor",
    category: "community",
    featured: false
  },
  {
    id: 13,
    src: `${process.env.PUBLIC_URL}/images/img_13.jpg`,
    caption: "Province of Ontario Volunteer Award",
    subcaption: "",
    category: "honors",
    featured: false
  },
  {
    id: 14,
    src: `${process.env.PUBLIC_URL}/images/img_14.jpg`,
    caption: "Knights of Columbus — 4th Degree Knight",
    subcaption: "The highest honour in the organization",
    category: "faith",
    featured: false
  },
  {
    id: 15,
    src: `${process.env.PUBLIC_URL}/images/img_15.jpg`,
    caption: "News Articles Featuring António",
    subcaption: "Portuguese Canadian Press",
    category: "community",
    featured: false
  },
  {
    id: 16,
    src: `${process.env.PUBLIC_URL}/images/img_16.jpg`,
    caption: "Early Life in Portugal",
    subcaption: "Adoufe, Vila Real, Trás-os-Montes",
    category: "community",
    featured: false
  },
  {
    id: 17,
    src: `${process.env.PUBLIC_URL}/images/img_17.jpg`,
    caption: "António in the Portuguese Army",
    subcaption: "1956 – 1958",
    category: "military",
    featured: false
  },
  {
    id: 18,
    src: `${process.env.PUBLIC_URL}/images/img_18.jpg`,
    caption: "The Family Through the Years",
    subcaption: "",
    category: "family",
    featured: true
  },
  {
    id: 19,
    src: `${process.env.PUBLIC_URL}/images/img_19.jpg`,
    caption: "António and Maria — 30 Years of Marriage",
    subcaption: "Married 1993, celebrated 30 years in 2023",
    category: "family",
    featured: false
  },
  {
    id: 20,
    src: `${process.env.PUBLIC_URL}/images/img_20.jpg`,
    caption: "A Large Extended Family",
    subcaption: "",
    category: "family",
    featured: false
  },
  {
    id: 21,
    src: `${process.env.PUBLIC_URL}/images/img_21.jpg`,
    caption: "Family Reunion 2025",
    subcaption: "",
    category: "family",
    featured: true
  },
  // ── ADD MORE PHOTOS BELOW ──────────────────────────────────────────────────
  // {
  //   id: 22,
  //   src: "/images/your-new-photo.jpg",
  //   caption: "Your caption here",
  //   subcaption: "Optional subtitle",
  //   category: "family",
  //   featured: false
  // },
];

export const categories = [
  { id: "all",       label: "All Photos" },
  { id: "family",    label: "Family" },
  { id: "community", label: "Community" },
  { id: "honors",    label: "Honors & Awards" },
  { id: "military",  label: "Military Service" },
  { id: "faith",     label: "Faith & Service" },
];
