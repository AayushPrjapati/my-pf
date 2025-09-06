import { useState, useEffect } from 'react';

const ContactSection = () => {
  // State to hold all form data as a single object.
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    country: 'IND', // Default country value changed to IND
    phoneNumber: '',
    message: '',
  });

  // State to manage the loading state of the form submission.
  const [loading, setLoading] = useState(false);

  // State to manage the message box display.
  const [message, setMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handler for all input changes.
  // It uses the input's name attribute to dynamically update the corresponding state property.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Asynchronous function to handle form submission.
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null); // Clear previous messages

    // --- Start of Validation Logic ---
    if (!formData.firstName || !formData.email || !formData.phoneNumber) {
      setMessage("Please fill out all mandatory fields: First Name, Email, and Phone Number.");
      setIsSuccess(false);
      return; // Stop submission
    }

    const cleanedPhoneNumber = formData.phoneNumber.replace(/\D/g, '');
    if (cleanedPhoneNumber.length !== 10) {
      setMessage("Please enter a valid 10-digit phone number.");
      setIsSuccess(false);
      return; // Stop submission
    }
    // --- End of Validation Logic ---
    
    setLoading(true);

    // Format data for the Google Apps Script endpoint.
    const dataToSend = {
      "first-name": formData.firstName,
      "last-name": formData.lastName,
      "company": formData.company,
      "email": formData.email,
      "country": formData.country,
      "phone-number": formData.phoneNumber,
      "message": formData.message,
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxTyih-kwcUvnPKzC5EkV6tfKz5fJieef_XYMHAnkysF6Rsa3lipr1VWbtq66_0YeBM/exec", {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script to prevent CORS errors.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      // Set success message state.
      setMessage("Form submitted successfully!");
      setIsSuccess(true);
      // Reset form data after successful submission.
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        country: 'IND',
        phoneNumber: '',
        message: '',
      });

    } catch (error) {
      // Set error message state.
      setMessage("Something went wrong!");
      setIsSuccess(false);
      console.error(error);
    } finally {
      setLoading(false); // Reset the loading state regardless of the outcome.
    }
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 w-full max-w-4xl mx-auto font-sans">
      {/* Header section */}
      <div className="mx-auto max-w-2xl text-left border-b-2 border-gray-200 mb-2 pb-2">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-black sm:text-3xl">Contact Me</h2>
        <p className="mt-1 text-base text-gray-800">✨ “Let’s build something amazing together — feel free to reach out!”</p>
      </div>

      {/* Conditional message box */}
      {message && (
        <div className={`mt-4 mb-4 px-4 py-3 rounded-md text-sm text-center font-medium ${isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message}
        </div>
      )}

      {/* Form element */}
      <form onSubmit={handleSubmit} className="mx-auto mt-4 max-w-xl">
        <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
          {/* First Name field */}
          <div>
            <label htmlFor="firstName" className="block text-sm/6 font-semibold text-black">First name</label>
            <div className="mt-1.5">
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                autoComplete="given-name"
                required // Added required attribute
                className="block w-full rounded-md bg-white px-3.5 py-1.5 text-base text-black outline outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          {/* Last Name field */}
          <div>
            <label htmlFor="lastName" className="block text-sm/6 font-semibold text-black">Last name</label>
            <div className="mt-1.5">
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-1.5 text-base text-black outline outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          {/* Company field */}
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm/6 font-semibold text-black">Company</label>
            <div className="mt-1.5">
              <input
                id="company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-1.5 text-base text-black outline outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          {/* Email field */}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-black">Email</label>
            <div className="mt-1.5">
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required // Added required attribute
                className="block w-full rounded-md bg-white px-3.5 py-1.5 text-base text-black outline outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          {/* Phone number field with country code */}
          <div className="sm:col-span-2">
            <label htmlFor="phoneNumber" className="block text-sm/6 font-semibold text-black">Phone number</label>
            <div className="mt-1.5">
              <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-black/10 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-1.5 pl-3.5 pr-7 text-base text-gray-400 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  >
                    <option>IND</option>
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-black sm:size-4">
                    <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
                  </svg>
                </div>
                <input
                  id="phoneNumber"
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="123-456-7890"
                  required // Added required attribute
                  className="block min-w-0 grow bg-transparent py-1.5 pl-1 pr-3 text-base text-black placeholder:text-gray-500 focus:outline focus:outline-0 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          {/* Message textarea */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-black">Message</label>
            <div className="mt-1.5">
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3.5 py-1.5 text-base text-black outline outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
        </div>
        {/* Submit button */}
        <div className="mt-6">
          <button
            type="submit"
            disabled={loading}
            className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-500 hover:bg-indigo-400 focus-visible:outline-indigo-500"
            }`}
          >
            {loading ? "Sending..." : "Let's talk"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactSection;
