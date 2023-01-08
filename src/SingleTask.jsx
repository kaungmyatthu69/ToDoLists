import React from 'react'

const SingleTask = (props) => {
    const removeTask=(index)=>{
        const newTask=props.tasks.filter((t,i)=>{
            return i!==index
        })
        props.settasks(newTask)
    }
  return (
    <div>
        <li className=' list-group-item mt-2 d-flex justify-content-between'>{props.singletask}
        <button className=' btn btn-danger btn-sm' onClick={()=>removeTask(props.index)}>Delete</button>
        </li>
    </div>
  )
}

export default SingleTask