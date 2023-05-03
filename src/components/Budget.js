
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const [budgetInput, setBudgetInput] = useState(budget)
    const totalExpenses = expenses.reduce((final, curr)=>final+curr.cost,0)
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    type="number"
                    value={budgetInput}
                    min={expenses}
                    onChange={(e)=>{
                        // if(parseInt(e.target.value) > 20000){
                        //     alert("The value cannot exceed £20,000")
                        //     setBudgetInput("");
                        //     return;
                        // }
                        if(parseInt(e.target.value) < totalExpenses){
                            alert("The value cannot be lower than current expenses of £"+totalExpenses)
                            setBudgetInput("");
                            return;
                        }
                        setBudgetInput(e.target.value)
                        // dispatch({
                        //     type: 'SET_BUDGET', 
                        //     payload: e.target.value
                        // })
                    }}
                />
            </span>
        </div>
    );
};
export default Budget;