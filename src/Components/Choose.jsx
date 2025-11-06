   import  {Rewive} from "./ui/Rewive"


 export  function Choose() {
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


