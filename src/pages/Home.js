import React, { useEffect, useState } from "react";
import { Checkbox } from 'antd';

function Home() {
    const [todos, setTodos] = useState([])
    const fetchTodos = async() => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const tareas = await response.json();
        setTodos(tareas);
    }
    useEffect(()=>{
        fetchTodos()
    },[])
    console.log(todos)
    return <h2>{todos.map((todo)=>{
        return(
        
        <Checkbox checked={todo.completed} >
        {todo.title}
      </Checkbox>
      )
    })}</h2>;
  }

export default Home