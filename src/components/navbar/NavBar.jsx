export default function NavBar() {
    return (
        <nav class="pt-5 overflow-hidden fixed w-full backdrop-blur-3xl">
            <div class="flex md:flex-row flex-col justify-around text-white">
                <div class="px-2 font-black font-sans text-center italic text-4xl">anodite.me</div>
                <br class="md:hidden" />
                <div class="px-10 space-x-20 flex md:flex-row flex-col text-2xl items-center">
                    <div class="hover:text-gray-300 text-center">
                        <a href="#home">Home</a>
                    </div>
                    <div class="hover:text-gray-300">
                        <a href="https://blog.anodite.me">Blog</a>
                    </div>
                    <div class="hover:text-gray-300">
                        <a href="https://github.com/celestix">Github</a>
                    </div>
                </div>
            </div>
            <hr class="h-px mt-7 border-0 bg-gray-700" />
        </nav>
    )
}