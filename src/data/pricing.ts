export const pricing = {
  badge: "Tarif basé sur 2 personnes",

  seasons: [
    {
      season: "Très haute saison",
      period: "Juin - Juillet - Août",
      price: "95 € / nuit",
      duree : "3 nuits minimum"
    },
    {
      season: "Haute saison",
      period: "Mai - Septembre",
      price: "85 € / nuit",
      duree : "3 nuits minimum"
    },
    {
      season: "Moyenne saison",
      period: "Avril - Octobre",
      price: "75 € / nuit",
      duree : "2 nuits minimum"
    }
  ],

  price: {
    lowSeason: 75,
    highSeason: 85,
    extraHighSeason: 95,
    extraPerson: 20
},

  rules: [
    "Arrivée : à partir de 15h (arrivée autonome possible)",
    "Départ : avant 10h30",
    "Petit-déjeuner servi en chambre à 8h",
    "Supplément : 20 € par personne supplémentaire",
    "Enfants : gratuit pour les moins de 2 ans (lit parapluie)",
    "Annulation : acompte conservé, report possible jusqu’à 1 an si prévenu 15 jours avant",
    "Taxe de séjour : 0,85 € / nuit / adulte",
    "Arrivée possible : mercredi ou jeudi"
  ]
};