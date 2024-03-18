/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from 'react';
import supabase from '../services/supabase';

const AuthContex = createContext();

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'set_user':
      return {
        ...state,
        user: action.payload,
      };
    case 'set_loading':
      return {
        ...state,
        loading: action.payload,
      };
    case 'set_error':
      return {
        ...state,
        error: action.payload,
      };

    default:
      throw new Error('Unknown Action Type');
  }
};

function AuthProvider({ children }) {
  const [{ user, loading, error }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const signUp = async (username, email, password) => {
    dispatch({ type: 'set_loading', payload: true });
    try {
      let { data: user, error } = await supabase.auth.signUp({
        username,
        email,
        password,
      });

      if (error) {
        dispatch({ type: 'set_loading', payload: false });
        dispatch({ type: 'set_error', payload: error.message });
        throw error;
      }
      dispatch({ type: 'set_user', payload: user });
      dispatch({ type: 'set_loading', payload: false });
      return user;
    } catch (error) {
      console.error('Error signing out:', error.message);
      dispatch({ type: 'set_error', payload: error.message });
      throw error;
    }
  };

  const signIn = async (email, password) => {
    dispatch({ type: 'set_loading', payload: true });
    try {
      let { data: user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        dispatch({ type: 'set_loading', payload: false });
        dispatch({ type: 'set_error', payload: error.message });
        throw error;
      }
      dispatch({ type: 'set_user', payload: user });
      dispatch({ type: 'set_loading', payload: false });
      return user;
    } catch (error) {
      console.error('Error signing out:', error.message);
      dispatch({ type: 'set_error', payload: error.message });
      throw error;
    }
  };

  return (
    <AuthContex.Provider value={{ signUp, signIn, user, loading, error }}>
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

