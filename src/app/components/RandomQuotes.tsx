import getCurrentDate from "./CurrentDate";

const generateRandomQuote = () => {
  const currentDate = getCurrentDate();

  const springQuotes = [
    "Blooming blossoms",
    "Fresh morning dew",
    "Chirping birds' melody",
    "Gentle spring breezes",
    "Awakening nature",
    "Vibrant flower fields",
    "Butterflies in the air",
    "Warm sun and new growth",
    "Clear blue skies",
    "Sprouting seeds",
    "Joyful garden days",
    "Spring rain refreshment",
    "Rebirth and renewal",
    "Lush green landscapes",
    "Outdoor adventures",
  ];

  const summerQuotes = [
    "Sunshine and smiles",
    "Beach breeze bliss",
    "Warm weather wonders",
    "Endless summer fun",
    "Ice cream dreams",
    "Sandy toes, happy hearts",
    "Vibrant sunset evenings",
    "Flip-flop freedom",
    "Fresh lemonade days",
    "Poolside paradise",
    "Sun-kissed adventures",
    "Carefree summer nights",
    "Picnic perfect moments",
    "Golden hour glows",
    "Barefoot in the grass",
  ];

  const fallQuotes = [
    "Crisp autumn air",
    "Golden leaves falling",
    "Cozy sweater days",
    "Pumpkin spice delights",
    "Harvest celebrations",
    "Bonfire nights",
    "Scenic hikes",
    "Apple picking joy",
    "Warm cider sips",
    "Colorful foliage",
    "Corn mazes and fun",
    "Festive gatherings",
    "Rustling leaves underfoot",
    "Hayrides and laughter",
    "Chilly evening strolls",
  ];

  const winterQuotes = [
    "Snowy wonderlands",
    "Cozy fireside nights",
    "Hot cocoa moments",
    "Festive holiday cheer",
    "Twinkling lights",
    "Winter sports fun",
    "Warm blankets and books",
    "Frosty mornings",
    "Snowball fights",
    "Ice skating joy",
    "Winter carnival magic",
    "Sledding adventures",
    "Holiday gatherings",
    "Peaceful snowy evenings",
    "Homemade cookies",
  ];

  let quoteList;

  switch (currentDate.month) {
    case "March":
    case "April":
    case "May":
      quoteList = springQuotes;
      break;
    case "June":
    case "July":
    case "August":
      quoteList = summerQuotes;
      break;
    case "September":
    case "October":
    case "November":
      quoteList = fallQuotes;
      break;
    case "December":
    case "January":
    case "February":
      quoteList = winterQuotes;
      break;
  }

  return quoteList
    ? quoteList[Math.floor(Math.random() * quoteList.length)]
    : null;
};

export default generateRandomQuote;
