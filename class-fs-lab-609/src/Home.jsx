import {useState} from 'react';

export default function App() {
  const [input,setInput] = useState('');
  const [tasks,setTasks] = useState([])



  const addMyInput = (event)=>{
    setInput(event.target.value)
  }

  const addMyTask = () =>{
   setTasks([...tasks,{title:input,isDone:false}]) ;
  }

  const changeStatus = (index)=>{
    
    const newTasks = tasks.map((item,i)=>{
        if(index == i){
          return {title:item.title,isDone:true}
        }

        return item;
    })

    setTasks(newTasks);

  }

  const deleteTask = (index)=>{
      const newArr = tasks.filter((item,i)=>{return i!==index})

      setTasks(newArr);
  }

  return (
    <>
      <h1>Todo list</h1>
      <input onChange={addMyInput} placeholder="Enter your task "/>
      <button onClick={addMyTask}>Add task</button>
      
      {tasks.map((item,index)=>{return <p><span style={{textDecoration:item.isDone?'line-through':''}}>{item.title}</span>
                                  <button onClick={()=>changeStatus(index)}>Done</button>
                                  <button onClick={()=>deleteTask(index)}>Delete</button>
                                  </p>})}
    </>
  )
}




