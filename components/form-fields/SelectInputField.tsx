interface SelectOption {
  value: string;
  label: string;
}

interface SelectInputFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  options: SelectOption[];
}

export default function SelectInputField({
  id,
  name,
  label,
  placeholder,
  required = false,
  options,
}: SelectInputFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 font-accent text-[11px] tracking-widest uppercase text-primary font-semibold"
      >
        {label} {required && '*'}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        defaultValue=""
        className="w-full h-11 border border-slate-300 bg-white px-3 text-sm text-primary outline-none focus:border-primary"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
