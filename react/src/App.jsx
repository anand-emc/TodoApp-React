import React, { createContext, useState } from 'react'
import Header from './componnents/Header'
import Footer from './componnents/footer' 
import Content from './componnents/Content'
import './App.css'


let author = "Anand"

function App() {

  let [user,setUser] = useState({uNme:"Anand",age:18,email:"abcd@gamil"})

  let UserContext = createContext()
  console.log(UserContext)

  return (
    <UserContext.Provider value={{user}}>
      <div className='App'>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    </UserContext.Provider>
  )
}

export default App
