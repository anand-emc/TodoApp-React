import React from 'react'
import CounterApp from './CounterApp'
import Shop from './Shop'

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
      <Shop/>
    </main>
  )
}

export default Content