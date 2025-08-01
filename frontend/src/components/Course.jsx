import React from 'react'
import {Link} from "react-router-dom"
import list from "../../public/list.json"
import Cards from './Cards'
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx=auto md:px=20 px=4 ">
        <div className="mt-28 items-center justify-center text-center">
            <h1 className="text-2xl font-semibold md:text-4xl"> We are <span className="text-pink-600"> Delighted </span> to have you <span className="text-pink-600"> Here !</span> </h1>
            <p className="mt-12">
                The Greatest Drama, Fiction, Romance and Mythological Books of All Time on Humanities.
            </p>
            <Link to="/">
            <button className="mt-6 bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300">Back</button>
            </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
            list.map((item)=>(
              <Cards key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course
