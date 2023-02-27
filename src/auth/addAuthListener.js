import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const addAuthListener = (callback) => {
  const onChange = (user) => {
    if (user) {
      // User is signed in
      callback({});
    } else {
      // User is signed out
      callback(null);
    }
  };
  return onAuthStateChanged(auth, onChange);
};
