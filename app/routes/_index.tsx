import { PrismaClient } from "@prisma/client";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import GameCard from "~/Components/GameCard";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const prisma = new PrismaClient();

  const games = await prisma.game.findMany({
    select: {
      id: true,
      title: true,
      releaseDate: true,
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
    <div className="flex flex-col items-center justify-center min-h-screen">
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {games.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            releaseDate={game.releaseDate}
            categoryTitle={game.category?.title || "No Category"}
          />
        ))}
      </div>
    </div>
  );
}
