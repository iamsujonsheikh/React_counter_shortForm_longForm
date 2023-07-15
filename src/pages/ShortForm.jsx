import React, { useState } from 'react'

const ShortForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");

    const submit = (event) => {
        event.preventDefault()
        const data = {
            firstName,
            lastName,
            number,
            password
        }
        console.log(data);
    };

    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <form onSubmit={submit} className='space-y-2 bg-gray-50 w-1/3  p-10 shadow border border-purple-200 rounded'>
                    {/* FirstName */}
                    <span className='text-xl text-slate-700'>FirstName</span><br />
                    <input onBlur={(e) => setFirstName(e.target.value)} className='px-2 border h-10 w-full rounded' placeholder="write your first name" type="text" /><br />

                    {/* LastName */}
                    <span className='text-xl text-slate-700'>LastName</span><br />
                    <input onBlur={(e) => setLastName(e.target.value)} className='px-2 border h-10 w-full rounded' placeholder="write your last name" type="text" /><br />

                    {/* Number */}
                    <span className='text-xl text-slate-700'>Number</span><br />
                    <input onBlur={(e) => setNumber(e.target.value)} className='px-2 border h-10 w-full rounded' placeholder="write your number" type="text" /><br />

                    {/* Password */}
                    <span className='text-xl text-slate-700'>Password</span><br />
                    <input onBlur={(e) => setPassword(e.target.value)} className='px-2 border h-10 w-full rounded' placeholder="write you password" type="text" /><br />

                    <button className='py-2 px-6 bg-blue-500 rounded font-medium text-white active:bg-blue-600'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ShortForm