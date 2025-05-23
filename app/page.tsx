import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
