'use server';

import { signInFormSchema } from '../validator';
import { signIn, signOut } from '@/auth';
import { isRedirectError } from 'next/dist/client/components/redirect-error';

//Sign in the user with credectials
export async function signInWithCreds(prevState: unknown, formData: FormData) {
  try {
    const user = signInFormSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    await signIn('credentials', user);

    return {
      success: true,
      message: 'Signed in succesfully',
    };
  } catch (e) {
    if (isRedirectError(e)) throw error;

    return {
      success: false,
      message: 'Invalid email or password',
    };
  }
}

//Sign user out
export async function signOutUser() {
  await signOut;
}
