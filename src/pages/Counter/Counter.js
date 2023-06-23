import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {counterSlice} from "../../store/counterSlice"


 const Counter = () => {
 
    const counterState = useSelector((state)=>state.counter);
    console.log(counterState.counter)
    const dispatch = useDispatch();

  return (
    <div className='div'>
    <div className='counter'>
        <p>Counter : {counterState.counter}</p>
        <button onClick={()=>{
            
            dispatch(counterSlice.actions.setCounting())
        }}>Increase Number</button>
        <button onClick={()=>{
            dispatch(counterSlice.actions.clearCounter())
        }}>Reset Number</button>
        <button onClick={()=>{
            dispatch(counterSlice.actions.saveCounter())
            console.log(counterState.saved)
        }}>Save Number</button>
    </div>

    </div>
  )
}


export default Counter