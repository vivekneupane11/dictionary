"use client"

import { useState } from "react"

export default function Banner({changeWord}:{changeWord:any}) {
    const [value,setValue] = useState('')
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  h-[40vh]">


<form className="max-w-md mx-auto">   
    <label htmlFor="default-search"  className="mb-2  text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative top-[120px]">
        <div className="absolute top inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-white" placeholder="Search Mockups, Logos..." onChange={(e)=>{setValue(e.target.value)}} required />
        <button type="button" onClick={()=>{changeWord(value)}} className="text-white absolute end-2.5 bottom-2 bg-green-600 hover:bg-green-700   px-5 py-2 rounded-full mt-2 ">Search</button>
    </div>
</form>

     </div>
  )
}
