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
    <>
      <Hero
        title={
          <>
            Track Your <span className=" text-cyan-300">Gaming</span> Journey
            with Ease
          </>
        }
        ctaText={"Add Game"}
      />
      <div className="flex mx-16 text-3xl font-bold">Games</div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
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
    </>
  );
}
