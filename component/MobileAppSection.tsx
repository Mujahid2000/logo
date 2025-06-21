import Image from "next/image"

export default function MobileAppSection() {
  return (
    <section className="bg-[#F3F3F3] my-5 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Subtitle */}
            <p className="text-lg font-medium text-[#1959AC]">Lorem Ipsum</p>

            {/* Main Heading */}
            <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">Lorem Ipsum Dolor Sit Amet</h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna
              lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              {/* Google Play Button */}
              <img src="https://res.cloudinary.com/diez3alve/image/upload/v1750439662/Google_Play_Store_badge_EN.svg_1_yjmtqt.png" alt="" />
              <img src="https://res.cloudinary.com/diez3alve/image/upload/v1750439661/Download_on_the_App_Store_Badge.svg_1_yoo731.png" alt="" />
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/diez3alve/image/upload/v1750439373/hand-removebg-preview_q4u4ot.png"
                alt="Hand holding smartphone"
                width={400}
                height={600}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
