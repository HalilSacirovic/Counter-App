import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {counterSlice} from "../../store/counterSlice"
import { authSlice } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import "../../App.css"


 const Counter = () => {

 
    const counterState = useSelector((state)=>state.counter);
    const authState = useSelector((state) => state.auth);
    console.log(counterState.counter)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    console.log(authState)
 
    const [currentDate, setCurrentDate] = useState(new Date());
    const dataDate = {
        counted:counterState,
        fullName:authState.fullName,
        datum:currentDate
    }

    console.log(authState)
    console.log(dataDate.datum)

  return (
    <div className='div'>
      {authState.id ? (
        <button
          onClick={() => {
            dispatch(authSlice.actions.logout());
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      )}
    <div className='counter'>
        <p>Counter : {counterState.counter}</p>
        <button onClick={()=>{
            
            dispatch(counterSlice.actions.setCounting())
        }}>Increase Number</button>
        <button onClick={()=>{
            dispatch(counterSlice.actions.clearCounter())
        }}>Reset Number</button>
    {authState.id ?(<button onClick={()=>{
            dispatch(counterSlice.actions.saveCounter(dataDate))
            console.log(counterState.saved)
        }}>Save Number</button>)
    :
    (<button >Save Number</button>
    )}
        
    </div>

    <div className="saved">
    {
        counterState.saved.map((item,index)=>{
            return(
              <div key={index} className="saved_values">
               {console.log("item",item)}

               <p>Brojac:<span>{item.counted.counter}</span></p>
               <p>Korisnik koji je sacuvao Podatak:<span>{item.fullName}</span></p>
               <p>Datum Sacuvanog podatka:<span>{item.datum.toLocaleString('en-US', { timeZone: 'UTC' })}</span></p>
              </div>


            )
        })
    }


    </div>

    </div>
  )
}


export default Counter