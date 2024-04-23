'use client'
import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState('')
  const [result, setResult] = useState(false)
  const [meme, setMeme] = useState(false)
  const [link, setLink] = useState(false)
  const [score, setScore] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    setResult(true)
    setTimeout(() => {
      setMeme(true)
      setTimeout(() => {
        setLink(true)
      }, 5000);
    }, 2000);
  }

  useEffect(() => {
    setScore(Math.floor(Math.random() * (99 - 80 + 1)+80))
  }, [])
  

    

  return (
    <>
    <main className="flex min-h-screen flex-col items-center p-8  text-white ">
   {!result && <form className="space-y-5" onSubmit={submitHandler}>
      <div className="text-center font-bold  text-xl">
        Result
      </div>
      <div>
    <label htmlFor="name" className="block ml-2 mb-2 text-sm font-medium text-white">Name</label>
    <input type="text" id="name" className="p-3 rounded-lg text-black"placeholder="Enter Name" required value={name} onChange={(e)=>setName(e.target.value)}/>
  </div>
      <div>
    <label htmlFor="rollNum" className="block ml-2 mb-2 text-sm font-medium text-white">Roll No.</label>
    <input type="number" id="rollNum" className="p-3 rounded-lg text-black"placeholder="Enter Roll No." required />
  </div>
      <div>
        <button className="py-2 px-4 bg-blue-500 rounded-md">Submit</button>
      </div>
    </form>}

    {result && <div className="py-5 text-xl space-y-4 text-center pt-20">
      <div>Name: {name}</div>
      <div className="text-yellow-300 font-semibold">Result: {score}.10%</div>
      <div className="w-full">
        {meme && 
         <video width="300" height="auto" autoPlay loop preload="auto" className="rounded-md">
         <source src="./majak.mp4" type="video/mp4" />
         Your browser does not support the video tag.
       </video>
       }
      </div>
      </div>}
      {link &&  <div className="text-center py-10">
        <div className="text-xl">
          <a href="instagram://user?username=fun.tech06">💜 जिसको 90% चाहिए वो फॉलो करो  <span className="text-cyan-300 text-2xl underline">𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦</span> 💜 </a>
          <a href=" https://wa.me/?text=https://result-check.vercel.app/" className="font-bold text-cyan-300 underline">Share</a>
        </div>
       </div>}
    </main>
    <div className={`p-3 text-white ${link ? 'absolute bottom-0':''}`}>Disclaimer: This is only for entertainment purposes.</div>
    </>
  );
}
