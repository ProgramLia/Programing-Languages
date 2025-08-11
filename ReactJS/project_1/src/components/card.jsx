export default function Card({username, hobies, email, numberPhone}) {
     return(
          <div className="card">
               <h1 className="username">{username}</h1>
               <ul>
                    {hobies.map(item=> {
                         return <li key={item}>{item}</li>
                    })}
               </ul>
               <h2>{email}</h2>
               <h2>{numberPhone}</h2>
          </div>
     )
}