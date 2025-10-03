import About from "@/app/components/About";
import { Navbar } from "@/components/ui/FloatingNavbar";
import Hero from "./components/Hero";
import { navItems } from "@/data";
import Skill from "./components/Skill";
import Project from "./components/Project";

export default function Home() {
  return (
    <main className=" relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar navItems={navItems} />
        <Hero />
        <About />
        <Skill />
        <Project />
      </div>
    </main>
  );
}
