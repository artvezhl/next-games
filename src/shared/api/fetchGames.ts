import { TGame } from "./types";

export const fetchGames = async (): Promise<TGame[]> => {
  const res = await fetch(
    "https://nextjs-test-pi-hazel-56.vercel.app/data/games.json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getGameByTypeAndSlug = async (
  type: string,
  slug: string
): Promise<TGame | null> => {
  const games = await fetchGames();

  return (
    games.find(
      (game) =>
        game.seo_title === slug &&
        (game.categories.includes(type) || game.provider === type)
    ) || null
  );
};
