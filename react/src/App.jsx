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


let author = "Anand"

function App() {

  return (
      <div className='App'>
        <Router>
        <ol>
          <li><Link to="/">Home</Link></li>
          <li> <Link to="/Product">Product</Link> </li>
          <li> <Link to="/Login">Login</Link> </li>
          <li> <Link to='/Signup'>Signup</Link></li>
          <li> <Link to='/TodoAPP'>TodoAPP</Link></li>
        </ol>
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
          </Routes>
        </Router>
      </div>
  )
}

export default App
