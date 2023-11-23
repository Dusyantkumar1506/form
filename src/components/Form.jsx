import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaListUl } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Map from "../assets/Rectangle.png";

const Form = () => {
  const [formData, setFormData] = useState({
    leadName: "",
    email: "",
    phoneNumber: "",
    address: "",
    saleValue: "",
    date: new Date(),
    time: "12:00",
    options: ["Option 1", "Option 2", "Option 3"],
    products: ["Product 1", "Product 2", "Product 3"],
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "options" || name === "products") {
      const selectedValues = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      setFormData({
        ...formData,
        [name]: selectedValues,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({
      leadName: "",
      email: "",
      phoneNumber: "",
      address: "",
      saleValue: "",
      date: new Date(),
      time: "",
      options: ["Option 1", "Option 2", "Option 3"],
      products: ["Product 1", "Product 2", "Product 3"],
      note: "",
    });
  };

  return (
    <div className="w-full h-full mt-8 px-1">
      <div className=" flex items-center justify-between">
        <h1 className=" text-lg sm:text-2xl font-bold">Add new lead form</h1>
        <button className=" w-[90px] h-[40px] sm:w-[114px] sm:h-[52px] text-center text-[#DF3737] text-lg border border-gray-400  rounded-lg">
          Cancel
        </button>
      </div>
      {/* form is herw */}
      <div className="w-full mx-auto mt-20 p-6 rounded-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-[#000000] text-sm font-bold mb-2 px-3">
              Lead Name
            </label>
            <div className="relative">
              <input
                type="text"
                name="leadName"
                value={formData.leadName}
                onChange={handleChange}
                placeholder="Enter lead name"
                className="w-full border rounded-md py-4 px-10 focus:outline-blue-300"
                required
              />
              <FaUser className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#3FAEFD]" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-[#000000] text-sm font-bold mb-2 px-3 ">
              Email ID
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Example@anyemail.com"
                className="w-full border rounded-md py-4 px-10 focus:outline-blue-300"
                required
              />
              <FaEnvelope className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#3FAEFD]" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-[#000000] text-sm font-bold mb-2 px-3">
              Phone Number
            </label>
            <div className="relative">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+91 8800688763"
                className="w-full border rounded-md py-4 px-10 focus:outline-blue-300"
                required
              />
              <FaPhoneAlt className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#3FAEFD]" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-[#000000] text-sm font-bold mb-2 px-3">
              Address
            </label>
            <div className="relative">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Gugurgram, India"
                className="w-full border rounded-md py-4 px-10 focus:outline-blue-300"
                required
              />
              <BsGlobe className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#3FAEFD]" />
            </div>
          </div>
          <div className="mb-4">
            <img src={Map} className="w-full h-[220px]" alt="map" />
          </div>

          <div className="mb-4">
            <label className="block text-[#000000] text-sm font-bold mb-2 px-3">
              Sale Value
            </label>
            <div className="relative">
              <input
                type="number"
                name="saleValue"
                value={formData.saleValue}
                onChange={handleChange}
                placeholder="50,00,000"
                className="w-full border rounded-md py-4 px-10 focus:outline-blue-300"
                required
              />
              <FaIndianRupeeSign className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#3FAEFD]" />
            </div>
          </div>

          <div className="mb-4 ">
            <label className="block text-[#000000] text-sm font-bold mb-2 px-3">
              Date
            </label>
            <div className="relative">
              <DatePicker
                selected={formData.date}
                onChange={handleDateChange}
                className=" w-full border rounded-md py-4 px-10 focus:outline-blue-300"
              />
              <SlCalender className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#3FAEFD]" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-[#000000] text-sm font-bold mb-2 px-3">
              Time
            </label>
            <div className="relative">
              <input
                type="text"
                name="time"
                onChange={handleChange}
                value={formData.time}
                maxLength="2"
                className="w-full rounded-md py-4 px-10 focus:outline-blue-300"
              />
              <IoMdTime className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#3FAEFD]" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-[#000000] text-sm font-bold mb-2 px-3">
              Options
            </label>
            <div className="relative">
              <select
                name="options"
                value={formData.options}
                onChange={handleChange}
                className="w-full border rounded-md py-4 px-10 focus:outline-blue-300"
              >
                {formData.options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <FaListUl className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#3FAEFD]" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-[#000000] text-sm font-bold mb-2 px-3">
              Products
            </label>
            <div className="relative">
              <select
                name="products"
                value={formData.products}
                onChange={handleChange}
                className="w-full border rounded-md py-4 px-10 focus:outline-blue-300"
              >
                {formData.products.map((product, index) => (
                  <option key={index} value={product}>
                    {product}
                  </option>
                ))}
              </select>
              <FaListUl className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#3FAEFD]" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-[#000000] text-sm font-bold mb-2 px-3">
              Note
            </label>

            <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
              placeholder="Enter note"
              className="w-full border rounded-md py-4 px-10 focus:outline-blue-300"
            />
          </div>

          <button
            type="submit"
            className="bg-[#3A4B86] mt-32 text-2xl font-bold text-white w-full py-5 px-4 rounded-md "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
