export default function Input({ label, name, type = "text", placeholder, value, onChange }) {
  return (
    <div>
      <label className="label">{label}</label>
      <input className="input"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
