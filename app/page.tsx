
"use client"
import React from 'react'
import {useState, useEffect} from 'react'

export default function Home() {

  const [todos,setTodo] = useState([] as any[])
  const [description,setDescription] = useState('')

  //GET REQUEST
  useEffect(() =>{
     fetch('http://localhost:3100/todos')
     .then(res =>{
      return res.json()
     })
     .then((data) =>{
      // console.log(data)
      setTodo(data)
     })
     .catch( err =>{
      console.log(err.message)

     })
  },[])

  //POST REQUEST
  const handleSubmit = (e:any) => {
    e.preventDefault();

    const todo = {description}

    console.log(todo) //To show that the code does indeed appear in the console Log

    fetch('http://localhost:3100/todos', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo)
    }).then(() => {
     console.log('new blog added');
  })}

  //DELETE REQUEST


  return (
   <div>
      {/* Form where Data Goes */}
      {/* Are the Changes Working*/}
      <form  className="bg-zinc-100  mx-auto w-[calc(100%-4rem)] max-w-6xl z-2 pt-16 pr-16
       pb-8 pl-16 border-2 border-solid border-black" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Todo Description</label>

          <input value={description}   className="bg-gray-50 border border-gray-300 text-gray-900
          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
          block w-full p-2.5 dark:bg-gray-700 mb-6" onChange={(e) =>setDescription(e.target.value)}  required/>
        </div>

        <button className="text-white bg-blue-700 hover:bg-blue-800
         font-medium rounded-lg text-sm w-full sm:w-auto px-5 
         py-2.5 text-center">Add Todo</button>

      </form>
    {/*Mapping Funtion for the Cards containing the Todo Information */}

    <div>
        {todos.map((todo)=>(
            <div key={todo.id}>
                <div className="w-1/2  p-6 bg-white border border-gray-200 rounded-lg ">

                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{todo.description}</h2>

                <button className="text-center inline-flex items-center px-3 py-2 text-sm font-medium 
                text-center text-white bg-red-700 rounded-lg" >Delete</button>
                </div>
            </div>
        ))}
    </div>

   </div>
  )
}