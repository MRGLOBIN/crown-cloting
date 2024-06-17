import { createContext, useEffect, useReducer } from "react";
import {
  createUserDocumnetFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      {
        return {
          ...state,
          currentUser: payload,
        };
      }
      deafult: throw new Error(`unhandled type ${type} in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const { currentUser } = state;

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumnetFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unSubscribe;
  });

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
