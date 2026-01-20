import React, { useEffect } from 'react';
import { Home, ArrowLeft, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000
    });
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#030014] flex items-center justify-center px-4 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="text-center relative z-10" data-aos="fade-up">
        {/* 404 Number */}
        <div className="mb-8 relative">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] animate-bounce">
            404
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] mx-auto rounded-full opacity-50 blur-sm"></div>
        </div>

        {/* Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-400 max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-10">
          <div className="w-24 h-24 mx-auto bg-white/5 backdrop-blur-lg rounded-full flex items-center justify-center ring-1 ring-white/10 shadow-xl">
            <AlertCircle className="w-12 h-12 text-[#6366f1]" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleGoBack}
            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
          
          <button
            onClick={handleGoHome}
            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-semibold shadow-lg hover:shadow-[#6366f1]/25 hover:scale-[1.02] transition-all duration-300"
          >
            <Home size={20} />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}