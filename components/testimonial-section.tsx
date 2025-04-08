// "use client";

// import { useEffect, useRef } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import { motion } from "motion/react";

// const testimonials = [
//   {
//     rating: 4.5,
//     content:
//       "Nixensoft transformed our online presence with their expert SEO strategies. Within months, our website ranked on the first page of Google...",
//     author: "Arunkumar",
//     role: "CEO",
//     avatar: "https://pagedone.io/asset/uploads/1696229969.png",
//   },
//   {
//     rating: 4.5,
//     content:
//       "Nixensoft transformed our online presence with their expert SEO strategies. Within months, our website ranked on the first page of Google...",
//     author: "Arunkumar",
//     role: "CEO",
//     avatar: "https://pagedone.io/asset/uploads/1696229969.png",
//   },
//   {
//     rating: 4.5,
//     content:
//       "Nixensoft transformed our online presence with their expert SEO strategies. Within months, our website ranked on the first page of Google...",
//     author: "Arunkumar",
//     role: "CEO",
//     avatar: "https://pagedone.io/asset/uploads/1696229969.png",
//   },
//   {
//     rating: 4.8,
//     content:
//       "From start to finish, Nixensoft provided an outstanding web development service. They built a stunning and user-friendly website...",
//     author: "Priya Ramesh",
//     role: "Founder",
//     avatar: "https://pagedone.io/asset/uploads/1696229994.png",
//   },
//   {
//     rating: 4.7,
//     content:
//       "WhatsApp marketing was a game-changer for our business, thanks to Nixensoft. They helped us reach thousands of customers instantly...",
//     author: "Karthik Rajan",
//     role: "Marketing Manager",
//     avatar: "https://pagedone.io/asset/uploads/1696230027.png",
//   },
// ];

// export function TestimonialSection() {
//   return (
//     <section className="py-24">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mb-16 text-center"
//         >
//           <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
//             TESTIMONIALS
//           </span>
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             What Our Clients Say
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Don't just take our word for it. Here's what our clients have to say
//             about our services.
//           </p>
//         </motion.div>

//         <Swiper
//           modules={[Pagination, Autoplay]}
//           slidesPerView={1}
//           spaceBetween={32}
//           loop={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           pagination={{ clickable: true }}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {testimonials.map((testimonial, index) => (
//             <SwiperSlide key={index}>
//               <div className="group bg-white border border-gray-300 rounded-xl p-6 transition-all duration-500 hover:border-indigo-600 hover:shadow-sm">
//                 <div className="flex items-center mb-7 gap-2 text-amber-500">
//                   ⭐{" "}
//                   <span className="text-base font-semibold text-indigo-600">
//                     {testimonial.rating}
//                   </span>
//                 </div>
//                 <p className="text-base text-gray-600 leading-6 pb-8">
//                   {testimonial.content}
//                 </p>
//                 <div className="flex items-center gap-5 border-t border-gray-200 pt-5">
//                   <Image
//                     className="rounded-full h-10 w-10 object-cover"
//                     src={testimonial.avatar || "/placeholder.svg"}
//                     alt={`${testimonial.author} avatar`}
//                     width={40}
//                     height={40}
//                   />
//                   <div>
//                     <h5 className="text-gray-900 font-medium mb-1">
//                       {testimonial.author}
//                     </h5>
//                     <span className="text-sm text-gray-500">
//                       {testimonial.role}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "motion/react";

const testimonials = [
  {
    id: "testimonial-1",
    rating: 4.5,
    content:
      "Nixensoft transformed our online presence with their expert SEO strategies. Within months, our website ranked on the first page of Google...",
    author: "Arunkumar",
    role: "CEO",
    avatar: "https://pagedone.io/asset/uploads/1696229969.png",
  },
  {
    id: "testimonial-2",
    rating: 4.5,
    content:
      "Their team is super responsive and talented. They gave us a tailored plan and executed it flawlessly...",
    author: "Sathya Narayanan",
    role: "Product Manager",
    avatar: "https://pagedone.io/asset/uploads/1696229969.png",
  },
  {
    id: "testimonial-3",
    rating: 4.5,
    content:
      "Thanks to Nixensoft, we have a smooth and modern website that clients love. Highly recommend them for any digital project...",
    author: "Lakshmi",
    role: "CTO",
    avatar: "https://pagedone.io/asset/uploads/1696229969.png",
  },
  {
    id: "testimonial-4",
    rating: 4.8,
    content:
      "From start to finish, Nixensoft provided an outstanding web development service. They built a stunning and user-friendly website...",
    author: "Priya Ramesh",
    role: "Founder",
    avatar: "https://pagedone.io/asset/uploads/1696229994.png",
  },
  {
    id: "testimonial-5",
    rating: 4.7,
    content:
      "WhatsApp marketing was a game-changer for our business, thanks to Nixensoft. They helped us reach thousands of customers instantly...",
    author: "Karthik Rajan",
    role: "Marketing Manager",
    avatar: "https://pagedone.io/asset/uploads/1696230027.png",
  },
];

export function TestimonialSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about our services.
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={32}
          loop={true}
          autoplay={{
            delay: 200,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div
                id={testimonial.id}
                className="group bg-white border border-gray-300 rounded-xl p-6 transition-all duration-500 hover:border-indigo-600 hover:shadow-sm"
              >
                <div className="flex items-center mb-7 gap-2 text-amber-500">
                  ⭐{" "}
                  <span className="text-base font-semibold text-indigo-600">
                    {testimonial.rating}
                  </span>
                </div>
                <p className="text-base text-gray-600 leading-6 pb-8">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-5 border-t border-gray-200 pt-5">
                  <Image
                    className="rounded-full h-10 w-10 object-cover"
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={`${testimonial.author} avatar`}
                    width={40}
                    height={40}
                  />
                  <div>
                    <h5 className="text-gray-900 font-medium mb-1">
                      {testimonial.author}
                    </h5>
                    <span className="text-sm text-gray-500">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
