import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    throw new Error(`Error while signing out: ${errorCode} ${errorMessage}`);
  }
};
