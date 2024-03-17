import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-xl font-semibold">
        To see the games click the link below
      </h1>
      <Link
        href="/games"
        className="text-sm font-semibold leading-6 text-indigo-600"
        aria-describedby="featured-post"
      >
        Games list <span aria-hidden="true">&rarr;</span>
      </Link>
    </>
  );
}
