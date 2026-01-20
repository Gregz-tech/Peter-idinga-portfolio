import React, { useState } from "react";

const InputField = ({ field, label, icon: Icon, formData, handleChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  
  // Check if the field has text to keep the label floating
  const hasValue = formData[field] && formData[field].length > 0;
  const isActive = isFocused || hasValue;

  return (
    <div className="relative w-full group mb-4">
      {/* Icon */}
      <div className={`absolute left-4 ${field === "message" ? "top-4" : "top-1/2 -translate-y-1/2"} z-10 transition-colors duration-300 ${isActive ? "text-[#6366f1]" : "text-gray-400"}`}>
        <Icon className="w-5 h-5" />
      </div>

      {/* Input / Textarea */}
      {field === "message" ? (
        <textarea
          id={field}
          name={field}
          value={formData[field]}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-white placeholder-transparent outline-none transition-all duration-300 resize-none h-40
            ${isFocused ? "border-[#6366f1] ring-2 ring-[#6366f1]/20 bg-white/10" : "hover:border-white/30"}
          `}
        />
      ) : (
        <input
          id={field}
          type={field === "email" ? "email" : "text"}
          name={field}
          value={formData[field]}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-white placeholder-transparent outline-none transition-all duration-300
            ${isFocused ? "border-[#6366f1] ring-2 ring-[#6366f1]/20 bg-white/10" : "hover:border-white/30"}
          `}
        />
      )}

      {/* Floating Label */}
      <label
        htmlFor={field}
        className={`
          absolute left-12 transition-all duration-300 pointer-events-none text-gray-400
          ${isActive 
            ? "-top-2.5 left-4 text-xs bg-[#030014] px-2 text-[#6366f1] font-medium" 
            : field === "message" ? "top-4" : "top-1/2 -translate-y-1/2"
          }
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;