import React from 'react'

const Counter = () => {

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-1/3 border border-pink-200 shadow rounded p-6'>
                <h3 className='text-center text-3xl'>0</h3>
                <div className='flex space-x-2 justify-center items-center pt-10'>
                    <button className='bg-red-400 py-2 px-6 text-white font-medium rounded active:bg-red-500'>Increment</button>
                    <button className='bg-blue-500 py-2 px-6 text-white font-medium rounded active:bg-blue-600'>Decrement</button>
                </div>
            </div>
        </div>
    )
}

export default Counter