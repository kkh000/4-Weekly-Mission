import { createContext, useContext, useState } from "react";
import { ChildrenProps } from "../types/commonTypes";

export const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: ChildrenProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
