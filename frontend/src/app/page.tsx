import About from "@/app/sections/About";
import { Navbar } from "@/components/ui/FloatingNavbar";
import Hero from "./sections/Hero";
import { navItems } from "@/data";
import Skill from "./sections/Skill";
import Project from "./sections/Project";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className=" relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
      
        <Hero />
        <About />
        <Skill />
        <Project />
        <Footer />
      </div>
    </main>
  );
}
