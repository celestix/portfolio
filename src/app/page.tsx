import NavBar from '@/components/navbar/NavBar';
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Skills from '@/components/skills/Skills';
import Projects from '@/components/projects/Projects';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <div className="font-mono text-slate-400 bg-slate-900">
    <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
      <div className="w-[108rem] flex-none flex justify-end">
        <picture>
          <source srcSet="./bg.avif" type="image/avif" />
          <img src="./bg.png" alt="" className="w-[90rem] flex-none max-w-none" decoding="async" />
        </picture>
      </div>
    </div>
    <div id="home"></div>
    <NavBar />
    <main className="font-sans text-white items-center">
        <Hero />
        <hr className="h-px mt-6 mb-20 border-0 bg-gray-700" id="about" />
        <About />
        <hr className="h-px my-20 border-0 bg-gray-700" id="skills" />
        <Skills />
        <hr className="h-px my-20 border-0 bg-gray-700" id="projects" />
        <Projects />
        <hr className="h-px my-20 border-0 bg-gray-700" id="contact" />
        <Contact />
    </main>
    <Footer />
    </div>
  );
}
