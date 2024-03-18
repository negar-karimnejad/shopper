import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import { useAuth } from '../context/AuthContext';
import Spinner from '../components/Spinner';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { signIn, user, loading } = useAuth();

  const submitHandler = (e) => {
    e.preventDefault();
    if ((!email, !password)) return;
    signIn(email, password);
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    if (user?.session) return navigate('/');
  }, [navigate, user?.session]);

  if (user?.session) return <Spinner title="Redirecting..." />;
  return (
    <div className="flex items-center justify-center bg-rose-50 py-20 dark:bg-slate-900 ">
      <div className="rounded-md bg-white p-5 py-7 shadow dark:bg-slate-700">
        <h2 className="mb-5 text-3xl">Login</h2>
        <form className="flex flex-col gap-5" onSubmit={submitHandler}>
          <Input
            disabled={loading}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email address"
          />
          <Input
            disabled={loading}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <Button variant="secondaryLessRound" type="submit">
            Countinue
          </Button>
        </form>
        <p className="py-2 text-sm text-slate-600 dark:text-slate-200">
          Create an account?{' '}
          <Link to="/register" className="text-rose-600 dark:text-rose-500">
            Click here
          </Link>
        </p>
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-200">
          <input type="checkbox" id="policy" />
          <label htmlFor="policy">
            By countinuing i agree to the terms of use & privacy policy
          </label>
        </div>
      </div>
    </div>
  );
}

export default Login;
