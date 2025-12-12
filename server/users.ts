"use server";

import { auth } from "@/lib/auth";

export const signIn = async (email: string, password: string) => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
    return { success: true, message: "Signed in successfully" };
  } catch (error) {
    const e = error as Error;
    console.log("Error signing in:", e.message);
    return {
      success: false,
      message: e.message || "Error signing in",
    };
  }
};

export const signUp = async () => {
  await auth.api.signUpEmail({
    body: {
      email: "john@test.com",
      password: "Pass123456",
      name: "John Doe",
    },
  });
};
