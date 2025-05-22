// src/components/EditProfileForm.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import InputField from "./InputField";
import SelectField from "./SelectField";
import Footer from "../Footer/Footer";

const capitalCities = {
  Rwanda: "Kigali",
  Uganda: "Kampala",
  Kenya: "Nairobi",
};

const EditProfileForm = ({ userProfilePic, setUserProfilePic }) => {
  const [selectedImage, setSelectedImage] = useState(userProfilePic);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contact: "",
    country: "Rwanda",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    // Fetch the logged-in user's profile data
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setError("User not authenticated.");
        return;
      }

      try {
        const response = await axios.get("http://localhost:5000/api/user/edit/:userId", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Populate the form with the user's current data
        const { firstName, lastName, email, address, contact, country } = response.data;
        setForm({ firstName, lastName, email, address, contact, country });
      } catch (err) {
        setError("Failed to fetch user profile.");
      }
    };

    fetchUserProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
        setUserProfilePic(reader.result); // Update the profile picture
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const token = localStorage.getItem("authToken");
    if (!token) {
      setError("User not authenticated.");
      return;
    }

    try {
      await axios.put(
        "https://your-api-url.com/user/profile",
        {
          ...form,
          profilePic: selectedImage, // Include the updated profile picture
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccess("Profile updated successfully!");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update profile.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <div className="flex items-center justify-center py-12 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl p-8 w-full max-w-md shadow-2xl"
        >
          <h2 className="text-center text-black text-lg font-semibold mb-4">
            Edit Your Profile
          </h2>

          {error && <div className="text-red-600 text-sm mb-3 text-center">{error}</div>}
          {success && <div className="text-green-600 text-sm mb-3 text-center">{success}</div>}

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 block w-full text-sm text-gray-500"
            />
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Profile"
                className="mt-4 w-20 h-20 rounded-full object-cover"
              />
            )}
          </div>

          <InputField
            label="First Name"
            name="firstName"
            value={form.firstName}
            onChange={handleInputChange}
          />
          <InputField
            label="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={handleInputChange}
          />
          <InputField
            label="Email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
          />
          <InputField
            label="Address"
            name="address"
            value={form.address}
            onChange={handleInputChange}
          />
          <InputField
            label="Contact"
            name="contact"
            value={form.contact}
            onChange={handleInputChange}
          />
          <SelectField
            label="Country"
            name="country"
            value={form.country}
            options={Object.keys(capitalCities)}
            onChange={handleInputChange}
          />

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800"
          >
            Save Changes
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfileForm;