import { PrismaClient } from "@prisma/client";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import GameCard from "~/Components/GameCard";
import gamelogFallback from "~/assets/svg/gamecard-fallback-image.DBpc2Wj6_Z2iLmXA.svg"; // You will need to add your own image here
import Hero from "~/Components/HeroImage";

export const meta: MetaFunction = () => {
  return [{ title: "GameLog" }, { name: "description", content: "Games" }];
};

export async function loader() {
  const prisma = new PrismaClient();

  const games = await prisma.game.findMany({
    select: {
      id: true,
      title: true,
      releaseDate: true,
      imageURL: true,
      category: {
        select: {
          title: true,
        },
      },
    },
  });

  return json({ games });
}

export default function Index() {
  const { games } = useLoaderData<typeof loader>();

  console.log({ games });
  return (
    <main className="container mx-auto px-4">
      <Hero
        title={
          <>
            Track Your <span className=" text-cyan-300">Gaming</span> Journey
            with Ease
          </>
        }
        ctaText={"Add Game"}
      />
      <div className="container mx-auto px-4 flex text-2xl lg:text-3xl font-bold ">
        Games
      </div>
      <div className="flex flex-col items-center justify-center">
        <br />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {games.map((game) => (
            <GameCard
              gameId={game.id}
              key={game.id}
              title={game.title}
              releaseDate={game.releaseDate}
              imageURL={game.imageURL || gamelogFallback}
              categoryTitle={game.category?.title || "No Category"}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
