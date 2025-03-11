import { useLocation } from "@solidjs/router";

export default function Header() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-gray-600"
      : "border-transparent hover:border-gray-600";
  return (
    <header class="lg:px-16 px-4 bg-zinc-900">
      <div class="max-w-screen-lg m-auto flex flex-wrap items-center py-2 shadow-md">
        <div class="flex-1 flex justify-between items-center">
          <a href="/" class="text-xl">
            <img src="Silphium.svg" class="h-40" alt="Logo" />
          </a>
        </div>
        <label for="menu-toggle" class="pointer-cursor md:hidden block">
          <svg
            class="fill-current text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input class="hidden" type="checkbox" id="menu-toggle" />

        <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
          <nav>
            <ul class="md:flex items-center justify-between text-base text-gray-200 pt-4 md:pt-0">
              <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
                <a class="md:p-4 py-3 px-0 block" href="/about">
                  About Us
                </a>
              </li>
              <li class={`border-b-2 ${active("/treatments")} mx-1.5 sm:mx-6`}>
                <a class="md:p-4 py-3 px-0 block" href="#">
                  Services
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
