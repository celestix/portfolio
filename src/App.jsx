import NavBar from "./components/navbar/NavBar";
import Home from "./sections/home/Home";
import About from "./sections/about/About";
import Skills from "./sections/skills/Skills";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div class="font-mono text-slate-400 bg-slate-900">
    <div class="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
      <div class="w-[108rem] flex-none flex justify-end">
        <picture>
          <source srcset="./bg.avif" type="image/avif" />
          <img src="./bg.png" alt="" class="w-[90rem] flex-none max-w-none" decoding="async" />
        </picture>
      </div>
    </div>
    <div id="home"></div>
    <NavBar />
    <main class="font-sans text-white items-center">
        <Home />
        <hr class="h-px mt-6 mb-20 border-0 bg-gray-700" id="about" />
        <About />
        <hr class="h-px my-20 border-0 bg-gray-700" id="skills" />
        <Skills />
        <hr class="h-px my-20 border-0 bg-gray-700" id="projects" />
        <Projects />
        <hr class="h-px my-20 border-0 bg-gray-700" id="contact" />
        <Contact />
    </main>
    <Footer />
    </div>
  );
} 

export default App;
