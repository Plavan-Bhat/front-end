import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Graphic Section */}
      <div className="md:w-1/2 bg-indigo-600 flex items-center justify-center p-12">
        <div className="max-w-md">
          <div className="mb-8">
            <svg 
              width="400" 
              height="300" 
              viewBox="0 0 400 300" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="50" y="50" width="300" height="200" rx="20" fill="#818CF8" fillOpacity="0.2"/>
              <rect x="100" y="100" width="200" height="150" rx="20" fill="#6366F1" fillOpacity="0.3"/>
              <circle cx="200" cy="150" r="60" fill="#4F46E5"/>
              <path d="M200 130C207.732 130 214 136.268 214 144C214 151.732 207.732 158 200 158C192.268 158 186 151.732 186 144C186 136.268 192.268 130 200 130Z" fill="white"/>
              <path d="M200 170C203.866 170 207 173.134 207 177C207 180.866 203.866 184 200 184C196.134 184 193 180.866 193 177C193 173.134 196.134 170 200 170Z" fill="white"/>
              <path d="M180 110C180 104.477 184.477 100 190 100H210C215.523 100 220 104.477 220 110V120H180V110Z" fill="#4F46E5"/>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Talent Acquisition Made Simple</h2>
          <p className="text-indigo-100">
            Our platform transforms how you onboard new hires, making the process seamless and efficient.
          </p>
        </div>
      </div>

      {/* Login Form Section */}
      <div className="md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <img 
              className="mx-auto h-16 w-auto" 
              src="./assets/rProcess-logo.webp" 
              alt="Recruitment Process Logo"
            />
            <h1 className="mt-6 text-3xl font-extrabold text-gray-900">
              Welcome Back
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Sign in to your recruitment dashboard
            </p>
          </div>

          <div className="mt-8 border border-gray-200 rounded-xl p-8 shadow-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="your@email.com"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="••••••••"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                  Sign In
                  <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <div className="text-center text-xs text-gray-500">
            Secure login powered by recruitmentOS v2.4
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;