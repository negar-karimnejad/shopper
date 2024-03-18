function Button({
  children,
  disabled,
  onClick,
  variant = 'primary',
  type = 'button',
}) {
  const base =
    'disabled:opacity-50 w-full bg-white dark:text-slate-700 border-2 border-slate-200 dark:border-slate-800 rounded-full py-2 px-6 text-md transition-all hover:bg-slate-100 flex items-center justify-center';

  const styles = {
    primary: base,
    secondary:
      'disabled:opacity-50 w-full text-md hover:bg-rose-500 flex items-center justify-center rounded-full border-none bg-rose-600 px-6 py-2 text-white transition-all',
    secondaryLessRound:
      'disabled:opacity-50 w-full text-md hover:bg-rose-500 flex items-center justify-center rounded-md border-none bg-rose-600 px-6 py-3 text-white transition-all',
    black:
      'disabled:opacity-50 w-full rounded-full py-3 px-7 text-md transition-all bg-black text-white hover:bg-black/90',
    blackLessRound:
      'disabled:opacity-50 w-full rounded-sm py-3 px-7 text-md transition-all bg-black text-white hover:bg-black/90',
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={styles[variant]}
    >
      {children}
    </button>
  );
}

export default Button;
