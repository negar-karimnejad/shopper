import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import { useAuth } from '../context/AuthContext';
import Spinner from '../components/Spinner';
import toast from 'react-hot-toast';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);

  const navigate = useNavigate();

  const { signIn, user, loading, error } = useAuth();
  console.log(error);
  const submitHandler = (e) => {
    e.preventDefault();
    if ((!email, !password)) return;
    if (!check) {
      toast.error('Accept Privacy Policy checkbox');
      return;
    }

    signIn(email, password);
    if (user) {
      setEmail('');
      setPassword('');
    }
  };
  
  useEffect(() => {
    if (user?.session) return navigate('/');
  }, [navigate, user?.session]);
  console.log(user);
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
            type="email"
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
        <div className="flex gap-2 text-sm text-slate-600 dark:text-slate-200">
          <input
            type="checkbox"
            id="policy"
            onChange={(e) => setCheck(e.target.checked)}
          />
          <label htmlFor="policy">
            By countinuing i agree to the terms of use & privacy policy
          </label>
        </div>
      </div>
    </div>
  );
}

export default Login;
