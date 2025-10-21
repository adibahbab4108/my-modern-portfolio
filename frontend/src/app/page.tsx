import About from "@/components/modules/Home/About/About";
import Hero from "../components/modules/Home/Hero";
import Skill from "../components/modules/Home/Skill/Skill";
import Project from "../components/modules/Home/Project/Project";
import Footer from "../components/modules/Home/Footer";
import { Navbar } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function HomePage() {
  return (
    <main className=" relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar navItems={navItems} />
        <Hero />
        <About />
        <Skill />
        <Project />
        <Footer />
      </div>
    </main>
  );
}
