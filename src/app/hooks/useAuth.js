import { useSession, signIn, signOut } from "next-auth/react";

export const useAuth = () => {
  const { data: session, status } = useSession();

  return {
    session,
    status,
    signIn,
    signOut,
    isAuthenticated: status === "authenticated",
    isLoading: status === "loading"
  };
};
