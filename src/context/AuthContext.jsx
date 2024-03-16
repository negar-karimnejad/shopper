/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from 'react';
import { User } from '../../model/User';

const AuthContex = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        user: action.payload,
      };
case "register":
  return{
    ...state,
    user
  }
    default:
      throw new Error('Unknown Action Type');
  }
};
function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const login = async (id) => {
    try {
      const user = await User.findOne({ id });
      dispatch({ type: 'login', payload: user });
    } catch (error) {
      console.error(error.message);
    }
  };

  const register = async (user) => {
    try {
      await User.create(user);
      dispatch({ type: 'register', payload: user });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <AuthContex.Provider value={{ login, isAuthenticated, user }}>
      {children}
    </AuthContex.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContex);
  if (!context)
    throw new Error('Auth provider uses where that is not provided');
  return context;
}

export { AuthProvider, useAuth };
