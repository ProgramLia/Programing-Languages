import Buttons from "./components/buttons"
import Navbar from "./components/navbar"
import Spanx from "./components/spanx"
import "./styles/app.css"
import "./styles/spanx.css"

export default function App() {
  return (
    <div className="bg-zinc-900">
      <Navbar />
      <section id="home" className="background overflow-hidden min-h-screen flex p-5 items-center justify-between">
        <div className="flex-1 px-15">
          <div className="overflow-hidden rounded-full w-[22rem] h-[22rem] border-4 border-indigo-400 mb-5 ring-4 ring-indigo-400 ring-offset-4 ring-offset-zinc-900">
            <img src="./assets/zumal.png" alt="" />
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <p className="text-3xl font-medium text-indigo-100 ">Hi i'm</p>
          <h1 className="text-5xl font-bold text-indigo-100">Muhammad <div className="inline text-indigo-400">Azumal</div> Aulia.</h1>
          <p className="text-xl text-indigo-400">Web Developer & Mobile Developer</p>
          <p className="text-xl text-indigo-100/90">If you would like to collaborate with me and would like more information, please</p>

          <div className="space-x-3">
            <Buttons text={"Hire me"} style={`p-3 px-8 border-2 border-indigo-400 bg-indigo-400 text-indigo-100 rounded-full hover:ring-2 hover:ring-indigo-400 hover:ring-offset-2 duration-200  hover:ring-offset-zinc-900`} />
            <Buttons text={"Contact me"} style={`p-3 px-8 border-2 text-indigo-400 border-indigo-400 rounded-full hover:bg-indigo-400 hover:text-indigo-100 hover:ring-2 hover:ring-indigo-400 hover:ring-offset-2 duration-200 hover:ring-offset-zinc-900`} />
          </div>
        </div>
        <Spanx />
      </section>

      <section id="about" className="min-h-screen bg-[#fbb13c]">

      </section>

      <section id="projects" className="min-h-screen bg-[#333]">

      </section>

      <section id="skills" className="min-h-screen bg-[red]">

      </section>

      <section id="contact" className="min-h-screen bg-[skyblue]">

      </section>
    </div>
  )
}