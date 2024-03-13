function Button({
  children,
  disabled,
  onClick,
  varient = 'primary',
  type = 'button',
}) {
  const base =
    'w-full bg-white dark:text-slate-700 border-2 border-slate-200 dark:border-slate-800 rounded-full py-2 px-6 font-semibold text-md transition-all hover:bg-slate-100 flex items-center justify-center';

  const styles = {
    primary: base + '',
    secondary:
      base +
      ' bg-rose-600 text-white dark:text-white border-none hover:bg-rose-500',
    black: base + ' bg-black text-white border-none hover:bg-black/90',
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={styles[varient]}
    >
      {children}
    </button>
  );
}

export default Button;
