// src/components/SelectField.jsx

const capitalCities = {
    Rwanda: "Kigali",
    Uganda: "Kampala",
    Kenya: "Nairobi",
  };
  
  const SelectField = ({ label, value, onChange, name, options }) => (
    <div className="mb-4 w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
  
  export default SelectField;
  