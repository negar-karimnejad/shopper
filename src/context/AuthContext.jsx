import { createContext, useContext, useReducer } from 'react';
import connectDB from '../utils/db';
import { User } from '../../model/User';

const AuthContex = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'getUser':
      return {
        ...state,
        user: action.payload,
      };

    default:
      throw new Error('Unknown Action Type');
  }
};
function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const getUser = async (id) => {
    connectDB();
    try {
      const user = await User.findOne({ id });
      dispatch({ type: 'getUser', payload: user });
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <AuthContex.Provider value={{ getUser, isAuthenticated, user }}>
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
