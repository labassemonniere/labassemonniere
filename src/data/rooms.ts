const guernoillesImages = Object.values(
  import.meta.glob(
    "../assets/chambres/guernoilles/*.{jpg,JPG,jpeg,JPEG,png,PNG}",
    {
      eager: true,
      import: "default"
    }
  )
);

const laugeImages = Object.values(
  import.meta.glob(
    "../assets/chambres/lauge/*.{jpg,JPG,jpeg,JPEG,png,PNG}",
    {
      eager: true,
      import: "default"
    }
  )
);

export const rooms = [
  {
    id: "guernoilles",
    name: "Les Guernoïlles",
    subtitle: "Chambre familiale dans le bocage vendéen",
    ical: "https://ical.booking.com/v1/export?t=060871ce-4e33-4c9c-a416-161c88d14ce2",
    description: [
      "Les Guernoïlles, qui signifie grenouilles en patois du bocage vendéen, est une chambre familiale.",

      "Elle est meublée d'un grand lit de 140 cm et d'un lit mezzanine de 90 cm. Elle peut accueillir jusqu'à 3 personnes, idéalement 2 adultes et 1 enfant.",

      "Elle possède une salle d'eau avec douche, WC et lavabo. Un petit coin cuisine permet de mettre des boissons au frais ou de réchauffer un plat au micro-ondes.",

      "Attention : la kitchenette ne possède pas de plaques de cuisson (une chambre d’hôtes n’est pas un lieu de cuisine)."
    ],

    images: guernoillesImages
  },

  {
    id: "lauge",
    name: "La Lauge",
    subtitle: "Chambre moderne dans une dépendance en pierre",
    ical: "https://ical.booking.com/v1/export?t=4f7a76ee-00ef-4ad8-afaf-fa55a63680d9",
    description: [
      "Cette chambre aménagée dans une dépendance en pierre de la maison est moderne tout en gardant le charme de l'ancien.",

      "Elle est équipée d'un lit de 160x200 cm, d'une salle de bain avec douche à l'italienne et toilettes séparées.",

      "Vous apprécierez le calme, la tranquillité et la fraîcheur en été.",

      "Un plateau avec bouilloire, thé et café est à disposition, ainsi qu'un petit réfrigérateur et un micro-ondes.",

      "Un accès Wi-Fi gratuit est disponible."
    ],

    images: laugeImages
  }
];