interface TextInputFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: 'text' | 'email' | 'tel';
}

export default function TextInputField({
  id,
  name,
  label,
  placeholder,
  required = false,
  type = 'text',
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
        className="w-full h-11 border border-slate-300 bg-white px-3 text-sm text-primary placeholder:text-slate-400 outline-none focus:border-primary"
      />
    </div>
  );
}
