import React from 'react';

const ThirdSection = () => {
    return (
        <div>
            <section className="w-full py-20">
        <div className="max-w-7xl mx-auto pl-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-6">
                <h3 className="text-blue-600 text-lg font-medium">Lorem ipsum dolor sit amet</h3>
                <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                  LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo elefend condimentum in vitae
                  faucibus. Amet massa malesuada sit pretium. Donec pharetra erat lacus suspendisse ornare.
                </p>
              </div>

              {/* Feature Items with Arrow Icons */}
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                   <img src='https://res.cloudinary.com/diez3alve/image/upload/v1750419222/Screenshot_2025-06-20_173309-removebg-preview_jnitm8.png'/>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-black">
                      Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis
                      senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec.
                      Ipsum sit ut tortor.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                   <img src='https://res.cloudinary.com/diez3alve/image/upload/v1750419222/Screenshot_2025-06-20_173309-removebg-preview_jnitm8.png'/>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-black">
                      Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis
                      senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec.
                      Ipsum sit ut tortor.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                   <img src='https://res.cloudinary.com/diez3alve/image/upload/v1750419222/Screenshot_2025-06-20_173309-removebg-preview_jnitm8.png'/>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-black">
                      Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis
                      senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec.
                      Ipsum sit ut tortor.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative h-[600px] w-full">
                <img
                  src="https://res.cloudinary.com/diez3alve/image/upload/v1750418972/46db0304b9e3cad81de5ae41e2d4f4d18303be29_vvexn4.png"
                  alt="Two professional businessmen having a conversation"
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
          </div>

          {/* Blue Gradient Bottom */}
          <div className="max-w-full ml-8  h-4 bg-[linear-gradient(90deg,_#043898_0%,_#079902_45.96%,_#170041_91.18%)] mt-16"></div>
        </div>
      </section>
        </div>
    );
};

export default ThirdSection;