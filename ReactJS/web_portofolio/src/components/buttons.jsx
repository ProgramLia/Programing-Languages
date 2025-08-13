export default function Buttons({text, onclick, style}) {
     return (
          <button onclick={onclick} className={style}>{text}</button>
     )
}