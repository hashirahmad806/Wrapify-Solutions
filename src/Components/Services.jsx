

   export  function Services() {
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