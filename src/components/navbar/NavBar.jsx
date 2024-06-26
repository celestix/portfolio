export default function NavBar() {
    return (
        <nav class="px-0 py-5 overflow-visible">
            <div class="flex flex-row justify-around text-white">
            <div class="px-2 font-black font-sans italic text-4xl">anodite.me</div>
            <div class="px-10 space-x-20 inline-flex text-2xl items-center">
                <div class="hover:text-gray-300">
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
            <hr class="h-px my-7 border-0 bg-gray-700" />
        </nav>
    )
}