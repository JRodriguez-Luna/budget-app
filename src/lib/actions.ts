"use server"    // <- this marks all the export functions within the file
                // as Server Actions
                // Any functions included that are not used will automatically be removed
                // from the final application bundle.

import { redirect } from "next/navigation"
import prisma from "./prisma"

// POST - create user at signup
export async function SignUpActions(formData: FormData) {
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const user = await prisma.user.create({
        data: {
            name: `${firstName} ${lastName}`,
            email,
            password
        }
    })

    // Console logs onto the terminal
    console.log('User created successfully:', user)

    redirect('/signin')
}