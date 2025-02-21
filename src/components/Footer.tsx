import { A, useLocation } from "@solidjs/router";

export default function Footer() {
	const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-gray-600 text-gray-200"
      : "border-transparent text-green-200 hover:border-gray-600";
	return (
		<footer>
			<p class="text-center text-base text-gray-200 my-4">
				<A href="/" class={`${active("/")} hover:underline`}>
					Home
				</A>
				{" - "}
				<A href="/about" class={`${active("/about")} hover:underline`}>
					About Page
				</A>{" "}
			</p>
		</footer>
	);
}
