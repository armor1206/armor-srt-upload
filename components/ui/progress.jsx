
export function Progress({ value, className }) {
  return (
    <div className={`w-full bg-gray-200 rounded ${className}`}>
      <div
        className="bg-green-500 h-2 rounded"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
