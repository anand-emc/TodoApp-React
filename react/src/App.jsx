import React from 'react'
import './App.css'
import Home from './componnents/Home';
import TodoApp from './componnents/TodoApp';
import Login from './componnents/Login';
import { BrowserRouter as Router,Routes,Route,Link, Links } from "react-router-dom"
import Product from './componnents/Product';
import Signup from './componnents/Signup';
import ProductList from './componnents/ProductList';
import ProductDetails from './componnents/ProductDetails';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './componnents/NavBar';
import { NotFound } from './componnents/NotFound';


function App() {

  return (
      <div className='App'>
        <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/TodoAPP' element={ <TodoApp/> }/>
            <Route path='/Login' element={ <Login/> }/>
            <Route path='/Product' element={ <Product/> } > 
                <Route index element={ <ProductList/> }/>
               <Route path='list' element={ <ProductList/> }/>
               <Route path='delails' element={ <ProductDetails/> }/>
            </Route>
            <Route path='/Signup' element={ <Signup/> }/>
            <Route path='*' element={ <NotFound/> }/>
          </Routes>
        </Router>
      </div>
  )
}

export default App
