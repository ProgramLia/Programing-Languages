import Navbar from "./components/navbar"
import "./styles/app.css"

export default function App() {
  return (
    <div className="bg-zinc-900">
      <Navbar />
      <section id="home" className="min-h-screen bg-[salmon]"></section>
      <section id="about" className="min-h-screen bg-[#fbb13c]"></section>
      <section id="projects" className="min-h-screen bg-[#333]"></section>
      <section id="skills" className="min-h-screen bg-[red]"></section>
      <section id="contact" className="min-h-screen bg-[skyblue]"></section>
    </div>
  )
}