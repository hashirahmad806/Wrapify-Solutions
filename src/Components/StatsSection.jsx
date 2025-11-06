
 export  function StatsSection() {
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