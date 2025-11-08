'use client';

import BlurText from '@/components/ui/shadcn-io/blur-text';
import { Vortex } from '@/components/ui/shadcn-io/vortex';
import Link from 'next/link';
import { signIn } from '@/lib/actions';

export default function SignInPage() {
    return (
        // Container
        <div className='min-h-screen flex flex-col justify-center items-center text-center p-4'>
            <Vortex
                backgroundColor='black'
                rangeY={800}
                particleCount={100}
                baseHue={120}
                className='flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full'
            >
                {/* Sign in form - Left */}
                <div className='flex flex-col items-center gap-5'>
                    {/* title */}
                    <div className='flex flex-col gap-1 font-semibold'>
                        <h2 className='text-6xl max-sm:text-5xl bg-gradient-to-r from-emerald-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent'>
                            AbrupterBudget
                        </h2>
                        <p className='text-sm text-slate-400 hidden'>
                            Smart emergency fund management for life&apos;s
                            unexpected moments
                        </p>
                    </div>

                    {/* welcome back */}
                    <div className='flex flex-col items-center'>
                        <BlurText
                            text='Welcome Back'
                            delay={150}
                            animateBy='words'
                            direction='top'
                            className='text-3xl font-semibold'
                        />

                        <BlurText
                            text='Sign in to your account to continue mananing your funds'
                            delay={150}
                            animateBy='words'
                            direction='top'
                            className='text-sm text-slate-400'
                        />
                    </div>

                    {/* Form Signin */}
                    <form className='flex flex-col justify-between gap-5 w-full font-semibold'>
                        {/* email */}
                        <label
                            className='flex flex-col items-start w-full'
                            htmlFor='email'
                        >
                            Email
                            <input
                                className='w-full border border-slate-500 bg-slate-700 rounded px-2 py-1'
                                id='email'
                                name='email'
                                placeholder='john@example.com'
                                type='email'
                            />
                        </label>

                        {/* password */}
                        <label
                            className='flex flex-col items-start w-full'
                            htmlFor='password'
                        >
                            Password
                            <input
                                className='w-full border border-slate-500 bg-slate-700 rounded px-2 py-1'
                                id='password'
                                name='password'
                                placeholder='*******'
                                type='password'
                            />
                        </label>

                        {/* Remeber me + forgot password */}
                        <div className='flex justify-between'>
                            {/* remember me */}
                            <label htmlFor='remember'>
                                <input
                                    className='mr-1'
                                    name='remember'
                                    type='checkbox'
                                />
                                Remember me
                            </label>
                            {/* forgot password button */}
                            <button type='button'>Forgot password?</button>
                        </div>

                        {/* Submit button for signin */}
                        <button
                            className='w-full 
                        bg-gradient-to-r
                        from-blue-500
                        to-emerald-500
                        hover:from-emerald-500 
                        hover:to-blue-500
                        transform transition duration-300 ease-in-out
                        items-center p-2 rounded cursor-pointer font-semibold'
                            type='submit'
                        >
                            Sign in
                        </button>

                        <p className='text-slate-500 font-normal text-sm'>
                            Don&apos;t have an account?{' '}
                            <Link
                                className='text-blue-500 font-semibold hover:text-blue-400 transform transition duration-300 ease-in-out'
                                href='/signup'
                            >
                                Sign Up
                            </Link>
                        </p>
                    </form>
                </div>
            </Vortex>
        </div>
    );
}
