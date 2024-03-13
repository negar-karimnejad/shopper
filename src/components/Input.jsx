function Input({ type = 'text', id, placeholder = '', disabled }) {
  return (
    <input
      className="rounded-md border p-4 text-slate-600 outline-none"
      type={type}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
}

export default Input;
