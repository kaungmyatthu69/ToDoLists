import React from "react";
import { useState } from "react";

const TaskForm = ({task,settask}) => {
    const [data,setdata]=useState([]);
    const create=()=>{
        settask([...task,data])
        setdata('')
    }
     return (
    <div>
      <div className=" d-flex justify-content-between">
        <input
          type="text"
          className=" btn btn-secondary"
          value={data}
          onChange={(e)=>setdata(e.target.value)}
         
          
        />
        <button className=" btn btn-success"  onClick={create}>Create</button>
      </div>
    </div>
  );
};

export default TaskForm;
