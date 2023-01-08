import React from 'react'
import { useState } from 'react';
import SingleTask from './SingleTask';
import TaskForm from './TaskForm';

const Master = () => {
const [task,settask]=useState([]);
    
  return (
    <div>
        <div className=' container mt-3'>
            <div className='row'>
                <div className=' col-6 offset-3'>
                    <div className=' card'>
                        <div className=' card-header bg-primary'>
                            <h1 className=' text-white'>To do List</h1>
                    

                        </div>
                        <div className=' card-body'>
                                    <TaskForm task={task} settask={settask}/>
                                <ul className=' list-group mt-3'>
                                    {
                                        task.map((singletask,index)=>{
                                            return <SingleTask key={index} singletask={singletask} tasks={task} settasks={settask} index={index}/>
                                        })
                                    }

                                </ul>
                                
                            </div>

                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Master