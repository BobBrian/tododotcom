"use client"
import React from 'react'

import {useState, useEffect} from 'react' //The Main Goal is to UseReact Hooks with Typescript

//This is the version of the main code that will be pushed into the master branch
//The code here uses remenant code from the static project file

//This page is where the listAllTodo and createTodo
//Stage 1 is the code built with dummy data to populate fields and make it easier to design
//The Front End
//VERSION 1:USING DUMMY DATA
//Dave Grey Video:https://www.youtube.com/watch?v=2NEV_M7NN6k

interface Todo {
  id:number,
  description:string
}

export default function Home() {

  //UseState Hook filled with Dummy Data to help build the Todo Cards
  const [todos,setTodo] = useState<Todo[]>([])
  const [description,setDescription] = useState('')
 


  //GET REQUEST
  //This HHTP Method Works
  useEffect(() => {
    fetch("http://localhost:3100/todos")
    .then(response => response.json())
    .then(json => setTodo(json));
  },[])

  //POST REQUEST
  //This HtTTP Method Works
  const handleSubmit = (e:any) => {
    const todo = {description}

    fetch("http://localhost:3100/todos",{
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo)
    }).then(() =>{
      console.log("A NEW TODO HAS BEEN ADDED")
    })
  }

  //DELETE REQUEST
  //This HTTP METHOD WORKS
  const deleteTodo = (id:number) => {
    fetch(`http://localhost:3100/todos/${id}`,{
      method:'DELETE'
    }).then(() => {
      console.log('Todo Deleted')
    })

  }

  return (
   <main>
      <h1 className="text-slate-200 text-center text-4xl mb-8">Chibuikem Nwauche</h1>
      <h2 className="text-slate-200 text-center text-3xl mb-6">Todo List Application</h2>
      {/* Todo Form */}
      <form className="mb-8" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 text-lg font-medium text-slate-200 ">Todo Task</label>
          <input value={description} className="bg-gray-50 border border-stone-600 text-gray-900 
          rounded-lg focus:ring-blue-500 w-6/12 " placeholder="Enter Task Here" onChange={(e) =>setDescription(e.target.value)} required/>
        </div>
        
        <button className="mt-2 text-center inline-flex items-center px-3 py-2 text-sm font-medium 
          text-center text-white bg-blue-700 rounded-lg">Add New Task</button>
      </form>
      

      {/* Todo List */}
      <div >
          {todos.map((todo) => (
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg mb-5 " key={todo.id}>
              <h5 className="text-2xl font-bold text-gray-900">{todo.description} </h5>
              <a className="mt-2 inline-flex items-center px-3 py-2 text-center text-white 
              bg-red-500 rounded-lg rounded-lg hover:bg-red-900" onClick={()=>{deleteTodo(todo.id)}}>Delete</a>
            </div>
          ))}
      </div>

   </main>
  )
}