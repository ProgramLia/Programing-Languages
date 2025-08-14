export default function Buttons({text, style, to}) {
     return (
          <a href={to} className={style}>{text}</a>
     )
}