import supabase from "./supabaseCreateClient.js";
import React,{ useState } from "react";

function ToDoList(){

    const [todolist,settodolist] = useState([])
    const [addtack,setaddtack] = useState("")


function inputtask(event) {
    setaddtack(event.target.value)
}

const tackbut = async () => {
    const taskobj = {
        name: addtack,
        done:false,
    };

    const {data,error} = await supabase.from("todolist").insert([taskobj]).single();

    if (error) {
        console.log(`this is the error ${error}`);
        
    } else {
        settodolist((t) => [...t,todolist])
        setaddtack("")
    }
}


    return(<>
    <div className="taskbox">
        <h1>TO DO LIST </h1>
        <div>
            <label>
                <input type="text" id="input"onChange={inputtask} value={addtack} placeholder="enter task" autoFocus/>
            </label>
            <button onClick={tackbut}>add task</button>
        </div>
        <ul>
            
        </ul>
    </div>
           </>);
}

export default ToDoList