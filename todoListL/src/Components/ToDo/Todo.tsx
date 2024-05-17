
// with typescript we need to define out items   ALSO if we use them in our component only we dont need to pass our props throug hthe function    IF WE DO PASS THEM THROUGH its so that the app.tsx can use them as well

import { useState } from "react"

interface TodoItem {
    id: number
    todo: string
}

const Todo = () => {

    // to Help manage states, useState for input, and useState for list

    // useState to help with our input state
    const [input, setInput] = useState('');

    // useState to help track our list
    const [list, setList] = useState<TodoItem[]>([]);

    // create a function to help us add, delete, and update our list
    // now create function to help us add our todo to our list
    const addToDo = (newItem:string) => {

        // now lets have an object
        const newTodo:TodoItem = {
            id: Math.random(),
            todo: newItem
        }
        setList([...list,newTodo]);
        setInput("");
    }

    // make a delete function and tie it to the X of our delete button on the li

    // make an update function and tie it to a button that will live to the left of the X button

  return (
    <>
        {/* We will need a title, input field, button and somewhere to display our todo list */}
        <div className="myContainer">
            <div className="row">
                <h1>Todo List</h1>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
                <button className="addButton" onClick={()=>addToDo(input)}>Add</button>
            </div>
            
            {/* outside of our row we may need to render our list, ul, li map list update our useState */}
            {/* now we're making out mapping of our list */}
            <ul>
                {list.map(item => (
                    <li key={item.id}>
                            {item.todo}
                            <button >X</button>
                    </li>
                ))}
            </ul>

        </div>
    </>
  )
}

export default Todo