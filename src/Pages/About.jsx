import React, { useEffect, memo, useMemo } from "react"
import { FileText, Code, Cpu, Globe, ArrowRight, Sparkles } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = memo(() => (
  <div className="flex flex-col items-center justify-center w-full text-center" data-aos="fade-down">
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
      <Sparkles className="w-4 h-4" />
      <span className="text-sm font-medium">About Me</span>
    </div>
    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
      Health Informatics & Web Tech
    </h2>
    <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
      Merging healthcare knowledge with modern software engineering to build impactful digital solutions.
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-center items-center group relative">
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-2xl transition-all duration-500 group-hover:border-blue-500/50 group-hover:scale-[1.02]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-cyan-900/40 z-10 group-hover:opacity-0 transition-opacity duration-500" />
      <img
        src="/Photo.jpg"
        alt="Profile"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
    {/* Blue Glow Effect */}
    <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500 -z-10" />
  </div>
));

const About = () => {
  useEffect(() => {
    AOS.init({ once: true, offset: 50, duration: 1000 });
  }, []);

  const stats = useMemo(() => [
    { label: "Projects", value: "10+", color: "text-blue-400" },
    { label: "Experience", value: "2+ Years", color: "text-cyan-400" },
    { label: "Certificates", value: "5+", color: "text-teal-400" },
  ], []);

  return (
    <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0" id="About">
      <Header />

      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 mt-16">
        <div data-aos="fade-right" className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <ProfileImage />
        </div>

        <div data-aos="fade-left" className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
              <Code className="w-6 h-6 text-blue-400" />
              Technical Background
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I specialize in building responsive web applications using 
              <span className="text-blue-300 font-medium"> React</span>, 
              <span className="text-blue-300 font-medium"> Node.js</span>, and 
              <span className="text-blue-300 font-medium"> Tailwind CSS</span>. 
              My background in Health Informatics allows me to design systems that are not only functional but also secure and user-centric.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center">
                <h4 className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</h4>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <button className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105 active:scale-95">
            <FileText className="w-5 h-5" />
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;