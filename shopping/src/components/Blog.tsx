import { blog } from "../utils";
import { CalendarDays, Clock } from "lucide-react";

const Blog = () => {
  return (
    <section className="px-6 py-12 md:px-12 lg:px-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 font-serif">
      <h1 className="text-[#002366] italic text-3xl md:text-4xl font-bold text-center mb-10">
        Our Blog
      </h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blog.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
          >
            {/* Blog Image */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.autor}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#002366]/80 text-white text-xs px-3 py-1 rounded-full">
                Featured
              </div>
            </div>

            {/* Blog Content */}
            <div className="p-5">
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "{item.desc}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between border-t pt-4 mt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={item.dp}
                    alt={item.autor}
                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                  />
                  <div>
                    <h3 className="text-[#002366] font-semibold text-sm">
                      {item.autor}
                    </h3>
                    <p className="text-gray-400 text-xs flex items-center gap-2">
                      <CalendarDays size={14} /> {item.date}
                    </p>
                  </div>
                </div>

                <span className="text-gray-400 text-xs flex items-center gap-1">
                  <Clock size={14} /> {item.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
