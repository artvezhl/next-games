import { getGameByTypeAndSlug } from "@/shared/api/fetchGames";
import React, { FC } from "react";
import { notFound } from "next/navigation";
import { Game } from "@/entities/game";

type Props = {
  params: {
    paths: string[];
  };
};

export const generateMetadata = async ({ params: { paths } }: Props) => {
  const [categoryOrProviderName, gameName] = paths;
  const game = await getGameByTypeAndSlug(categoryOrProviderName, gameName);

  if (!game) {
    return notFound();
  }

  return {
    title: game.title,
    description: `Play ${game.title} on our platform using ${game.provider} Provider!`,
  };
};

const GamePage: FC<Props> = async ({ params: { paths } }) => {
  const [categoryOrProviderName, gameName] = paths;
  const game = await getGameByTypeAndSlug(categoryOrProviderName, gameName);

  if (!game) {
    return notFound();
  }

  return (
    <Game
      title={game.title}
      provider={game.provider}
      gameCategories={game.categories}
      imageUrl={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${game.identifier}.webp`}
    />
  );
};

export default GamePage;
