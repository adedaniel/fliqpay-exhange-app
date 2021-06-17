import React from 'react'

export default function InputSelect() {
  return (
    <div className="flex">
      <div className="w-full relative">
        <p className="absolute top-2 text-gray-400 left-4 text-sm">You send</p>
        <input className="border-[1px] border-gray-300 rounded-md rounded-r-none border-r-0 px-4 w-full pt-4 text-purple-900 text-xl h-16" />
      </div>
      <div className="flex h-16 w-32 bg-gray-100 rounded-r-md items-center justify-center px-6">
        <img
          src="https://restcountries.eu/data/nga.svg"
          alt="flag"
          className="w-5 h-5 rounded-full object-cover md:mr-2"
        />
        <select className="bg-gray-100 text-purple-900 text-sm w-16 font-bold">
          <option value="USD">USD</option>
        </select>
      </div>
    </div>
  )
}