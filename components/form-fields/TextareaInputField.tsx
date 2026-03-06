interface TextareaInputFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}

export default function TextareaInputField({
  id,
  name,
  label,
  placeholder,
  required = false,
  rows = 4,
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
        className="w-full border border-slate-300 bg-white px-3 py-3 text-sm text-primary placeholder:text-slate-400 outline-none focus:border-primary resize-y min-h-[120px]"
      />
    </div>
  );
}
