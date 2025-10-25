import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Apple from "next-auth/providers/apple"
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from "@/app/generated/prisma"

const prisma = new PrismaClient()
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    session: {
        strategy: "jwt",
    },
    adapter: PrismaAdapter(prisma), // Ignore error message, still works fine.
    providers: [Google, Apple],
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.id = user.id
                token.name = user.name
            }

            return token;
        },
        async session({session, token}) {
            if (session.user) {
                session.user.id = token.id as string
                session.user.name = token.name as string
            }

            return session;
        }
    }
})