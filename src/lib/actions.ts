'use server'; // <- this marks all the export functions within the file
// as Server Actions
// Any functions included that are not used will automatically be removed
// from the final application bundle.

import { auth } from './auth';
import { headers } from 'next/headers';

// Create user
export const signUp = async (
    email: string,
    password: string,
    name: string,
) => {
    const res = await auth.api.signUpEmail({
        body: {
            email,
            password,
            name,
            callbackURL: '/dashboard',
        },
    });

    return res;
};

// Sign user in
export const signIn = async (email: string, password: string) => {
    const res = await auth.api.signInEmail({
        body: {
            email,
            password,
            callbackURL: '/dashboard',
        },
    });

    return res;
};

// Sign user out
export const signOut = async () => {
    const res = await auth.api.signOut({
        headers: await headers(),
    });

    return res;
};
