import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const signIn = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return {};
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    throw new Error(`Error signing in: ${errorCode} ${errorMessage}`);
  }
};
