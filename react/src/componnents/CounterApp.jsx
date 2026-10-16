import React, { useState } from 'react'


let CounterApp = () => {
    let arr1 = [1,() => {}]
    let [a,b] = arr1
    let [count,setCount] = useState(0)
    console.log(useState(0));
    
    function Increase(){
      
      setCount(count+1)
    }
    
    function Decrease(){
    
      setCount(count-1)
    }

    return (
        <div>
        <h1>Counter - {count}</h1>
        <button  className='add-btn' onClick={Increase}>Increase</button>
        <button className='delete-btn' onClick={Decrease}>Decrease</button>
        <button className='New'>Rewared</button>
        { count>=10 ? (
          <p>haii yes its work</p>
        ) : (
          <p>its works nicsly</p>
        )
        } 
    </div>
  )
}

export default CounterApp