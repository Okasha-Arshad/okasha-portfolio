import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";



export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-6 py-10">
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Experience />
      <Contact />
    </main>
  );
}

