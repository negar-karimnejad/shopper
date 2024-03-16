function Input({ type = 'text', name = '', id, placeholder = '', disabled }) {
  if (placeholder === 'promo code') {
    return (
      <input
        className="w-full rounded-sm border bg-slate-100 px-3 text-slate-600 outline-none"
        type={type}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        name={name}
      />
    );
  }
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
