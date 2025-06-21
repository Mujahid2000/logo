"use client"

import { ArrowRight } from "lucide-react"
import React from "react"

// Define the component as a functional component with TypeScript
const BusinessInfoSection: React.FC = () => {
  return (
    <section className="lg:my-45 py-20 px-4">
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 bg-gray-50 items-start gap-16 lg:grid-cols-2 py-30">
            {/* Left Content */}
            <div className="space-y-8 relative">
              {/* Main Heading */}
              <h2 className="text-4xl font-bold text-[#1959AC] lg:text-5xl leading-tight">
                LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DIGNISSIM TELLUS.
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit laoreet urna sapien quam pulvinar.
                Dolor aliquet est tortor tincidunt ultricies feugiat mauris. Aliquam platea turpis porta nisl felis. Massa
                in facilisis semper libero eget eu quisque bibendum platea. Tortor fames.
              </p>

              {/* CTA Button */}
              <button
                className="bg-[#1959AC] hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-colors"
              >
                Lorem Ipsum
                <ArrowRight className="h-4 w-4" />
              </button>
              <div>
                <img
                  className="hidden lg:absolute z-40 left-7 lg:left-104"
                  src="https://res.cloudinary.com/diez3alve/image/upload/v1750487173/icons8-push-pin-100_1_i4kvqb.png"
                  alt="Push pin icon"
                />
              </div>
              {/* Info Card */}
              <div className="bg-white rounded-lg max-w-md ml-7 p-8 shadow-sm lg:absolute">
                {/* Card Content */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">Lorem ipsum dolor sit</h3>

                  <div className="space-y-4 text-gray-600">
                    <p>Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.</p>

                    <p>
                      Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse
                      fermentum velit. Nibh dolor nunc id tristique sit.
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisi.
                      Ultrices lectus viverra pharetra commodo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div>
              <img
                src="https://res.cloudinary.com/diez3alve/image/upload/v1750481009/Section10-Image_f8a47g.png"
                alt="Business professionals discussing motorcycle services"
                className="max-h-[570px] w-full lg:max-w-[570px] object-cover lg:absolute lg:-mt-45"
              />
            </div>
          </div>
          <div className="max-w-full hidden lg:flex mr-24 h-4 bg-[linear-gradient(90deg,_#043898_0%,_#079902_45.96%,_#170041_91.18%)]"></div>
        </div>
      </div>
    </section>
  )
}

export default BusinessInfoSection