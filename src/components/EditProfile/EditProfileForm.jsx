// src/components/EditProfileForm.jsx

import React, { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import Footer from "../UI/Footer";

const capitalCities = {
  Rwanda: "Kigali",
  Uganda: "Kampala",
  Kenya: "Nairobi",
};

const EditProfileForm = ({ userProfilePic, setUserProfilePic }) => {
    const [selectedImage, setSelectedImage] = useState(userProfilePic);
  const [form, setForm] = useState({
    firstName: "Kaneza",
    lastName: "James",
    email: "jameskane12@gmail.com",
    address: "KK 512 st Kigali, Rwanda",
    contact: "+250780924567",
    city: "Kigali",
    country: "Rwanda",
    password: "sbdfbnd65sfdvb s",
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setUserProfilePic(imageUrl); // ✅ This is where the error was
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setForm((prev) => ({
      ...prev,
      country,
      city: capitalCities[country],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated profile:", form);
    alert("Profile updated successfully!");
  };

  return (
    <div>
    <div className="max-w-2xl mx-auto p-6 mb-20 mt-16  bg-white">
      <h2 className="text-2xl font-semibold text-center mb-6">Edit profile</h2>

      <div className="flex flex-col items-center mb-6">
        <label htmlFor="profile-pic" className="cursor-pointer">
          <div className="h-32 w-32 rounded-full bg-gradient-to-r from-gray-200 to-green-700 flex items-center justify-center overflow-hidden">
            {userProfilePic ? (
              <img src={selectedImage || "https://via.placeholder.com/150"}
              alt="Profile" className="h-full w-full object-cover" />
            ) : (
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-4.553a2 2 0 00-2.828-2.828L12 7.172l-4.553-4.553a2 2 0 10-2.828 2.828L9 10m6 0v10m0 0H9m6 0a3 3 0 006 0M9 20a3 3 0 00-6 0"></path>
              </svg>
            )}
          </div>
          <p className="text-sm text-blue-500 mt-2">Edit Picture or Avatar</p>
        </label>
        <input type="file" id="profile-pic" className="hidden" onChange={handleImageUpload} />
      </div>

      <form onSubmit={handleSubmit}>
        {/* Form fields remain unchanged */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="First Name" name="firstName" value={form.firstName} onChange={handleChange} />
          <InputField label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} />
        </div>

        <InputField label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
        <InputField label="Address" name="address" value={form.address} onChange={handleChange} />
        <InputField label="Contact Number" name="contact" value={form.contact} onChange={handleChange} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectField
            label="Country"
            name="country"
            value={form.country}
            onChange={handleCountryChange}
            options={Object.keys(capitalCities)}
          />
          <SelectField
            label="City"
            name="city"
            value={form.city}
            onChange={handleChange}
            options={[form.city]}
          />
        </div>

        <InputField label="Password" name="password" type="password" value={form.password} onChange={handleChange} />

        <div className="flex justify-end gap-4 mt-6">
          <button type="button" className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
            Cancel
          </button>
          <button type="submit" className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800">
            Save
          </button>
        </div>
      </form>
    </div>
      <Footer />
    </div>
  );
};

export default EditProfileForm;
