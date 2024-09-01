import React, { useState } from 'react';
import './Homepage.css';


function TodoList() {
  const [arr, setArr] = useState([]); 
  const [inputValue, setInputValue] = useState('');
  const [display, setDisplay] = useState(false);
  const [editValue, setEditValue] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const handleAdd = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if(editValue==false){
      setArr([...arr, inputValue]);
      setInputValue('');
      setDisplay(true);
    }else{
      alert('press save button')
    }
  };

  const remove = (index) => {
      setArr(prevArr => [
        ...prevArr.slice(0, index),...prevArr.slice(index+1)  
      ]);
  };
  

  const edit = (index) => {
    setEditIndex(index);
    setEditValue(!editValue);
      const itemToEdit = arr[index];
      setInputValue(itemToEdit);
      setArr((prevArr) => {
        const newArr = [...prevArr];
        newArr[index] = inputValue;
        return newArr;
      });
      if(editValue==true && inputValue==''){
          alert("enter a value")
          setEditValue(true)
      }
  };

  return (
    <div>
      <center><h1>Todo-list</h1>
      <form onSubmit={handleClick}>
        <input type='text' value={inputValue} onChange={handleAdd} required placeholder='Enter a todo item'/>
        <button className='button1' style={{cursor:editValue? 'not-allowed':'pointer' }}>Add</button>
      </form>
      {
        display && 
        <ul style={{listStyleType: "none"}}>
          {arr.map((item, index) => (
            <li key={index}>
              {item}
              <button className='button1'style={{ backgroundColor: "green" ,marginTop:"0.5em"}} onClick={() => edit(index)}>{editValue && index === editIndex ? "Save" : "Edit"}</button>
              <button className='button1' style={{ backgroundColor: "red",marginTop:"0.5em" }} onClick={()=>remove(index)}>Remove</button>
            </li>
          ))}
        </ul>
      }
      </center>
    </div>
    
  );
}

export default TodoList;
