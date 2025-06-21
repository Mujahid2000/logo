"use client"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, EffectFade } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
interface Story {
  id: number
  title: string
  description: string
  image: string
  ctaText: string
}
const stories: Story[] = [
  {
    id: 1,
    title: "Artist & Investor",
    description:
      "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...",
    image: "https://res.cloudinary.com/diez3alve/image/upload/v1750487390/Section11-Image_drc6rm.png",
    ctaText: "Read Full Story",
  },
  {
    id: 2,
    title: "Adventure Seeker",
    description:
      "Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper. Egestas congue mattis ut placerat vitae amet suspendisse fermentum velit ...",
    image: "https://res.cloudinary.com/diez3alve/image/upload/v1750487827/everest-group-752x564_k2dflk.jpg",
    ctaText: "Read Full Story",
  },
  {
    id: 3,
    title: "Business Owner",
    description:
      "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore. Dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris ...",
    image: "https://res.cloudinary.com/diez3alve/image/upload/v1750488247/sga_4-970x500_cermtj.jpg",
    ctaText: "Read Full Story",
  },
  {
    id: 4,
    title: "Travel Enthusiast",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam eaque ipsa quae ab illo inventore ...",
    image: "https://res.cloudinary.com/diez3alve/image/upload/v1750488292/outdoorclubpic1_iecy3p.jpg",
    ctaText: "Read Full Story",
  },
  {
    id: 5,
    title: "Tech Innovator",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias ...",
    image: "https://res.cloudinary.com/diez3alve/image/upload/v1750488367/istockphoto-2094337676-612x612_m1krhb.jpg",
    ctaText: "Read Full Story",
  },
]
const StorySection: React.FC = () => {
  // Removed unused activeStory state

  return (
    <section className="bg-white py-20 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-6 lg:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            LOREM IPSUM DOLOR SIT AMET
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla
            aliquam ultricies. Malesuada ut aliquam at ac est nisl, interdum etiam dignissim. Sed ut vestibulum eget
            purus ornare. Risus elit et fringilla habitant ut facilisi.
          </motion.p>
        </motion.div>

        {/* Story Slider */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{
              el: ".story-swiper-pagination",
              clickable: true,
              bulletClass: "story-swiper-bullet",
              bulletActiveClass: "story-swiper-bullet-active",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            // Removed unused setActiveStory
            onSlideChange={() => {}}
            className="story-swiper"
          >
            {stories.map((story) => (
              <SwiperSlide key={story.id}>
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                  {/* Left Image */}
                  <motion.div
                    className="order-2 lg:order-1"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt="Group of motorcyclists celebrating in mountain landscape"
                        width={600}
                        height={400}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Right Content Card */}
                  <motion.div
                    className="order-1 lg:order-2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <motion.div
                      className="bg-gray-50 rounded-2xl p-8 lg:p-12"
                      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.h3
                        className="text-2xl font-semibold text-gray-700 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {story.title}
                      </motion.h3>
                      <motion.p
                        className="text-lg text-gray-600 leading-relaxed mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {story.description}
                      </motion.p>
                      <motion.a
                        href="#"
                        className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ x: 5 }}
                      >
                        {story.ctaText}
                        <ArrowRight className="h-4 w-4" />
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination - Centered */}
          <div className="flex justify-center items-center mt-12">
            <div className="story-swiper-pagination flex gap-3 justify-center"></div>
          </div>
        </motion.div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .story-swiper-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 1;
        }
        
        .story-swiper-bullet:hover {
          background: #9ca3af;
          transform: scale(1.1);
          
        }
        
        .story-swiper-bullet-active {
          background: #2563eb;
          transform: scale(1.3);
          width: 48px;
          height: 12px;
          border-radius: 10px
        }
        
        .story-swiper .swiper-slide {
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        
        .story-swiper .swiper-slide-active {
          opacity: 1;
        }
      `}</style>
    </section>
  )
}
export default StorySection