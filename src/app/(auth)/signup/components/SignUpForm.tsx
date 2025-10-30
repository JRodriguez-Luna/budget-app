'use client'

import Link from "next/link"
import Form from "next/form"
import { SignUpActions } from "@/lib/actions"
import { signIn } from "next-auth/react"

export function SignUpForm() {
    return (
        <Form className='flex rounded-xl items-center 
                        text-center
                        p-5 font-semibold' 
                        action={SignUpActions}>
                                    
                        <div className='flex flex-col gap-5 w-full'>
                            {/* Title */}
                            <div className='flex flex-col'>
                                <h3 className='text-xl font-semibold'>Create an Account</h3>
                                <p className='text-sm text-slate-500 font-normal'>Get started with your free account today</p>
                            </div>

                            {/* name input */}
                            <div className='flex flex-col sm:flex-row justify-between gap-5'>
                                {/* First Name */}
                                <label className='flex flex-col items-start w-full' htmlFor="firstName">
                                    First Name
                                    <input className='w-full border border-slate-500 bg-slate-700 rounded px-2 py-1' 
                                    id='firstName' 
                                    name='firstName'
                                    placeholder='John'
                                    type="text" 
                                    required
                                    />
                                </label>
                                
                                {/* Last Name */}
                                <label className='flex flex-col items-start w-full' htmlFor="lastName">
                                    Last Name
                                    <input className='w-full border border-slate-500 bg-slate-700 rounded px-2 py-1' 
                                    id='lastName' 
                                    name='lastName' 
                                    placeholder='Doe'
                                    type="text" 
                                    required
                                    />
                                </label>
                            </div>

                            {/* email Input */}
                            <label className='flex flex-col items-start' htmlFor="email">
                                Email Address
                                <input className='w-full border border-slate-500 bg-slate-700 rounded px-2 py-1' 
                                id='email' 
                                name='email' 
                                placeholder='john@example.com'
                                type="email" 
                                required
                                />
                            </label>

                            {/* password Input */}
                            <label className='flex flex-col items-start' htmlFor="password">
                                Password
                                <input className='w-full border border-slate-500 bg-slate-700 rounded px-2 py-1' 
                                id='password' 
                                name='password' 
                                placeholder='Create a strong password'
                                type="password" 
                                required
                                />
                            </label>

                            {/* confirm password Input */}
                            <label className='flex flex-col items-start' htmlFor="confirmPassword">
                                Confirm Password
                                <input className='w-full border border-slate-500 bg-slate-700 rounded px-2 py-1' 
                                id='confirmPassword' 
                                name='confirmPassword' 
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
                            transform transition duration-300 ease-in-out
                            items-center p-2 rounded cursor-pointer font-semibold' 
                            type='submit'>
                                Create Account
                            </button>

                            {/* Sign in redirect */}
                            <p className='text-slate-500 font-normal text-sm'>
                                Already have an account?
                                {' '}
                                <Link className='text-blue-500 font-semibold hover:text-blue-400 transform transition duration-300 ease-in-out' href='/signin'>Sign In</Link>
                            </p>

                            {/* Divider style */}
                            <div className='flex h-0 w-full items-center font-normal'>
                                <div className='w-full h-[1px] items-center justify-center bg-slate-500'></div>
                                <div className='mx-3 text-slate-500 text-xs whitespace-nowrap'>Or sign up with</div>
                                <div className='w-full h-[1px] items-center justify-center bg-slate-500'></div>
                            </div>

                            {/* Temp Auth buttons */}
                            <div className='flex justify-between items-center gap-3'>
                                <button onClick={() => signIn("google", { redirectTo: '/dashboard' })} type='button' className='w-full border border-slate-500 bg-slate-700 rounded py-2 cursor-pointer text-sm'>Google</button>
                                {/* Apple has not been set for OAuth! */}
                                <button onClick={() => signIn("apple", { redirectTo: '/' })} type='button' className='w-full border border-slate-500 bg-slate-700 rounded py-2 cursor-pointer text-sm'>Apple</button>
                            </div>
                        </div>
                    </Form>
    )
}