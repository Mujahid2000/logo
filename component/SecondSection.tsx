import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import React from 'react';

const SecondSection = () => {
    return (
        <div>
            {/* Second Section - Pixel Perfect */}
      <section className="w-full  py-16">
        <div className="max-w-7xl  mx-auto ">
          <div className="pr-7  my-element">
          <div className="bg-white  overflow-hidden ">
            <div className="grid lg:grid-cols-2">
              {/* Left Content */}
              <div className="p-12 lg:p-6">
                <div className="space-y-8">
                  {/* Header */}
                  <div className="space-y-4">
                    <h3 className="text-blue-600 text-lg font-medium">Lorem ipsum dolor sit</h3>
                    <h2 className="text-4xl font-bold text-black leading-tight">
                      LOREM IPSUM
                      <br />
                      DOLOR SIT AMET
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-base">
                      Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut
                      aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus
                      at purus lectus.
                    </p>
                  </div>

                  {/* Feature Items */}
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <img
                        src="https://res.cloudinary.com/diez3alve/image/upload/v1750401887/d3372177734f2dcf637f191448eb3e51a251d39c_tmpdhs.png"
                        alt="Feature 1"
                        className="w-20 h-20 object-cover  flex-shrink-0"
                      />
                      <div className="pt-1">
                        <p className="text-gray-600 text-base leading-relaxed">
                          Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <img
                        src="https://res.cloudinary.com/diez3alve/image/upload/v1750401886/63cf60a3e6ca843a925082154071064c58e4ea33_qgd5ia.png"
                        alt="Feature 2"
                        className="w-20 h-20 object-cover  flex-shrink-0"
                      />
                      <div className="pt-1">
                        <p className="text-gray-600 text-base leading-relaxed">
                          Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui
                          cursus. Venenatis.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <img
                        src="https://res.cloudinary.com/diez3alve/image/upload/v1750401887/4c9aafdb9b19baf38f45b8f8aea652c167545432_fv4z8g.png"
                        alt="Feature 3"
                        className="w-20 h-20 object-cover  flex-shrink-0"
                      />
                      <div className="pt-1">
                        <p className="text-gray-600 text-base leading-relaxed">
                          Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim.
                          Ut diam auctor tortor tincidunt.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-6 pt-4">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium">
                      Lorem ipsum →
                    </Button>
                    <div className="flex items-center gap-2 text-blue-600">
                      <Phone className="w-5 h-5" />
                      <span className="font-medium">123456789</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative py-7">
                <img
                  src="https://res.cloudinary.com/diez3alve/image/upload/v1750401886/3f330e7e2503a18db023ca88d2372ec66ab52634_pbxche.png"
                  alt="Motorcycle showroom with colorful sport bikes"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Blue Gradient Bottom */}
             <div className="h-[20px] hidden lg:flex bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041] mt-8"></div>
          </div>
          </div>
          {/* Card Container */}
        </div>
      </section>
        </div>
    );
};

export default SecondSection;