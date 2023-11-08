import React, { useEffect, useState } from "react";
import { Checkbox, List ,Pagination} from 'antd';

function Home() {
    const [todos, setTodos] = useState([])
    const [cant, setCant] = useState(10)
    const [total, setTotal] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)

    const fetchTodos = async(limit) => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const tareas = await response.json();
        const aux = []
        const ofset = currentPage*cant
        for (let index =  ofset; index < limit + ofset ; index++) {
          const todo = tareas[index];
          aux.push(todo)
          
        }
        setTodos(aux);
        setTotal(tareas.length)

    }
    useEffect(()=>{
        fetchTodos(cant, currentPage)
    },[cant, currentPage])
    console.log(todos)
    // return <h2>{todos.map((todo)=>{
    //     return(
        
    //     <Checkbox checked={todo.completed} >
    //     {todo.title}
    //   </Checkbox>
    //   )
    // })}</h2>;
    return (
      <React.Fragment>
<List
        
        dataSource={todos}
        renderItem={(item) => (
          <List.Item>
            <Checkbox checked={item.completed}>
              {item.title}
            </Checkbox>
          </List.Item>
        )}
      />
<Pagination 
defaultCurrent={1} 
current = {currentPage + 1}
 total={total} 
 onShowSizeChange={(current, size)=>{
  setCant(size)
 
 }}
 onChange={(page, pageSize)=>{
  setCurrentPage(page - 1)

 }}
 />;
      </React.Fragment>
      
    )
  }

export default Home