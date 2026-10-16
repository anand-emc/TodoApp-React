import React from 'react'
import CounterApp from './CounterApp'

let user = "Anand"

function print(){
  console.log("you will")
}

function clean(){
  console.log("win")
}

const Content = () => {
  return (
    <main>
      <h1>Main Content - {user}</h1>
      <button className='add-btn' onClick={print}>click me!</button>
      <button className='delete-btn'  onClick={clean}>Delete</button>
      <CounterApp/>
    </main>
  )
}

export default Content