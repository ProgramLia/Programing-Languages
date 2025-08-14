import Buttons from "./components/buttons"
import Navbar from "./components/navbar"
import Spanx from "./components/spanx"
import "./styles/app.css"
import "./styles/spanx.css"

export default function App() {
  return (
    <div className="bg-zinc-900">
      <Navbar />
      <section id="home" className="background border-b-2 border-indigo-400 overflow-hidden min-h-screen flex p-5 items-center justify-between">
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
            <Buttons to={'#contact'} text={"Hire me"} style={`p-3 px-8 border-2 border-indigo-400 bg-indigo-400 text-indigo-100 rounded-full hover:ring-2 hover:ring-indigo-400 hover:ring-offset-2 duration-200  hover:ring-offset-zinc-900`} />
            <Buttons to={'#contact'} text={"Contact me"} style={`p-3 px-8 border-2 text-indigo-400 border-indigo-400 rounded-full hover:bg-indigo-400 hover:text-indigo-100 hover:ring-2 hover:ring-indigo-400 hover:ring-offset-2 duration-200 hover:ring-offset-zinc-900`} />
          </div>
        </div>
        <Spanx />
      </section>

      <section id="about" className="min-h-screen bg-zinc-800 py-[5rem] border-b-2 border-indigo-400">
        <div className="text-center">
          <h1 className="text-4xl font-medium text-indigo-100 mb-2">About <span className="text-indigo-400">Me</span>.</h1>
          <p className="text-xl text-indigo-200 text-center">Below is information about me</p>
        </div>

        <div className="flex items-center justify-between px-10">
          <div className="flex-1 space-y-3">
            <h1 className="text-3xl text-indigo-400 font-medium">I'm Web & Mobile Developer.</h1>
            <p className="text-lg text-indigo-200">I am a web developer and mobile developer who has been involved in this field for 1.5 years, I dream of becoming a professional developer and have a target of 3 years to achieve that</p>

            <div className="flex gap-2">
              <Buttons to={'#portfolio'} text={"Show Portfolio"} style={`p-3 px-8 border-2 border-indigo-400 bg-indigo-400 text-indigo-100 rounded-full hover:ring-2 hover:ring-indigo-400 hover:ring-offset-2 duration-200  hover:ring-offset-zinc-900`} />
              <Buttons to={'#contact'} text={"Contact me"} style={`p-3 px-8 border-2 text-indigo-400 border-indigo-400 rounded-full hover:bg-indigo-400 hover:text-indigo-100 hover:ring-2 hover:ring-indigo-400 hover:ring-offset-2 duration-200 hover:ring-offset-zinc-900`} />
            </div>
          </div>

          <div className="flex flex-1 justify-end">
            <img className="w-[85%] block" src="./assets/asset-1.png" alt="" />
          </div>
        </div>
      </section>

      <section id="portfolio" className="min-h-screen bg-zinc-900">

      </section>

      <section id="skills" className="min-h-screen bg-[red]">

      </section>

      <section id="contact" className="min-h-screen bg-[skyblue]">

      </section>
    </div>
  )
}