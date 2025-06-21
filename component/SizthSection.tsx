import Image from 'next/image';
import React from 'react';

const SizthSection = () => {
    return (
          <div className="relative my-5 max-w-7xl mx-auto overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/diez3alve/image/upload/v1750432190/883e008d2648b6ba1b6808bc95d6eb3d8925e080_j7kj8r.png"
          alt="Music production studio with synthesizers and equipment"
          width={1440}
          height={0}
          className="h-[605px] "
         
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}


      <div className="relative z-10 flex h-[605px] flex-col">
        {/* Header */}
        <header className="flex items-start justify-between p-6 md:p-8">
          {/* Logo */}
          <div className=" bg-white px-6 py-3 shadow-lg">
            <h1 className="text-xl font-bold text-black md:text-2xl">LOGO</h1>
          </div>

          {/* Badge */}
          
        </header>

        {/* Main Content */}
        <main className="flex flex-1 items-center justify-center px-6 md:px-8 -mt-30">
          <div className="max-w-5xl text-center">
            <h2 className="text-3xl uppercase font-bold leading-tight text-white md:text-5xl lg:text-4xl">
              dolor sit amet consectetur. Quis <br /> adipiscing purus egestas aliquam viverra <br /> mi. dolor sit amet consectetur. Quis <br /> adipiscing 
            </h2>
          </div>
        </main>
      </div>

      
    </div>
        

    );
};

export default SizthSection;