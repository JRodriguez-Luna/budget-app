import TypingText from '@/components/ui/shadcn-io/typing-text'
import { BackgroundGradient } from '@/components/ui/shadcn-io/background-gradient'
import { SignUpForm } from '@/app/(auth)/signup/components/SignUpForm'


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
                    <SignUpForm />
                </BackgroundGradient>
            </div>
        </div>
    )
}