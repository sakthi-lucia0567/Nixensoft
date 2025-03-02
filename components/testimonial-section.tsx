"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Swiper from "swiper"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const testimonials = [
  {
    rating: 4.5,
    content:
      "Nixensoft transformed our online presence with their expert SEO strategies. Within months, our website ranked on the first page of Google, driving more traffic and increasing our leads. Their team is knowledgeable, transparent, and always delivers results. Highly recommended!",
    author: "Arunkumar ",
    role: "CEO",
    avatar: "https://pagedone.io/asset/uploads/1696229969.png",
  },
  {
    rating: 4.8,
    content: "From start to finish, Nixensoft provided an outstanding web development service. They built a stunning and user-friendly website for our boutique, making online shopping seamless for our customers. Their attention to detail and quick response made the entire process smooth and hassle-free.",
    author: "Priya Ramesh",
    role: "Founder",
    avatar: "https://pagedone.io/asset/uploads/1696229994.png",
  },
  {
    rating: 4.7,
    content: "WhatsApp marketing was a game-changer for our business, thanks to Nixensoft. They helped us reach thousands of customers instantly, boosting our engagement and sales. The automated responses and targeted messaging made customer interaction effortless and effective.",
    author: "Karthik Rajan",
    role: "Marketing Manager",
    avatar: "https://pagedone.io/asset/uploads/1696230027.png",
  },
  {
    rating: 4.5,
    content: "We needed an e-commerce platform that was fast, secure, and easy to manage. Nixensoft delivered exactly that! Our online store is now running smoothly, with a seamless shopping experience for our customers. Their expertise and support made the transition to online sales a breeze.",
    author: "Meena Chandran",
    role: "CEO",
    avatar: "https://pagedone.io/asset/uploads/1696230027.png",
  },
  // Add more testimonials as needed
]

export function TestimonialSection() {
  const swiperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = new Swiper(swiperRef.current, {
        modules: [Pagination, Autoplay],
        slidesPerView: 1,
        spaceBetween: 32,
        loop: true,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 32,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        },
      })

      return () => {
        swiper.destroy()
      }
    }
  }, [])

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-sm text-gray-500 font-medium text-center block mb-2">TESTIMONIAL</span>
          <h2 className="text-4xl text-center font-bold text-gray-900">What our happy user says!</h2>
        </div>
        <div ref={swiperRef} className="swiper mySwiper">
          <div className="swiper-wrapper w-max">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="swiper-slide">
                <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-indigo-600 hover:shadow-sm slide_active:border-indigo-600">
                  <div>
                    <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                      <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="text-base font-semibold text-indigo-600">{testimonial.rating}</span>
                    </div>
                    <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                      {testimonial.content}
                    </p>
                  </div>
                  <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                    <Image
                      className="rounded-full h-10 w-10 object-cover"
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={`${testimonial.author} avatar`}
                      width={40}
                      height={40}
                    />
                    <div className="block">
                      <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">
                        {testimonial.author}
                      </h5>
                      <span className="text-sm leading-4 text-gray-500">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
      <style jsx>{`
        .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
        .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
          width: 16px !important;
          height: 4px !important;
          border-radius: 5px !important;
          margin: 0 6px !important;
        }

        .swiper-pagination {
          bottom: 2px !important;
        }

        .swiper-wrapper {
          height: max-content !important;
          width: max-content !important;
          padding-bottom: 64px;
        }

        .swiper-pagination-bullet-active {
          background: #4F46E5 !important;
        }
        
        .swiper-slide.swiper-slide-active > .slide_active\:border-indigo-600 {
          --tw-border-opacity: 1;
          border-color: rgb(79 70 229 / var(--tw-border-opacity));
        }

        .swiper-slide.swiper-slide-active > .group .slide_active\:text-gray-800 {
          --tw-text-opacity: 1;
          color: rgb(31 41 55 / var(--tw-text-opacity));
        }
      `}</style>
    </section>
  )
}

