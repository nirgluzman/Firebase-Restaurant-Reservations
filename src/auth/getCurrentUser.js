import { auth } from "../firebase";

export const getCurrentUser = () => {
  const user = auth.currentUser;

  if (!user) return null; // No user is signed in

  return {}; // User is signed in
};
