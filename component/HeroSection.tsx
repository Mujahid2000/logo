"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Check } from 'lucide-react'
import React from 'react'
import '../app/banner.css'

// Define the component as a functional component with TypeScript
const HeroSection: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <main className="w-full px-2 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                  Lorem ipsum dolor sit amet
                </h1>

                <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
                  Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis. Sed mi rhoncus id
                  habitant. In urna tellus nisl platea morbi libero imperdiet neque. Justo suspendisse tristique posuere
                  quis eget viverra. Nunc euismod ultrices etiam nulla habitasse.
                </p>
              </div>

              {/* Form */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Input placeholder="" className="flex-1 h-12 border-gray-300 bg-white" />
                  <Button className="h-12 px-8 bg-[#1959AC] hover:bg-blue-700 text-white">
                    Submit →
                  </Button>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#1959AC] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-base text-gray-700">No credit card required!</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative h-full lg:h-[900px] w-full">
                <img
                  src="https://res.cloudinary.com/diez3alve/image/upload/v1750362552/20bb68428da0911dc3730323e49cb3517ae897ac_desylc.png"
                  alt="Motorcyclists riding on street"
                  className="w-full lg:h-full lg:object-cover size"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HeroSection