import Image from "next/image";
import React, { FC } from "react";

type Props = {
  title: string;
  provider: string;
  gameCategories: string[];
  imageUrl: string;
};

export const Game: FC<Props> = ({
  title,
  provider,
  gameCategories,
  imageUrl,
}) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:max-w-lg lg:self-end">
          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Information
            </h2>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">
                Provider - {provider}
              </h3>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Categories</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {gameCategories.map((category) => (
                    <li key={category} className="text-gray-400">
                      <span className="text-gray-600">{category}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
            <Image
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover object-center"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
