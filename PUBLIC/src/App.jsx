import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [cards, setCard] = useState([])

  const fetchData = async () => {
    let a = await fetch ("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json();
    setCard(data);
    console.log(data);

  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
    <h1 className='text-xl font-semibold mb-8'><center>Posts</center></h1>
      <div className="container flex gap-4 flex-wrap justify-center content-center">
        {cards.map((item)=>{
          return <div key={item.id} className="card w-1/4 bg-zinc-200 rounded-md">
            <h1>{item.title}</h1>
            <p>{item.body}</p>
            <span>By : UserID :{item.userId}</span>
          </div>
        })}
      </div>
    </>
  )
}

export default App
