'use client'

import Form from 'next/form'
import Link from 'next/link'

export default function SignUp() {
    return (
        // Container
        <div className="flex h-auto justify-between">
            {/* Message */}
            {/* <div className="">Text</div> */}

            {/* Sign Up form */}
            <Form className='flex border rounded-xl items-center text-center p-5 border-slate-700 bg-slate-800 font-semibold' action="/signup">
                <div className='flex flex-col gap-5'>
                    {/* Title */}
                    <div className='flex flex-col'>
                        <h3 className='text-xl font-semibold'>Create an Account</h3>
                        <p className='text-sm text-slate-500 font-normal'>Get started with your free account today</p>
                    </div>

                    {/* name input */}
                    <div className='flex flex-start justify-between gap-5'>
                        {/* First Name */}
                        <label className='flex flex-col items-start' htmlFor="firstName">
                            First Name
                            <input className='border border-slate-500 bg-slate-700 rounded px-2 py-1' 
                            id='firstName' 
                            name='firstName'
                            placeholder='John'
                            type="text" />
                        </label>
                        
                        {/* Last Name */}
                        <label className='flex flex-col items-start' htmlFor="lastName">
                            Last Name
                            <input className='border  border-slate-500 bg-slate-700 rounded px-2 py-1' 
                            id='lastName' 
                            name='lastName' 
                            placeholder='Doe'
                            type="text" />
                        </label>
                    </div>

                    {/* email Input */}
                    <label className='flex flex-col items-start' htmlFor="email">
                        Email Address
                        <input className='w-full border  border-slate-500 bg-slate-700 rounded px-2 py-1' 
                        id='email' 
                        name='email' 
                        placeholder='john@example.com'
                        type="email" />
                    </label>

                    {/* password Input */}
                    <label className='flex flex-col items-start' htmlFor="password">
                        Password
                        <input className='w-full border  border-slate-500 bg-slate-700 rounded px-2 py-1' 
                        id='password' 
                        name='password' 
                        placeholder='Create a strong password'
                        type="password" />
                    </label>

                    {/* confirm password Input */}
                    <label className='flex flex-col items-start' htmlFor="password">
                        Confirm Password
                        <input className='w-full border  border-slate-500 bg-slate-700 rounded px-2 py-1' 
                        id='password' 
                        name='password' 
                        placeholder='Confirm your password'
                        type="password" />
                    </label>
                    
                    {/* Create Account Button */}
                    <button className='w-full 
                    bg-gradient-to-r
                    from-blue-500
                    to-purple-500

                    hover:from-purple-500 
                    hover:to-blue-500

                    {/* Smooth transition */}
                    transform transition duration-300 ease-in-out
                    items-center p-2 rounded cursor-pointer font-semibold' 
                    type='submit'>
                        Create Account
                    </button>

                    {/* Sign in Redictory */}
                    <p className='text-slate-500 font-normal'>
                        Already have an account?
                        {' '}
                        <Link className='text-blue-500 font-semibold hover:text-blue-400 transform transition duration-300 ease-in-out' href='/signin'>Sign In</Link>
                    </p>

                    {/* Divider style */}
                    <div className='flex h-0 w-full items-center font-normal'>
                        <div className='w-full h-[1px] items-center justify-center bg-slate-500'></div>
                        <div className='mx-5 w-full text-slate-500'>or sign up with</div>
                        <div className='w-full h-[1px] items-center justify-center bg-slate-500'></div>
                    </div>

                    {/* Temp Auth buttons */}
                    <div className='flex justify-between items-center gap-5'>
                        <button className='w-full border-slate-500 bg-slate-700 rounded py-3 cursor-pointer'>Google</button>
                        <button className='w-full border-slate-500 bg-slate-700 rounded py-3 cursor-pointer'>Apple</button>
                    </div>
                </div>
            </Form>
        </div>
    )
}