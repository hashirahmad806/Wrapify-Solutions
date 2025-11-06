import { useState } from "react";

export  function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-6 md:px-10 py-4 bg-white shadow-sm font-[inter-regular-medium]">
      
      {/* Logo */}
      <h1 className="text-[22px] md:text-[24px] font-bold text-[#375FA6]">
        Wrapify Solutions
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-[#4B5563] text-[18px]">
        <li className="hover:text-[#375FA6] cursor-pointer">Home</li>
        <li className="hover:text-[#375FA6] cursor-pointer">About</li>
        <li className="hover:text-[#375FA6] cursor-pointer">Services</li>
        <li className="hover:text-[#375FA6] cursor-pointer">How We Empower</li>
        <li className="hover:text-[#375FA6] cursor-pointer">Contact</li>
      </ul>

      {/* Desktop Button */}
      <button className="hidden md:block bg-[#375FA6] text-white px-4 py-2 rounded-lg hover:bg-[#3760a679]">
        Get in Touch
      </button>
         {/* {  Moble  mode } */}
      <button
        className="md:hidden text-3xl text-[#375FA6]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md py-6 pl-10 mr-1
        flex flex-col items-start space-y-2 md:hidden">
          <a className="hover:text-[#375FA6] text-lg" href="#">Home</a>
          <a className="hover:text-[#375FA6] text-lg" href="#">About</a>
          <a className="hover:text-[#375FA6] text-lg" href="#">Services</a>
          <a className="hover:text-[#375FA6] text-lg" href="#">How We Empower</a>
          <a className="hover:text-[#375FA6] text-lg" href="#">Contact</a>
          <button className="bg-[#375FA6] text-white px-4 py-2 rounded-lg hover:bg-[#3760a679]">
            Get in Touch
          </button>
        </div>
      )}
    </nav>
  );
}
