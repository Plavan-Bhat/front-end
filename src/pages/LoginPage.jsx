import React from "react";
import Logo from "../assets/rProcess-logo.webp"; // Your rProcess Logo
import OnboardingIllustration from "../assets/dashboard.svg"; // Placeholder for your new illustration

const LoginPage = () => {
  return (
    // Main container: Full screen, split into two sections on medium screens and up
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 font-sans">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Section: Illustration */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-100 to-indigo-200 p-8 flex items-center justify-center">
          <img
            src={OnboardingIllustration}
            alt="Recruitment Onboarding Illustration"
            className="max-w-full h-auto object-contain" // Adjust size as needed, object-contain ensures it fits
          />
        </div>

        {/* Right Section: Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          
          {/* Logo at the top of the form section */}
          <div className="mb-8 flex justify-center md:justify-start"> {/* Center on small, left on medium+ */}
            <img
              src={Logo}
              alt="rProcess Logo"
              className="h-16 w-auto brightness-105" // Standard size for brand recognition
            />
          </div>

          {/* Titles */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-2 text-center md:text-left">
            Recruitment Onboarding System
          </h1>
          <h2 className="text-xl text-gray-600 font-medium mb-8 text-center md:text-left">
            Login to your account
          </h2>

          <form className="space-y-6">
            {/* Username / Email Input */}
            <div>
              <label htmlFor="username-email" className="block text-sm font-semibold text-gray-700 mb-2">
                Username / Email
              </label>
              <input
                id="username-email"
                type="text"
                placeholder="e.g., your-rmid or email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              Login
            </button>

            {/* Forgot Password Link */}
            <div className="text-center md:text-left mt-4">
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;