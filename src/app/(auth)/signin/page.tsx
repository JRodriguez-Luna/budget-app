'use client'

export default function SignInPage() {
    return (
        // Container
        <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
            {/* Sign in form - Left */}
            <div className="flex flex-col items-center gap-5">
                {/* title */}
                <div className="">
                    <h3 className="text-4xl font-semibold">AbrupterBudget</h3>
                    <p className="text-sm text-slate-400 hidden">Smart emergency fund management for life&apos;s unexpected moments</p>
                </div>

                {/* welcome back */}
                <div className="">
                    <h3 className="text-3xl font-semibold">Welcome back</h3>
                    <p className="text-sm text-slate-400">Sign in to your account to continue mananing your funds</p>
                </div>

                {/* Form Signin */}
                <form className='flex flex-col justify-between gap-5 w-full' action="">
                    {/* email */}
                    <label className='flex flex-col items-start w-full' htmlFor="email">
                        Email
                        <input className='w-full border border-slate-500 bg-slate-700 rounded px-2 py-1' 
                        id='email' 
                        name='email' 
                        placeholder='john@example.com'
                        type="email" />
                    </label>

                    {/* password */}
                    <label className='flex flex-col items-start w-full' htmlFor="password">
                        Password
                        <input className='w-full border border-slate-500 bg-slate-700 rounded px-2 py-1' 
                        id='password' 
                        name='password' 
                        placeholder='*******'
                        type="password" />
                    </label>
                    
                    {/* Remeber me + forgot password */}
                    <div className="flex justify-between">
                        {/* remember me */}
                        <label htmlFor="remember">
                            <input className="mr-1" name="remember" type="checkbox" />
                            Remember me
                        </label>
                        {/* forgot password button */}
                        <button type="button">Forgot password?</button>
                    </div>

                    {/* Submit button for signin */}
                    <button className='w-full 
                        bg-gradient-to-r
                        from-blue-500
                        to-purple-500
                        hover:from-purple-500 
                        hover:to-blue-500
                        transform transition duration-300 ease-in-out
                        items-center p-2 rounded cursor-pointer font-semibold' 
                        type='submit'>
                        Sign in
                    </button>

                    {/* Divider style */}
                    <div className='flex h-0 w-full items-center font-normal'>
                        <div className='w-full h-[1px] items-center justify-center bg-slate-500'></div>
                        <div className='mx-3 text-slate-500 text-xs whitespace-nowrap'>Or continue with</div>
                        <div className='w-full h-[1px] items-center justify-center bg-slate-500'></div>
                    </div>

                    {/* Temp Auth buttons */}
                    <div className='flex justify-between items-center gap-3'>
                        <button type='button' className='w-full border border-slate-500 bg-slate-700 rounded py-2 cursor-pointer text-sm'>Google</button>
                        <button type='button' className='w-full border border-slate-500 bg-slate-700 rounded py-2 cursor-pointer text-sm'>Apple</button>
                    </div>
                </form>
            </div>
        </div>
    )
}