import React, { useState } from 'react';
import Logo from "../assets/rProcess-logo.webp";
import LeftIllustration from "../assets/dashboard.svg";
import RightIllustration from "../assets/all-the-data.svg";

const RecruitmentLogin = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ usernameOrEmail, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative overflow-hidden">
      
      {/* Left Illustration - Height increased */}
      <div className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 p-8">
        <img 
           src={LeftIllustration} 
           alt="Recruitment Dashboard" 
          className="w-[320px] h-[500px] object-contain opacity-90"
        />
       </div>

      {/* Right Illustration - Height increased */}
      <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 p-8">
         <img 
           src={RightIllustration} 
           alt="Recruitment Data Visualization" 
           className="w-[320px] h-[500px] object-contain opacity-90"
          />
        </div>

      {/* Logo - moved upward */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-20"> {/* <-- changed from top-24 to top-16 */}
        <img 
          className="h-16 w-auto" 
          src={Logo} 
          alt="Recruitment Process Logo"
        />
      </div>

      {/* Login Card - more gap below logo */}
      <div className="w-full max-w-md mx-auto relative z-10 mt-20"> {/* <-- changed from mt-4 to mt-10 */}
        <div className="bg-white py-8 px-6 shadow-xl rounded-xl sm:px-8 border border-gray-200 min-h-[320px]">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-8">
            Recruitment Onboarding System
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="usernameOrEmail" className="block text-sm font-medium text-gray-700 mb-2">
                Username / Email
              </label>
              <input
                id="usernameOrEmail"
                name="usernameOrEmail"
                type="text"
                autoComplete="username"
                required
                value={usernameOrEmail}
                onChange={(e) => setUsernameOrEmail(e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="username or email@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="••••••••"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentLogin;
