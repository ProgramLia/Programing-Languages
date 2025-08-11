import { useEffect, useState } from "react"

export default function Navbar() {
     const [active, setActive] = useState(false);
     useEffect(()=> {
          function handleScroll() {
              return  window.scrollY > 150 ? setActive(true) : setActive(false);
          }
          window.addEventListener("scroll" , handleScroll);
          return () => window.removeEventListener("scroll" , handleScroll);
     } , []);
     return (
          <header className={`absolute md:fixed top-0 left-0 right-0 flex justify-between items-center p-3 px-4  ${active ? 'backdrop-blur-sm' : 'backdrop-blur-none'}  bg-zinc-900 duration-200`}>
               <div>
                    <h1  className="text-2xl font-semibold">Portfolio</h1>
               </div>

               <nav className={`fixed top-0 left-0 right-0`}>
                    <ul className={`flex items-center gap-5`}>
                         <li>
                              <a href="#">Beranda</a>
                         </li>
                         <li>
                              <a href="#">Tentang</a>
                         </li>
                         <li>
                              <a href="#">Projek</a>
                         </li>
                         <li>
                              <a href="#">Kontak</a>
                         </li>
                    </ul>
               </nav>
          </header>
     )
}