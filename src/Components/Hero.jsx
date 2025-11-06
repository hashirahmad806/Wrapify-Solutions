      import  Rewive from "./Rewive"

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





 function Services() {
  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-inter font-bold text-gray-900">
          Our <span className="text-[#375FA6]">Services</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto font-inter">
          We offer comprehensive digital solutions to help businesses thrive in the modern world.
        </p>
      </div>

      {/* Service Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        
        {/* Card 1 */}
        <div className="p-8 bg-[#FFFFFF] shadow-lg rounded-2xl hover:shadow-2xl transition">
          <div className="w-14 h-14 bg-[#375FA61A] flex items-center justify-center rounded-full mb-4">
            <img src="https://img.icons8.com/ios-filled/50/375FA6/services.png" alt="service" />
          </div>
          <h3 className="text-xl font-semibold font-inter mb-2">Web Development</h3>
          <p className="text-gray-600 font-inter">
            Build responsive, scalable, and modern websites using React, Next.js, and Tailwind.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-8 bg-[#FFFFFF] shadow-lg rounded-2xl hover:shadow-2xl transition">
          <div className="w-14 h-14 bg-[#375FA61A] flex items-center justify-center rounded-full mb-4">
            <img src="https://img.icons8.com/ios-filled/50/375FA6/code.png" alt="service" />
          </div>
          <h3 className="text-xl font-semibold font-inter mb-2">App Development</h3>
          <p className="text-gray-600 font-inter">
            Create cross-platform mobile applications using React Native and Flutter.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-8 bg-[#FFFFFF] shadow-lg rounded-2xl hover:shadow-2xl transition">
          <div className="w-14 h-14 bg-[#375FA61A] flex items-center justify-center rounded-full mb-4">
            <img src="https://img.icons8.com/ios-filled/50/375FA6/online-store.png" alt="service" />
          </div>
          <h3 className="text-xl font-semibold font-inter mb-2">UI/UX Design</h3>
          <p className="text-gray-600 font-inter">
            Craft beautiful, user-friendly interfaces that enhance digital experiences.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-8 bg-[#FFFFFF] shadow-lg rounded-2xl hover:shadow-2xl transition">
          <div className="w-14 h-14 bg-[#375FA61A] flex items-center justify-center rounded-full mb-4">
            <img src="https://img.icons8.com/ios-filled/50/375FA6/online-store.png" alt="service" />
          </div>
          <h3 className="text-xl font-semibold font-inter mb-2">UI/UX Design</h3>
          <p className="text-gray-600 font-inter">
            Craft beautiful, user-friendly interfaces that enhance digital experiences.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-8 bg-[#FFFFFF] shadow-lg rounded-2xl hover:shadow-2xl transition">
          <div className="w-14 h-14 bg-[#375FA61A] flex items-center justify-center rounded-full mb-4">
            <img src="https://img.icons8.com/ios-filled/50/375FA6/online-store.png" alt="service" />
          </div>
          <h3 className="text-xl font-semibold font-inter mb-2">UI/UX Design</h3>
          <p className="text-gray-600 font-inter">
            Craft beautiful, user-friendly interfaces that enhance digital experiences.
          </p>
        </div>



        
      </div>
    </section>
  );

}


function StatsSection() {
  const stats = [
    {
      icon: "https://img.icons8.com/ios-filled/50/375FA6/briefcase.png",
      number: "50+",
      label: "Projects Completed",
    },
    {
      icon: "https://img.icons8.com/ios-filled/50/375FA6/conference-call.png",
      number: "25+",
      label: "Happy Clients",
    },
    {
      icon: "https://img.icons8.com/ios-filled/50/375FA6/code.png",
      number: "10,000+",
      label: "Lines of Code",
    },
    {
      icon: "https://img.icons8.com/ios-filled/50/375FA6/prize.png",
      number: "15+",
      label: "Awards Won",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div
        className="
            max-w-6xl mx-auto 
        px-6 
        grid 
        grid-cols-2       /*  2 cards on mobile */
        sm:grid-cols-2    /* Small screens (same as above) */
        md:grid-cols-3    /*  3 cards on tablet */
        lg:grid-cols-4    /*  4 cards on large screens */
        gap-6 
        text-center
      "
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
          >
            {/* Icon container */}
            <div className="w-16 h-16 bg-[#375FA61A] flex items-center justify-center rounded-full mb-4">
              <img src={stat.icon} alt="icon" className="w-8 h-8" />
            </div>

            {/* Number */}
            <h3 className="text-3xl font-bold text-gray-900">{stat.number}</h3>

            {/* Label */}
            <p className="text-[#4B5563] mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


    


function Choose() {
  return (
    <>
    <section className="py-20 bg-[#FAFAFA]">
      <div className="text-center mb-12">
          <h2 className="text-4xl font-inter font-bold text-gray-900">
            Why Choose
           <span className="text-[#375FA6]"> Wrapify </span>  Solutions ?
        </h2>
        <p className="mt-4 text-[#4B5563] max-w-xl mx-auto font-inter">
          We combine innovation, expertise, and dedication to deliver exceptional results.
        </p>
      </div>

      {/* Service Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        
        {/* Card 1 */}
        <div className="p-8 bg-[#FFFFFF] shadow-lg rounded-2xl hover:shadow-2xl transition">
          <div className="w-14 h-14 bg-[#375FA61A] flex items-center justify-center rounded-full mb-4">
            <img src="https://img.icons8.com/ios-filled/50/375FA6/services.png" alt="service" />
          </div>
          <h3 className="text-xl font-semibold font-inter mb-2">  Proven Track Record</h3>
          <p className="text-[#4B5563] font-inter">
           Years of experience delivering successful projects across diverse industries.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-8 bg-[#FFFFFF] shadow-lg rounded-2xl hover:shadow-2xl transition">
          <div className="w-14 h-14 bg-[#375FA61A] flex items-center justify-center rounded-full mb-4">
            <img src="https://img.icons8.com/ios-filled/50/375FA6/code.png" alt="service" />
          </div>
          <h3 className="text-xl font-semibold font-inter mb-2">Security First</h3>
          <p className="text-gray-600 font-inter">
           Enterprise-grade security and compliance standards to protect your data.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-8 bg-[#FFFFFF] shadow-lg rounded-2xl hover:shadow-2xl transition">
          <div className="w-14 h-14 bg-[#375FA61A] flex items-center justify-center rounded-full mb-4">
            <img src="https://img.icons8.com/ios-filled/50/375FA6/online-store.png" alt="service" />
          </div>
          <h3 className="text-xl font-semibold font-inter mb-2">Fast Delivery</h3>
          <p className="text-gray-600 font-inter">
            Agile methodology ensures quick turnaround without compromising quality.
             </p>
        </div>

        {/* Card 3 */}
        <div className="p-8 bg-[#FFFFFF] shadow-lg rounded-2xl hover:shadow-2xl transition">
          <div className="w-14 h-14 bg-[#375FA61A] flex items-center justify-center rounded-full mb-4">
            <img src="https://img.icons8.com/ios-filled/50/375FA6/online-store.png" alt="service" />
          </div>
          <h3 className="text-xl font-semibold font-inter mb-2">UI/UX Design</h3>
          <p className="text-gray-600 font-[inter]">
            Craft beautiful, user-friendly interfaces that enhance digital experiences.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-8 bg-[#FFFFFF] shadow-lg rounded-2xl hover:shadow-2xl transition">
          <div className="w-14 h-14 bg-[#375FA61A] flex items-center justify-center rounded-full mb-4">
            <img src="https://img.icons8.com/ios-filled/50/375FA6/online-store.png" alt="service" />
          </div>
          <h3 className="text-xl font-semibold font-inter mb-2">UI/UX Design</h3>
          <p className="text-gray-600 font-inter">
            Craft beautiful, user-friendly interfaces that enhance digital experiences.
          </p>
        </div>



        
        </div>
        
        <Rewive />
    </section>
    
    
    </>
  );
 }





export { Hero, Services, StatsSection  , Choose};
