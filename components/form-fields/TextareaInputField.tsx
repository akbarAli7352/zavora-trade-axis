interface TextareaInputFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  error?: string;
}

export default function TextareaInputField({
  id,
  name,
  label,
  placeholder,
  required = false,
  rows = 4,
  error,
}: TextareaInputFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 font-accent text-[11px] tracking-widest uppercase text-primary font-semibold"
      >
        {label} {required && '*'}
      </label>
      <textarea
        id={id}
        name={name}
        required={required}
        rows={rows}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        className={`w-full border bg-white px-3 py-3 text-sm text-primary placeholder:text-slate-400 outline-none focus:border-primary resize-y min-h-[120px] ${
          error ? 'border-red-500' : 'border-slate-300'
        }`}
      />
      {error ? <p className="mt-1 text-xs text-red-600">{error}</p> : null}
    </div>
  );
}
