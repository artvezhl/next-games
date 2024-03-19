import { fetchGames } from "@/shared";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Games = async () => {
  const games = await fetchGames();

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h1 className="text-xl font-semibold">Games list</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {games.map((game) => (
          <div
            key={game.provider}
            className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
          >
            <div className="flex-shrink-0">
              <Image
                className="h-10 w-10 rounded-full"
                src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${game.identifier}.webp`}
                unoptimized
                alt={game.title}
                width={40}
                height={40}
              />
            </div>
            <div className="min-w-0 flex-1">
              <Link href={`/games/${game.provider}/${game.seo_title}`}>
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">
                  {game.title}
                </p>
                <p className="truncate text-sm text-gray-500">
                  Provider - {game.provider}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
