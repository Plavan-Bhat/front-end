import { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import Logo from "../assets/rProcess-logo.webp";

const RecruitmentLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-overlay opacity-20 animate-blob1"></div>
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-indigo-600 rounded-full mix-blend-overlay opacity-20 animate-blob2"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-violet-600 rounded-full mix-blend-overlay opacity-20 animate-blob3"></div>
      </div>

      {/* Glassmorphism login card */}
      <div className="relative w-full max-w-md mx-4 backdrop-blur-xl bg-white/5 rounded-3xl shadow-2xl border border-white/10 overflow-hidden z-10">
        {/* Decorative header */}
        <div className="h-3 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
        
        <div className="p-10">
          {/* Logo section with creative layout */}
          <div className="flex flex-col items-center mb-10">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-md"></div>
              <img 
                src={Logo} 
                alt="RProcess Logo" 
                className="relative z-10 h-16 w-auto object-contain"
              />
            </div>
            <h1 className="mt-6 text-3xl font-bold text-white tracking-tight">
              Recruitment <span className="text-blue-400">Onboarding</span>
            </h1>
            <p className="mt-2 text-sm text-blue-200">Streamline your hiring process</p>
          </div>

          {/* Advanced input fields */}
          <div className="space-y-6">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg opacity-75 blur transition-all duration-200 group-hover:opacity-100"></div>
              <div className="relative flex items-center bg-gray-800 rounded-lg px-4 py-3">
                <FaUser className="text-blue-400 mr-3" />
                <input
                  type="text"
                  className="w-full bg-transparent border-none text-white placeholder-blue-200 focus:ring-0 focus:outline-none"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg opacity-75 blur transition-all duration-200 group-hover:opacity-100"></div>
              <div className="relative flex items-center bg-gray-800 rounded-lg px-4 py-3">
                <FaLock className="text-blue-400 mr-3" />
                <input
                  type="password"
                  className="w-full bg-transparent border-none text-white placeholder-blue-200 focus:ring-0 focus:outline-none"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Animated submit button */}
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 transform-gpu relative overflow-hidden group"
            >
              <span className="relative z-10">Sign In</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>

        {/* Subtle footer */}
        <div className="px-6 py-4 bg-gray-900/50 text-center">
          <p className="text-xs text-blue-300">Secure recruitment portal v2.4</p>
        </div>
      </div>

      {/* Add these animations to your tailwind.config.js */}
      <style jsx global>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, -50px) scale(1.1); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, 50px) scale(0.9); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.05); }
        }
        .animate-blob1 { animation: blob1 15s infinite ease-in-out; }
        .animate-blob2 { animation: blob2 18s infinite ease-in-out; }
        .animate-blob3 { animation: blob3 12s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default RecruitmentLogin;