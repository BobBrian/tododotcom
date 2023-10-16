import React from 'react'

export default function Form() {

  return (
    <form className="mb-8">
        <div>
          <label className="block mb-2 text-lg font-medium text-slate-200 ">Todo Task</label>
          <input className="bg-gray-50 border border-stone-600 text-gray-900 
          rounded-lg focus:ring-blue-500 w-6/12 " placeholder="Enter Task Here" required/>
        </div>
        
        <button className="mt-2 text-center inline-flex items-center px-3 py-2 text-sm font-medium 
          text-center text-white bg-blue-700 rounded-lg">Add New Task</button>
    </form>
  )
}
