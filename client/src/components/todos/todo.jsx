import { useState } from "react"
import FormDialog from "./updateDialog"
import useHttp from "../../hooks/useHttp"
import Complete from "./complete"
import DeleteIcon from '@mui/icons-material/Delete';


const Todo = (props) => {
    const { deleteObj } = useHttp()
    const delTodo = () => {
        deleteObj(`todos/${props.todo._id}`, props.refetch)
    }
    return (
        <>
            <div className="card">
                <h6>{props.todo.createdAt}</h6>
                <h3>{props.todo.title}</h3>
                {props.todo.tags?.map((tag)=><p>{tag}</p>)}
                
                <div className="button-container">
                    <FormDialog todo={props.todo} refetch={props.refetch} />
                    <button onClick={delTodo}><DeleteIcon/> DELETE</button>
                </div>
                <Complete todo={props.todo} refetch={props.refetch}/>
            </div>


        </>
    )
}

export default Todo