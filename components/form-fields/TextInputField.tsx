interface TextInputFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: 'text' | 'email' | 'tel';
  error?: string;
}

export default function TextInputField({
  id,
  name,
  label,
  placeholder,
  required = false,
  type = 'text',
  error,
}: TextInputFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 font-accent text-[11px] tracking-widest uppercase text-primary font-semibold"
      >
        {label} {required && '*'}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        className={`w-full h-11 border bg-white px-3 text-sm text-primary placeholder:text-slate-400 outline-none focus:border-primary ${
          error ? 'border-red-500' : 'border-slate-300'
        }`}
      />
      {error ? <p className="mt-1 text-xs text-red-600">{error}</p> : null}
    </div>
  );
}
