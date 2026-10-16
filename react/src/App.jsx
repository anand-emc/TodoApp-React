import React from 'react'
import Header from './componnents/Header'
import Footer from './componnents/footer' 
import Content from './componnents/Content'
import './App.css'

let author = "Anand"

function App() {
  
  return (
    <div className='App'>
     <Header/>
     <Content/>
     <Footer/>
    </div>
  )
}

export default App
