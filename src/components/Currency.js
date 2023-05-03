
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    
    return (
        <div className='alert alert-secondary'>
            <span>Currency
           

<select value={currency} style={{
    background:"#a5e1a0",
    color: "#ffffff", 
    borderRadius: "5px"
}}onChange={(e)=>{
    dispatch({
        type: 'CHG_CURRENCY', 
        payload: e.target.value
    })
}}>

  <option value="$" style={{color: "#000000"}}>$ Dollar</option>

  <option value="£" style={{color: "#000000"}}>£ Pound</option>

  <option value="€" style={{color: "#000000"}}>€ Euro</option>
  <option value="₹" style={{color: "#000000"}}>₹ Rupee</option>
  

</select>

            
            </span>
        </div>
    );
};
export default Currency;