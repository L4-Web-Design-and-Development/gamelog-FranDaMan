import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  const games = [
    {
      title: "R.E.P.O",
      description:
        "A post-apocalyptic world filled with horrors beyond comprehension",
      price: 8.5,
      rating: 5,
      releaseDate: new Date("2025-02-06"),
      imageURL:
        "https://res.cloudinary.com/dvtokhv9d/image/upload/v1746701229/REPO-jpeg_stfgxh.jpg",
    },
    {
      title: "Monster Hunter Wilds",
      description: "An action RPG based around hunting mythical beings.",
      price: 69.99,
      rating: 4.8,
      releaseDate: new Date("2015-05-19"),
      imageURL:
        "https://res.cloudinary.com/dvtokhv9d/image/upload/v1746701341/Monsterhunter-Jpeg_xffcbk.jpg",
    },
    {
      title: "Red Dead Redemption 2",
      description: "An open-world western adventure game.",
      price: 59.99,
      rating: 4.7,
      releaseDate: new Date("2018-10-26"),
      imageURL:
        "https://res.cloudinary.com/dvtokhv9d/image/upload/v1746701113/RedDeadRedemtion-Jpeg_trsnft.jpg",
    },
    {
      title: "God of War",
      description: "An action-adventure game based on Norse mythology.",
      price: 49.99,
      rating: 4.9,
      releaseDate: new Date("2018-04-20"),
      imageURL:
        "https://res.cloudinary.com/dvtokhv9d/image/upload/v1746701103/GodOfWar-Jpeg_d7tsdz.jpg",
    },
    {
      title: "Minecraft",
      description:
        "A sandbox game where players can build and explore their own worlds.",
      price: 26.95,
      rating: 4.8,
      releaseDate: new Date("2011-11-18"),
      imageURL:
        "https://res.cloudinary.com/dvtokhv9d/image/upload/v1746701119/Minecraft-Jpeg_zpm775.jpg",
    },
    {
      title: "Fortnite",
      description:
        "A battle royale game where players fight to be the last one standing.",
      price: 0.0,
      rating: 4.5,
      releaseDate: new Date("2017-07-25"),
      imageURL:
        "https://res.cloudinary.com/dvtokhv9d/image/upload/v1746701090/Fortnite-Jpeg_ncvb3y.jpg",
    },
    {
      title: "Cyberpunk 2077",
      description: "An open-world RPG set in a dystopian future.",
      price: 59.99,
      rating: 4.0,
      releaseDate: new Date("2020-12-10"),
      imageURL:
        "https://res.cloudinary.com/dvtokhv9d/image/upload/v1746701086/Cyberpunk-Jpeg_ev2hp7.jpg",
    },
    {
      title: "Among Us",
      description:
        "A multiplayer game where players work together to complete tasks on a spaceship.",
      price: 4.99,
      rating: 4.4,
      releaseDate: new Date("2018-06-15"),
      imageURL:
        "https://res.cloudinary.com/dvtokhv9d/image/upload/v1746701831/Amoungus-jpeg_yljzsp.jpg",
    },
    {
      title: "Animal Crossing: New Horizons",
      description:
        "A life simulation game where players can build and manage their own island.",
      price: 59.99,
      rating: 4.9,
      releaseDate: new Date("2020-03-20"),
      imageURL:
        "https://res.cloudinary.com/dvtokhv9d/image/upload/v1746701182/AnimalcrossingJpeg_ylq2ac.jpg",
    },
    {
      title: "Hades",
      description:
        "A rogue-like dungeon crawler where players fight their way out of the Underworld.",
      price: 24.99,
      rating: 4.9,
      releaseDate: new Date("2020-09-17"),
      imageURL:
        "https://res.cloudinary.com/dvtokhv9d/image/upload/v1746701094/Hades-Jpeg_dadvuu.jpg",
    },
  ];

  for (const game of games) {
    await prisma.game.create({ data: game });
  }
  console.log("👾 Games created successfully");

  const categories = [
    {
      title: "Action",
      description:
        "Games that require quick reflexes and hand-eye coordination.",
    },
    {
      title: "Adventure",
      description: "Games that involve exploration and puzzle-solving.",
    },
    {
      title: "RPG",
      description: "Games that focus on character development and story.",
    },
    {
      title: "Simulation",
      description: "Games that simulate real-world activities or systems.",
    },
    {
      title: "Strategy",
      description: "Games that require strategic thinking and planning.",
    },
    {
      title: "Puzzle",
      description:
        "Games that challenge players with logic and problem-solving.",
    },
    {
      title: "Sports",
      description: "Games that simulate sports or physical activities.",
    },
    {
      title: "Multiplayer",
      description: "Games that can be played with multiple players.",
    },
    {
      title: "Indie",
      description: "Games developed by independent studios or individuals.",
    },
    {
      title: "Horror",
      description: "Games that aim to scare or unsettle players.",
    },
  ];

  for (const category of categories) {
    await prisma.category.create({ data: category });
  }

  console.log("🎮 Categories created successfully");

  console.log("🔗 Linking each game to a category");

  // Fetch games from the database
  const dbGames = await prisma.game.findMany();

  // Fetch categories from the database
  const dbCategories = await prisma.category.findMany();

  // Link each game to a category
  for (const game of dbGames) {
    const category =
      dbCategories[Math.floor(Math.random() * dbCategories.length)];
    await prisma.game.update({
      where: { id: game.id },
      data: { categoryId: category.id },
    });
  }

  console.log("🔗 Games and categories linked successfully");

  console.log("Seed data created successfully");
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
