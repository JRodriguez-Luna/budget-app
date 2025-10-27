'use client'

import Form from 'next/form'
import Link from 'next/link'
import TypingText from '@/components/ui/shadcn-io/typing-text'
import { BackgroundGradient } from '@/components/ui/shadcn-io/background-gradient'
import { signIn } from "next-auth/react"


export default function SignUp() {

    return (
        // Container
        <div className="min-h-screen sm:p-10 p-4 flex flex-wrap flex-col sm:flex-row items-center text-center justify-evenly max-sm:justify-center gap-5">
            {/* Message - left */}
            <div className="flex flex-col items-center font-semibold text-slate-200">
                <h3 className="text-5xl mb-2 max-sm:hidden">Start Your Financial Journey with</h3>
                <h2 className="text-7xl max-sm:text-4xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    AbrupterBudget
                </h2>
                <TypingText
                    text={[
                        "Transform your budget into a growth game",
                        "Smart goals. Real progress. Proven results.",
                        "Gamified saving that actually works well",
                        "Where finance meets daily motivation",
                        "The fun way to master your money goals",
                        "Research-backed budgeting at its best",
                    ]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="$"
                    className="text-4xl max-sm:text-lg font-bold mt-1"
                    textColors={["#8b5cf6", "#3b82f6", "#06b6d4"]}
                    variableSpeed={{ min: 50, max: 120 }}
                />
            </div>


            {/* Sign Up form - right */}
            <div className='w-full max-w-md sm:max-w-sm'>
                <BackgroundGradient
                    className="rounded-[22px] p-1 bg-zinc-900"
                >
                    <Form className='flex rounded-xl items-center 
                        text-center
                        p-5 font-semibold' 
                        action={""}>
                                    
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
                </BackgroundGradient>
            </div>
        </div>
    )
}