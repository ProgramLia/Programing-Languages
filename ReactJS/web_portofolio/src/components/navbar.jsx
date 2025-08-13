import { useEffect, useState } from "react"
import NavLink from "./navLink";

export default function Navbar() {
     const [active, setActive] = useState(false);
     const [activeSection, setActiveSection] = useState("home");

     useEffect(() => {
          function handleScroll() { return scrollY > 150 ? setActive(true) : setActive(false); }
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
     }, []);

     // IntersectionObserver untuk detect section aktif
     useEffect(() => {
          const sections = document.querySelectorAll("section");
          const options = { threshold: 0.6 };

          const observer = new IntersectionObserver((entries) => {
               entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                         setActiveSection(entry.target.id);
                    }
               });
          }, options);

          sections.forEach((section) => observer.observe(section));
          return () => observer.disconnect();
     }, []);

     return (
          <header className={` z-[999] fixed top-0 left-0 right-0 duration-200 flex justify-between p-4 px-8 items-center ${active ? 'bg-white/30 backdrop-blur-2xl' : 'bg-zinc-900'}`}>
               <div>
                    <h1 className="text-indigo-100 text-2xl font-semibold">Web <span className="text-indigo-400">Portofolio</span>.</h1>
               </div>

               <nav className="">
                    <NavLink text={"home"} href={"#home"} isActive={activeSection === "home"} />
                    <NavLink text={"about"} href={"#about"} isActive={activeSection === "about"}  />
                    <NavLink text={"projects"} href={"#projects"} isActive={activeSection === "projects"}  />
                    <NavLink text={"skills"} href={"#skills"} isActive={activeSection === "skills"}  />
                    <NavLink text={"contact"} href={"#contact"} isActive={activeSection === "contact"}  />
               </nav>
          </header>
     )
}