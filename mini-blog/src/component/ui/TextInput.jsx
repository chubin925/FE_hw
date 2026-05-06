export default function TextInput({ height, value, onChange, placeholder }) {
  return (
    <textarea
      className="text-input"
      style={{ height }}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
