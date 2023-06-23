import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {counterSlice} from "../../store/counterSlice.js"


 const Counter = () => {
 
    const counterState = useSelector((state)=>state.couter);
    const dispatch = useDispatch();

  return (
    <div className='div'>
    <div className='counter'>
        <p>Counter : 0</p>
        <button onClick={()=>{
            dispatch(counterSlice)
        }}>Increase Number</button>
        <button>Reset Number</button>
        <button>Save Number</button>
    </div>

    </div>
  )
}


export default Counter