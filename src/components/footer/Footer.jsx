export default function Footer() {
    return (
        <div className=" pb-0.5">
        <hr class="h-px my-6 border-0 bg-gray-700" />
        <footer class="rounded-lg shadow m-4 bg-gray-800">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm sm:text-center text-gray-400">© {new Date().getFullYear()} <a href="mailto://i@anodite.me" class="hover:underline">Anony &lt;i@anodite.me&gt;</a>. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
                <li>
                    <a href="#home" class="hover:underline me-4 md:me-6">Home</a>
                </li>
                <li>
                    <a href="#about" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#skills" class="hover:underline me-4 md:me-6">Skills</a>
                </li>
                <li>
                    <a href="#projects" class="hover:underline me-4 md:me-6">Projects</a>
                </li>
                <li>
                    <a href="#contact" class="hover:underline">Contact</a>
                </li>
            </ul>
            </div>
        </footer>
        </div>
    )
}