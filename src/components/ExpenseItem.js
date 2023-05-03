import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button style={{
            display: "flex", justifyContent:"center", alignItems:"center",
            height: 20, width: 20, borderRadius: "50%", border:"none", color: "#ffffff", background: "#a5e1a0", fontSize: 20, fontWeight:"bold"
            }} onClick={event=> increaseAllocation(props.name)}><p style={{marginTop: 10}}>+</p></button></td>
        <td><button style={{
            display: "flex", justifyContent:"center", alignItems:"center",
            height: 20, width: 20, borderRadius: "50%", border:"none", color: "#ffffff", background: "red", fontSize: 20, fontWeight:"bold"
            }} onClick={event=> decreaseAllocation(props.name)}><p style={{marginTop: 10}}>-</p></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
