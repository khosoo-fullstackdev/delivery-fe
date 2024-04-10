import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
} from "react";

interface user {
  id: string;
  name: string;
  email: string;
  address: string;
}

interface UserStateContext {}

const userContext = createContext<UserStateContext>({});

const useUser = () => {
  return useContext(userContext);
};

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <userContext.Provider value={}>{children}</userContext.Provider>;
};
export { UserContextProvider, useUser };
