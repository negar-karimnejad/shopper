import Input from '../components/Input';
import Button from '../components/Button';

function Login() {
  return (
    <div className="flex items-center justify-center bg-rose-50 py-20 dark:bg-slate-900 ">
      <div className="rounded-md bg-white p-5 py-7 shadow dark:bg-slate-700">
        <h2 className="mb-5 text-3xl">Login</h2>
        <form className="flex flex-col gap-5">
          <Input type="text" placeholder="Email address" />
          <Input type="password" placeholder="Password" />
          <Button variant="secondaryLessRound">Countinue</Button>
        </form>
        <p className="py-2 text-sm text-slate-600 dark:text-slate-200">
          Create an account?{' '}
          <span className="text-rose-600 dark:text-rose-500">Click here</span>
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
