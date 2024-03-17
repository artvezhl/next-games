import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-xl font-semibold">Let's see the games</h1>
      <Link href="/games">Games list</Link>
    </>
  );
}
