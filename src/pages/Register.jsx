import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import Spinner from '../components/Spinner';
import { useAuth } from '../context/AuthContext';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { signUp, user, loading } = useAuth();

  const submitHandler = (e) => {
    e.preventDefault();
    if ((!username, !email, !password)) return;
    signUp(username, email, password);
    setUsername('');
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    if (user?.session) return navigate('/login');
  }, [navigate, user?.session]);

  if (user?.session) return <Spinner title="Redirecting..." />;

  return (
    <div className="flex items-center justify-center bg-rose-50 py-10 dark:bg-slate-900 ">
      <div className="rounded-md bg-white p-5 py-7 shadow dark:bg-slate-700">
        <h2 className="mb-5 text-3xl">Sign Up</h2>
        <form className="flex flex-col gap-5" onSubmit={submitHandler}>
          <Input
            type="text"
            placeholder="Your name"
            disabled={loading}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Email address"
            disabled={loading}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            disabled={loading}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button disabled={loading} variant="secondaryLessRound" type="submit">
            Countinue
          </Button>
        </form>
        <p className="py-2 text-sm text-slate-600 dark:text-slate-200">
          Already have an account?{' '}
          <Link to="/login" className="text-rose-600 dark:text-rose-500">
            Login here
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

export default Register;
