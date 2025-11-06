import { data } from "../../reviews/data.js";

export  function Rewive() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-900">
          What Our <span className="text-[#375FA6]">Clients Say</span>
        </h2>
        <p className="text-gray-600 mt-3">
          Here’s what our clients say about working with Wrapify Solutions.
        </p>

        {/* Reviews Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((rev, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300"
            >
              {/* Client Image */}
              <img
                src={rev.image}
                alt={rev.name}
                className="w-16 h-16 rounded-full mx-auto"
              />

              {/* Review Text */}
              <p className="mt-4 text-gray-600 italic">"{rev.message}"</p>

              {/* Name & Role */}
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {rev.name}
              </h3>
              <p className="text-sm text-gray-500">{rev.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
