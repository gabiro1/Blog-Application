// src/components/InputField.jsx

const InputField = ({ label, name, type = "text", value, onChange }) => (
    <div className="mb-4 w-full">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
  
  export default InputField;
  