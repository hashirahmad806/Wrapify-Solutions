// import { useState } from "react";

// export  function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="w-full flex justify-between items-center px-6 md:px-10 py-4 bg-white shadow-sm font-[inter-regular-medium]">
      
//       {/* Logo */}
//       <h1 className="text-[22px] md:text-[24px] font-bold text-[#375FA6]">
//         Wrapify Solutions
//       </h1>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex gap-6 text-[#4B5563] text-[18px]">
//         <li className="hover:text-[#375FA6] cursor-pointer">Home</li>
//         <li className="hover:text-[#375FA6] cursor-pointer">About</li>
//         <li className="hover:text-[#375FA6] cursor-pointer">Services</li>
//         <li className="hover:text-[#375FA6] cursor-pointer">How We Empower</li>
//         <li className="hover:text-[#375FA6] cursor-pointer">Contact</li>
//       </ul>

//       {/* Desktop Button */}
//       <button className="hidden md:block bg-[#375FA6] text-white px-4 py-2 rounded-lg hover:bg-[#3760a679]">
//         Get in Touch
//       </button>
//          {/* {  Moble  mode } */}
//       <button
//         className="md:hidden text-3xl text-[#375FA6]"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? "✖" : "☰"}
//       </button>
//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="absolute top-16 left-0 w-full bg-white shadow-md py-6 pl-10 mr-1
//         flex flex-col items-start space-y-2 md:hidden">
//           <a className="hover:text-[#375FA6] text-lg" href="#">Home</a>
//           <a className="hover:text-[#375FA6] text-lg" href="#">About</a>
//           <a className="hover:text-[#375FA6] text-lg" href="#">Services</a>
//           <a className="hover:text-[#375FA6] text-lg" href="#">How We Empower</a>
//           <a className="hover:text-[#375FA6] text-lg" href="#">Contact</a>
//           <button className="bg-[#375FA6] text-white px-4 py-2 rounded-lg hover:bg-[#3760a679]">
//             Get in Touch
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }






import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-[#375FA6] font-semibold"
      : "hover:text-[#375FA6] cursor-pointer";

  return (
    <nav className="w-full flex justify-between items-center px-6 md:px-10 py-4 bg-white shadow-sm font-[inter-regular-medium]">
      
      {/* Logo */}
      <Link
        to="/"
        className="text-[22px] md:text-[24px] font-bold text-[#375FA6]"
      >
        Wrapify Solutions
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-[#4B5563] text-[18px]">
        <NavLink to="/" className={linkClasses}>Home</NavLink>
        <NavLink to="/about" className={linkClasses}>About</NavLink>
        <NavLink to="/services" className={linkClasses}>Services</NavLink>
        <NavLink to="/empower" className={linkClasses}>How We Empower</NavLink>
        <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
      </ul>

      {/* Desktop Button */}
      <Link
        to="/contact"
        className="hidden md:block bg-[#375FA6] text-white px-4 py-2 rounded-lg hover:bg-[#3760a679]"
      >
        Get in Touch
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl text-[#375FA6]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md py-6 pl-10 flex flex-col items-start space-y-2 md:hidden z-50">
          <NavLink to="/" className="hover:text-[#375FA6] text-lg" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" className="hover:text-[#375FA6] text-lg" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/services" className="hover:text-[#375FA6] text-lg" onClick={() => setIsOpen(false)}>Services</NavLink>
          <NavLink to="/empower" className="hover:text-[#375FA6] text-lg" onClick={() => setIsOpen(false)}>How We Empower</NavLink>
          <NavLink to="/contact" className="hover:text-[#375FA6] text-lg" onClick={() => setIsOpen(false)}>Contact</NavLink>
          
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-[#375FA6] text-white px-4 py-2 rounded-lg hover:bg-[#3760a679]"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
}
