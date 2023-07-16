import React, { useReducer } from 'react'

const Counter = () => {
    const initialState = 0;
    const reducer = (state, action) => {
        if (action.type === "INCREMENT") {
            return state + action.payload;
        } else if (action.type === "DECREMENT") {
            return state - action.payload;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-1/3 border border-pink-200 shadow rounded p-6'>
                <h3 className='text-center text-3xl'>{state}</h3>
                <div className='flex space-x-2 justify-center items-center pt-10'>
                    <button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })} className='bg-red-400 py-2 px-6 text-white font-medium rounded active:bg-red-500'>Decrement</button>

                    <button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })} className='bg-blue-500 py-2 px-6 text-white font-medium rounded active:bg-blue-600'>Increment</button>
                </div>
            </div>
        </div >
    )
}

export default Counter