import { Button } from '@/components/ui/button';
import React from 'react';

const FourthSection = () => {
    return (
       <section className="max-w-7xl mx-auto relative min-h-screen flex items-center justify-center mt-20 -mb-25">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/diez3alve/image/upload/v1750420844/ea79ae114d7fd15769db79e9877aef227ad7fabe_fzi2bo.png"
            alt="Dramatic motorcycle racing scene"
            className="w-full h-[652px] object-cover"
          />
          <div className="absolute  bg-black/50"></div>
        </div>

        {/* Logo in top left */}
        <div className="absolute top-8 left-12 ">
          <div className="bg-white px-6 py-3 text-lg font-bold text-black">LOGO</div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center -mt-60">
          <div className="">
            {/* Main Heading */}
            <h1 className="text-3xl lg:text-4xl font-bold text-white -tight">
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
            </h1>

            {/* First Paragraph with Pink Highlight */}
            <p className="text-lg lg:text-xl text-white -relaxed max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.
            </p>

            {/* Second Paragraph */}
            <p className="text-lg lg:text-xl text-white -relaxed max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper ut
              tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus
              quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus
              vitae leo.
            </p>

            {/* Button */}
            <div className="pt-8">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium">
                Lorem Ipsum →
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
};

export default FourthSection;