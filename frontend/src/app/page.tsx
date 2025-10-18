import About from "@/app/sections/About";
import Hero from "./sections/Hero";
import Skill from "./sections/Skill";
import Project from "./sections/Project";
import Footer from "./sections/Footer";
import { Navbar } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
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

