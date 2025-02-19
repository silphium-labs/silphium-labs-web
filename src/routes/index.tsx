import { A } from "@solidjs/router";

export default function Home() {
  return (
    <main class="bg-gradient-to-tl from-zinc-800 via-zinc-700 to-zinc-800 text-center mx-auto px-20 text-gray-700 p-4">
      <img src="Silphium-hero.png" class="max-h-200" />
      <p class="text-gray-200 mt-8">
        Visit{" "}
        <a
          href="https://solidjs.com"
          target="_blank"
          class="text-sky-600 hover:underline"
        >
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>
      <p class="text-gray-200 my-4">
        <span>Home</span>
        {" - "}
        <A href="/about" class="text-sky-600 hover:underline">
          About Page
        </A>{" "}
      </p>
    </main>
  );
}
