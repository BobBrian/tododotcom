
import React from 'react'

export default function Home() {
  return (
   <div>
      {/* Form where Data Goes */}
      {/* Are the Changes Working*/}
      <form className="bg-zinc-100  mx-auto w-[calc(100%-4rem)] max-w-6xl z-2 pt-16 pr-16 pb-8 pl-16 border-2 border-solid border-black">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Todo Description</label>

          <input   className="bg-gray-50 border border-gray-300 text-gray-900
          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
          block w-full p-2.5 dark:bg-gray-700"  required/>
        </div>

        <button className="text-white bg-blue-700 hover:bg-blue-800
         font-medium rounded-lg text-sm w-full sm:w-auto px-5 
         py-2.5 text-center">Submit</button>

      </form>
    {/*Mapping Funtion for the Cards containing the Todo Information */}

    {/* <div>
        {todos.map((todo)=>(
            <div key={todo.id}>
                <div className="w-1/2  p-6 bg-white border border-gray-200 rounded-lg ">

                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{todo.description}</h2>

                <button className="text-center inline-flex items-center px-3 py-2 text-sm font-medium 
                text-center text-white bg-blue-700 rounded-lg" >Click Me</button>
                </div>
            </div>
        ))}
    </div> */}

   </div>
  )
}