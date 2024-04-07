import { useState } from "react"
import FormDialog from "./updateDialog"
import useHttp from "../../hooks/useHttp"
import DeleteIcon from '@mui/icons-material/Delete';

const User = (props) => {
    const { deleteObj } = useHttp()
    const delUser = () => {
        deleteObj(`users/${props.user._id}`, props.refetch)
    }
    return (
        <>
            <div className="card">
                <h3>{props.user.name}</h3>
                <h4>{props.user.email}</h4>
                <h4>{props.user.address}</h4>
                <h4>{props.user.phone}</h4>

                
                <div className="button-container">
                    <FormDialog user={props.user} refetch={props.refetch} />
                    <button onClick={delUser}><DeleteIcon/>DELETE</button>
                </div>
            </div>

        </>
    )
}

export default User