
function Hero() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 py-16 sm:py-20 bg-[#FAFAFA] font-[inter-regular]">
      
      {/* Left Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <p className="text-[18px] sm:text-[20px] font-semibold text-[#375FA6]">
          WELCOME TO WRAPIFY SOLUTIONS
        </p>

        <h1 className="text-[32px] sm:text-[45px] md:text-[55px] lg:text-[60px] font-bold leading-tight">
          We Wrap Ideas into{" "}
          <span className="text-[#375FA6]">Intelligent Digital Solutions</span>
        </h1>

        <p className="mt-4 text-[16px] sm:text-[18px] text-[#4B5563]">
          Welcome to Wrapify Solutions, where creativity meets technology to deliver 
          transformative digital experiences. We specialize in turning complex challenges 
          into seamless, user-friendly, and scalable solutions.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="bg-[#375FA6] text-white px-6 py-3 rounded-lg hover:bg-[#3760a6a6]">
            Explore Services →
          </button>
          <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-[#375FA6] hover:text-white">
            Contact Us
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="mt-10 lg:mt-0 w-full lg:w-1/2 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
          alt="Coding"
          className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[80%] max-w-lg rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
}

export default Hero;



