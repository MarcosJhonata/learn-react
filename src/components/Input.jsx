export default function Input({ className = '', placeholder, ...props }) {
  return (
    <input
      className={`w-full rounded bg-gray-200 px-3 py-2 outline-none ring-blue-400 transition focus:ring-2 ${className}`}
      placeholder={placeholder}
      {...props}
    />
  );
}
