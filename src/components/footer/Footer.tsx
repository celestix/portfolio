export default function Footer() {
    return (
        <div className=" pb-0.5">
        <hr className="h-px my-6 border-0 bg-gray-700" />
        <footer className="rounded-lg shadow m-4 bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm sm:text-center text-gray-400">© {new Date().getFullYear()} <a href="mailto://i@anodite.me" className="hover:underline">Anony</a> | All Rights Reserved.</span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
                <li>
                    <a href="#home" className="hover:underline me-4 md:me-6">Home</a>
                </li>
                <li>
                    <a href="#about" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#skills" className="hover:underline me-4 md:me-6">Skills</a>
                </li>
                <li>
                    <a href="#projects" className="hover:underline me-4 md:me-6">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="hover:underline">Contact</a>
                </li>
            </ul>
            </div>
        </footer>
        </div>
    )
}