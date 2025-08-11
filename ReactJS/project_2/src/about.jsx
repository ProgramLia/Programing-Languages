import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function About() {
     const [input, setInput] = useState("")
     const {name} = useParams();
     const navigate = useNavigate();
     function paramsAbout() {
          return navigate(`/about/${input}`);
     }
     return (
          <div>
               <h1>Ini Halaman About {name}</h1>
               <input type="text" onChange={(e)=> setInput(e.target.value)}  />
               <button onClick={paramsAbout} >Pergi</button>
          </div>
     )
}