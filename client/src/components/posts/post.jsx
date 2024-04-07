import { useState } from "react"
import FormDialog from "./updateDialog"
import useHttp from "../../hooks/useHttp"
import DeleteIcon from '@mui/icons-material/Delete';

const Post = (props) => {
    const { deleteObj } = useHttp()
    const delPost = () => {
        deleteObj(`posts/${props.post._id}`, props.refetch)
    }
    return (
        <>
            <div className="card">
                <h3>{props.post.title}</h3>
                <h5>{props.post.body}</h5>
                <div className="button-container">
                    <FormDialog post={props.post} refetch={props.refetch} />
                    <button onClick={delPost}><DeleteIcon/> DELETE</button>
                </div>
            </div>

        </>
    )
}

export default Post