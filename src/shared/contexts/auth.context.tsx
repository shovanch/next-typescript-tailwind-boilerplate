// REFERENCE
// https://github.com/ivandotv/nextjs-client-signin-logic/blob/ac1a6a5ba0/src/components/AuthProvider.tsx
// https://github.com/ivandotv/nextjs-client-signin-logic/

import { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";

import { fetchAuthUser } from "@/shared/services";

type AppContextValue = {
  isAuthenticated: boolean;
  user: unknown;
  isLoading: boolean;
};

const AuthContext = createContext<AppContextValue | undefined>(undefined);

type AuthProviderProps = {
  children: React.ReactNode;
};

/**
 * Calls user api-endpoint on first-load,to check for if user is authenticated, and stores
 */

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadAuthUser() {
      try {
        const res = await fetchAuthUser();

        if (res) {
          setUser(res?.data);
        }
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    }
    loadAuthUser();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * useAuth hook to access context value from authProvider easily
 */
export const useAuth = (): AppContextValue => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthUserProvider`);
  }

  return context;
};

/**
 * Shows laoding state while backend authcheck call is being done,
 * redirects accordingly if user not authenticated
 */
export const AuthGuard = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const router = useRouter();

  const { isAuthenticated, isLoading } = useAuth();

  // If loading done and not authenticated user, redirect to login
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [router, isLoading, isAuthenticated]);

  // show loading indicator while the auth provider is still initializing
  if (isLoading) {
    return <h1>LOADING..........</h1>;
  }

  // if auth initialized with a valid user show protected page
  if (!isLoading && isAuthenticated) {
    return <>{children}</>;
  }

  // Otherwise don't return anything, will do a redirect from useEffect
  return null;
};
