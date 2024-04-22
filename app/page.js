'use client'

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState('')
  const [result, setResult] = useState(false)
  const [meme, setMeme] = useState(false)
  const [link, setLink] = useState(false)

  const submitHandler = (e)=>{
    e.preventDefault()
    setResult(true)
    setTimeout(() => {
      setMeme(true)
      setTimeout(() => {
        setLink(true)
      }, 3000);
    }, 2000);
  }

  return (
    <>
    <main className="flex min-h-screen flex-col items-center p-8 bg-[#3c3086] text-white ">
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
      <div className="text-yellow-300 font-semibold">Result: 98.17%</div>
      <div className="w-full">
        {meme && 
         <video width="300" height="auto" autoPlay loop preload="auto" className="rounded-md">
         <source src="./majak.mp4" type="video/mp4" />
         Your browser does not support the video tag.
       </video>
       }
      </div>
      </div>}
      {link &&  <a href=" https://wa.me/?text=https://result-check.vercel.app/" className="font-bold text-cyan-300 underline">Share</a>}
    </main>
    <div className="p-2">Disclaimer: This is for entertainment purposes.</div>
    </>
  );
}
