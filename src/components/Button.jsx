function Button({ children, disabled, onClick, type = 'button' }) {
  const base =
    'bg-white dark:text-slate-700 border-2 border-slate-200 dark:border-slate-800 rounded-full py-2 px-6 font-semibold text-md transition-all hover:bg-slate-100';

  return (
    <button disabled={disabled} onClick={onClick} type={type} className={base}>
      {children}
    </button>
  );
}

export default Button;
