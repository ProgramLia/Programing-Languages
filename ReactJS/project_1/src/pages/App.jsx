import { useState } from "react"
import Card from "../components/card"

export default function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState('')

  function Button({text, press}) {
    return (
      <button onClick={press} className="btn">{text}</button>
    )
  }
  return (
      <>
          <Card username={"Mazumala"} numberPhone={"081253598526"} email={"Mazumla@gmail.com"} hobies={["Makan"]} />
          <Card username={"Mazumala 2"} numberPhone={"081253598525"} email={"Mazumla2@gmail.com"} hobies={["Makan" , "Minum" , "Tidur" , "Workout"]} />

          <Button press={()=>setCount(count + 1)} text={"+"} />
          <h1>{count}</h1>
          <Button press={()=> count > 0  ? setCount(count - 1) : alert("Nominal sudah 0")} text={"-"} />

            <h2 style={{textTransform:'capitalize'}}>{data}</h2>
            <input type="text" onChange={(e)=> setData(e.target.value)} />
      </>
  )
}
