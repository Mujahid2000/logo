"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const testimonials = [
  {
    id: 1,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <path d="M30.6667 32L24 45.3333H40L33.3333 58.6667" stroke="#0546D2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M53.3332 46.9525C57.3164 45.3919 61.3332 41.8367 61.3332 34.6663C61.3332 23.9997 52.4444 21.333 47.9998 21.333C47.9998 15.9997 47.9998 5.33301 31.9998 5.33301C15.9998 5.33301 15.9998 15.9997 15.9998 21.333C11.5554 21.333 2.6665 23.9997 2.6665 34.6663C2.6665 41.8367 6.68325 45.3919 10.6665 46.9525" stroke="#0546D2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>,
    text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    user: {
      name: "Jane Cooper",
      avatar: "https://res.cloudinary.com/diez3alve/image/upload/v1750446425/User_Thumb_eqokqf.png",
    },
  },
  {
    id: 2,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <path d="M12.36 38.4403L15.1307 32.5656C15.4864 31.8115 16.5139 31.8115 16.8696 32.5656L19.6403 38.4403L25.8364 39.3883C26.6314 39.5099 26.9482 40.5325 26.3727 41.1195L21.89 45.6891L22.9479 52.1448C23.0838 52.9739 22.2523 53.6059 21.541 53.2144L16.0002 50.1648L10.4593 53.2144C9.748 53.6059 8.91651 52.9739 9.05237 52.1448L10.1103 45.6891L5.62763 41.1195C5.05208 40.5325 5.36893 39.5099 6.16392 39.3883L12.36 38.4403Z" stroke="#155ADA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M44.3599 38.4403L47.1308 32.5656C47.4863 31.8115 48.514 31.8115 48.8695 32.5656L51.6404 38.4403L57.8364 39.3883C58.6313 39.5099 58.9481 40.5325 58.3727 41.1195L53.89 45.6891L54.9479 52.1448C55.0839 52.9739 54.2524 53.6059 53.5409 53.2144L48.0001 50.1648L42.4593 53.2144C41.7479 53.6059 40.9164 52.9739 41.0524 52.1448L42.1103 45.6891L37.6276 41.1195C37.0521 40.5325 37.3689 39.5099 38.1639 39.3883L44.3599 38.4403Z" stroke="#155ADA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M28.3599 14.4404L31.1308 8.56562C31.4863 7.81146 32.514 7.81146 32.8695 8.56562L35.6404 14.4404L41.8364 15.3883C42.6314 15.5099 42.9482 16.5326 42.3727 17.1194L37.89 21.689L38.9479 28.1448C39.0839 28.9739 38.2524 29.6059 37.541 29.2144L32.0002 26.1647L26.4593 29.2144C25.748 29.6059 24.9165 28.9739 25.0524 28.1448L26.1103 21.689L21.6276 17.1194C21.0521 16.5326 21.3689 15.5099 22.1639 15.3883L28.3599 14.4404Z" stroke="#155ADA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>,
    text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    user: {
      name: "Ralph Edwards",
      avatar: "https://res.cloudinary.com/diez3alve/image/upload/v1750446422/User_Thumb_1_fiuxtr.png",
    },
  },
  {
    id: 3,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <path d="M45.3333 58.6663H18.6667C15.7211 58.6663 13.3333 56.2786 13.3333 53.333V29.8175C13.3333 29.5015 13.2398 29.1927 13.0646 28.9298L8.26872 21.7361C8.09349 21.4732 8 21.1644 8 20.8486V6.93301C8 6.04935 8.71635 5.33301 9.6 5.33301H14.4C15.2837 5.33301 16 6.04935 16 6.93301V11.733C16 12.6167 16.7163 13.333 17.6 13.333H25.0667C25.9503 13.333 26.6667 12.6167 26.6667 11.733V6.93301C26.6667 6.04935 27.3829 5.33301 28.2667 5.33301H35.7333C36.6171 5.33301 37.3333 6.04935 37.3333 6.93301V11.733C37.3333 12.6167 38.0496 13.333 38.9333 13.333H46.4C47.2837 13.333 48 12.6167 48 11.733V6.93301C48 6.04935 48.7163 5.33301 49.6 5.33301H54.4C55.2837 5.33301 56 6.04935 56 6.93301V20.8486C56 21.1644 55.9064 21.4732 55.7312 21.7361L50.9355 28.9298C50.7603 29.1927 50.6667 29.5015 50.6667 29.8175V53.333C50.6667 56.2786 48.2789 58.6663 45.3333 58.6663Z" stroke="#155ADA" strokeWidth="1.5"/>
</svg>,
    text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis nunc semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisl, aliquet ante laoreet.",
    user: {
      name: "Courtney Henry",
      avatar: "https://res.cloudinary.com/diez3alve/image/upload/v1750446422/User_Thumb_2_gqicrp.png",
    },
  },
  {
    id: 4,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <path d="M24 5.33301H40" stroke="#155ADA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M32 26.667V37.3337" stroke="#155ADA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M31.9998 58.6667C43.782 58.6667 53.3332 49.1155 53.3332 37.3333C53.3332 25.5513 43.782 16 31.9998 16C20.2178 16 10.6665 25.5513 10.6665 37.3333C10.6665 49.1155 20.2178 58.6667 31.9998 58.6667Z" stroke="#155ADA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>,
    text: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet primis egestas amet habitant tellus ornare. Hendrerit auctor pretium nunc senectus. Mauris eget neque, vitae praesent neque eu.",
    user: {
      name: "Cameron Williamson",
      avatar: "https://res.cloudinary.com/diez3alve/image/upload/v1750446423/User_Thumb_3_apoas5.png",
    },
  },
]

export default function TestimonialSlider() {
  return (
    <section className="bg-[#155ADA] py-16 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="mb-4 text-lg text-[#FFFFFF]">Join other Sun harvesters</p>
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-4xl">LOREM IPSUM DOLOR SIT AMET</h2>
            <p className="text-lg text-blue-100 leading-relaxed">
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue
              fusce nunc, donec magnis commodo.
            </p>
          </div>
          <Button className="bg-white text-[#000000]  hover:bg-gray-100 px-8 py-3 rounded-md font-bold">
            Lorem Ipsum
          </Button>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 3.5,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => {
            //   const IconComponent = testimonial.icon
              return (
                <SwiperSlide key={testimonial.id}>
                  <div className="h-full rounded-2xl bg-white p-8 shadow-lg">
                    {/* Icon */}
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg ">
                      {testimonial.icon}
                    </div>

                    {/* Testimonial Text */}
                    <p className="mb-8 text-gray-700 leading-relaxed">{testimonial.text}</p>

                    {/* User Profile */}
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 overflow-hidden rounded-full">
                        <Image
                          src={testimonial.user.avatar || "/placeholder.svg"}
                          alt={testimonial.user.name}
                          width={40}
                          height={40}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="font-medium text-gray-900">{testimonial.user.name}</p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="swiper-button-prev-custom flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 text-white transition-colors hover:border-white hover:bg-white hover:text-blue-600">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="swiper-button-next-custom flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 text-white transition-colors hover:border-white hover:bg-white hover:text-blue-600">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
