import React from 'react'
import { useState } from 'react';


const Content = () => {

   let [items,setItems] = useState( [
    {id:1, lable:"html,&css",checked:true},
    {id:2, lable:"java script",checked:true},
    {id:3, lable:"React",checked:true},
   ] )

   let [NewItems,setNewItems] = useState("")

   let [isEditing,setIsEditing] = useState(false)

   let [CurrentEleID,setCurrentEleID] = useState(null)

   
   let handleChecked =(id)=>{
     let newListItems = items.map( (item)=>{ return item.id === id ? { ...item, checked : !item.checked } :item })
     setItems( newListItems )
    }
    
    let handleUpdate = (id)=>{
      let listItems = items.find( item => item.id === id )
      setNewItems(listItems.lable)
      setIsEditing(true)
      setCurrentEleID(id)
    }
    let handleAddorSaveItems = ()=> {
      if(isEditing){
         let NewListItems = items.map( (item)=>{
          return item.id === CurrentEleID ? { ...item, label : NewItems } : item
         } )
         setNewItems(NewListItems)
         setCurrentEleID(null)
       }
      else{
        setItems([...items,{id : items.length+1, lable : NewItems, checked : false }])
        setNewItems( "" )
      }
    }
      
    
    let handleDelete = (id)=>{
      let newItems = items.filter(item => item.id !== id).map( (item,index)=>{return{...item,id : index+1}} )
      console.log(newItems)
      setItems(newItems)
    }
    
    
  return <main>
      <div>
        <input type="text" value={NewItems} placeholder='type your plan!' onChange={(e)=>{ setNewItems(e.target.value) }}/>
        <button className='insert' onClick={ handleAddorSaveItems } >{ isEditing ? "Save" : "Add" }</button>
      </div>
      <ul>
        {
          items.map( (item) =>{
            return (
              <li key={item.id} className='item'>
                <input type='checkbox' checked = {item.checked} onChange={()=>handleChecked(item.id)}/>
                <label >{ item.lable }</label>
                <button className='clear' tabIndex={0} onClick={ ()=> handleDelete(item.id)}>Delete</button>
                <button className='edit' tabIndex={0} onClick={ ()=> handleUpdate(item.id)}>Edit</button>
              </li>
            )
          })
        }
      </ul>
    </main>
};


export default Content