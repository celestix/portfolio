'use client';

export default function NavBar() {
    const navToggle = () => {
        document.getElementById('nav-menu')?.classList.toggle('hidden');
    };
    return (
        <nav className="pt-5 overflow-hidden fixed w-full backdrop-blur-lg text-white">
            <div className="md:px-20 md:flex md:justify-around items-center md:flex-row flex-col">
                <div className="flex flex-row items-center justify-around">
                    <div className="px-2 font-black font-sans text-center italic text-4xl justify-start">anodite.me</div>
                    <div className="justify-end md:hidden" onClick={navToggle}>
                        <svg className="w-6 h-6 text-gray-100 hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 14"><path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z"></path></svg>
                    </div>
                </div>
                <div id="nav-menu" className="md:pt-0 md:w-auto w-full pt-5 mt-2 md:block hidden">
                    <hr className="h-px mb-7 border-0 bg-gray-700 md:hidden" />
                    <div className="px-10 md:flex-row md:space-x-20 flex-col md:text-2xl text-4xl items-center md:flex text-center">
                        <div className="hover:text-gray-300">
                            <a href="#home">Home</a>
                        </div>
                        <hr className="h-px my-7 border-0 bg-gray-700 md:hidden" />
                        <div className="hover:text-gray-300">
                            <a href="https://blog.anodite.me">Blog</a>
                        </div>
                        <hr className="h-px my-7 border-0 bg-gray-700 md:hidden" />
                        <div className="hover:text-gray-300">
                            <a href="https://github.com/celestix">Github</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="h-px mt-7 border-0 bg-gray-700" />
        </nav>
    )
}