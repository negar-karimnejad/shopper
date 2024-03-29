/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useReducer } from 'react';
import toast from 'react-hot-toast';
import { useLocalStorageState } from '../hooks/useLocalStorage';
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

  const [storedUser, setStoredUser] = useLocalStorageState(null, 'user');

  useEffect(() => {
    dispatch({ type: 'set_user', payload: storedUser });
  }, [storedUser]);

  const signUp = async (username, email, password) => {
    dispatch({ type: 'set_loading', payload: true });
    dispatch({ type: 'set_error', payload: null });
    try {
      let { data: user, error } = await supabase.auth.signUp({
        username,
        email,
        password,
      });

      if (error) {
        dispatch({ type: 'set_loading', payload: false });
        dispatch({ type: 'set_error', payload: error.message });
        toast.error(error.message);
        throw error;
      }

      setStoredUser(user);
      dispatch({ type: 'set_user', payload: user });
      dispatch({ type: 'set_loading', payload: false });
      dispatch({ type: 'set_error', payload: null });
      toast.success('You Registered Successfully');
      return user;
    } catch (error) {
      console.error('Error signing up:', error.message);
      dispatch({ type: 'set_error', payload: error.message });
      throw error;
    } finally {
      dispatch({ type: 'set_loading', payload: false });
      dispatch({ type: 'set_error', payload: null });
    }
  };

  const signIn = async (email, password) => {
    dispatch({ type: 'set_loading', payload: true });
    dispatch({ type: 'set_error', payload: null });

    try {
      let { data: user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        dispatch({ type: 'set_loading', payload: false });
        dispatch({ type: 'set_error', payload: error.message });
        toast.error(error.message);
        throw error;
      }
      setStoredUser(user);
      dispatch({ type: 'set_user', payload: user });
      dispatch({ type: 'set_loading', payload: false });
      dispatch({ type: 'set_error', payload: null });
      toast.success('You Logged in Successfully');
      return user;
    } catch (error) {
      console.error('Error signing in:', error.message);
      dispatch({ type: 'set_error', payload: error.message });
      throw error;
    } finally {
      dispatch({ type: 'set_loading', payload: false });
      dispatch({ type: 'set_error', payload: null });
    }
  };

  const signOut = async () => {
    try {
      let { error } = await supabase.auth.signOut();

      if (error) {
        dispatch({ type: 'set_error', payload: error.message });
        throw error;
      }
      setStoredUser(null);
      dispatch({ type: 'set_user', payload: null });
      return;
    } catch (error) {
      console.error('Error signing out:', error.message);
      dispatch({ type: 'set_error', payload: error.message });
      throw error;
    }
  };

  return (
    <AuthContex.Provider
      value={{ signOut, signUp, signIn, user, loading, error }}
    >
      {children}
    </AuthContex.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContex);
  if (!context) throw new Error('useAuth must be used within a AuthProvider');
  return context;
}

export { AuthProvider, useAuth };
