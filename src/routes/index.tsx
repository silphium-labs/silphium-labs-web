export default function Home() {
    return (
        <main class="bg-gradient-to-tl from-zinc-800 via-zinc-700 to-zinc-800 p-4">
            <div class="max-w-screen-lg flex flex-col lg:flex-row text-left m-auto">
                <img src="Silphium-hero.png" class="max-h-200 max-w-full transition delay-100 duration-200 ease-in hover:rotate-x-15 hover:-rotate-y-15 hover:scale-110" />
                <div class="py-4 flex flex-col justify-center lg:justify-left">
                    <div id="hero-text" class="text-7xl text-zinc-200 mt-10 pt-10">Taking Semantics to the Source</div>
                    <div class="py-15 m-auto">
                        <a href="/about">
                    <button class="text-4xl bg-white p-3 rounded-lg hover:underline">Learn more</button>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
