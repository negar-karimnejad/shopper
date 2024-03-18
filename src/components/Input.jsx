function Input({
  value,
  onChange,
  type = 'text',
  name = '',
  id,
  placeholder = '',
  disabled,
}) {
  if (placeholder === 'promo code') {
    return (
      <input
        className="w-full rounded-sm border bg-slate-100 px-3 text-slate-600 outline-none disabled:opacity-50"
        type={type}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    );
  }
  return (
    <input
      className="rounded-md border p-4 text-slate-600 outline-none disabled:opacity-50"
      type={type}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
      required
    />
  );
}

export default Input;
