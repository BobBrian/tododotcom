"use client"
import React from 'react'
import Form from './components/form'
import {useState, useEffect} from 'react' //The Main Goal is to UseReact Hooks with Typescript

//This is the version of the main code that will be pushed into the master branch
//The code here uses remenant code from the static project file

//This page is where the listAllTodo and createTodo
//Stage 1 is the code built with dummy data to populate fields and make it easier to design
//The Front End
//VERSION 1:USING DUMMY DATA
//Dave Grey Video:https://www.youtube.com/watch?v=2NEV_M7NN6k

export default function Home() {

  //UseState Hook filled with Dummy Data to help build the Todo Cards
  const [todos,setTodo] = useState([
    { id:1,task:"JSON 1"},
    { id:2,task:"JSON 2"},
    { id:3,task:"JSON 3"},
    { id:4,task:"JSON 4"},
    { id:5,task:"JSON 5"},
  ])

  return (
   <main>
      <h1 className="text-slate-200 text-center text-4xl mb-8">Chibuikem Nwauche</h1>
      <h2 className="text-slate-200 text-center text-3xl mb-6">Todo List Application</h2>
      <Form/>
      <div >
          {todos.map(todo => (
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg mb-5 ">
              <h5 className="text-2xl font-bold text-gray-900">{todo.task}</h5>
              <a className="mt-2 inline-flex items-center px-3 py-2 text-center text-white 
              bg-red-500 rounded-lg rounded-lg hover:bg-red-900">Delete</a>
            </div>
          ))}
      </div>

   </main>
  )
}