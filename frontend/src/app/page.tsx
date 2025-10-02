import About from "@/app/components/About";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";
import Hero from "./components/Hero";

export default function Home() {
  const navItems = [
    {
      name:"Home",
      link:"/",
      icon:<FaHome/>
    },
    {
      name:"About",
      link:"#about",
      icon:<FaHome/>
    },
    {
      name:"Blog",
      link:"/blog",
      icon:<FaHome/>
    }
  ]
  return (
    <main className=" relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <About/>
      </div>
    </main>
  );
}
