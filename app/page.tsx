
'use client'

import './banner.css'
import { Lenis } from "lenis/react"
import HeroSection from "@/component/HeroSection"
import SecondSection from "@/component/SecondSection"
import ThirdSection from "@/component/ThirdSection"
import FourthSection from '@/component/FourthSection'
import SizthSection from '@/component/SizthSection'
import RequestQuoteForm from '@/component/RequestForm'
import MobileAppSection from '@/component/MobileAppSection'
import MotorcycleSections from '@/component/MotorCycleSection'
import TestimonialSlider from '@/component/Testmonial'
import BusinessSection from '@/component/BusinessSelection'
import BusinessInfoSection from '@/component/BusinessInfoSection'
import StorySection from '@/component/StorySection'
import FAQSection from '@/component/FaqSection'

export default function LandingPage() {
  return (
    <Lenis root>
      <div className="min-h-screen bg-white">
     
      <HeroSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>

       <section className="container mx-auto px-6 my-15" style={{ backgroundImage: 'url("https://res.cloudinary.com/diez3alve/image/upload/v1750427772/Bg-Graphic_shp1cf.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div>
    <h1 className="text-xl font-bold text-blue-800">Lorem ipsum dolor sit amet</h1>
    <h1 className="text-3xl font-bold text-gray-800 py-3">LOREM IPSUM dolor sit</h1>
    <p className="text-gray-600 mb-8 max-w-[739px]">
      Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
    </p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a>
        <img className="rounded-t-lg object-cover w-[444px] h-[205px]" src="https://res.cloudinary.com/diez3alve/image/upload/v1750427275/559ee03cfb70e6f3f8ffb94e9404aaa274005ea6_cxuc5g.png" alt="" />
      </a>
      <div className="p-5">
        <a>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.</p>
        <button className="inline-flex items-center px-3 py-2 text-sm font-bold text-center text-blue-500 underline">
          Learn more
        </button>
      </div>
    </div>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a>
        <img className="rounded-t-lg object-cover w-[444px] h-[205px]" src="https://res.cloudinary.com/diez3alve/image/upload/v1750428375/a9b6c33db5adfd0f031f8d8e38d2ee6ee50b92a9_singea.png" alt="" />
      </a>
      <div className="p-5">
        <a>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.</p>
        <button className="inline-flex items-center px-3 py-2 text-sm font-bold text-center text-blue-500 underline">
          Learn more
        </button>
      </div>
    </div>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a>
        <img className="rounded-t-lg object-cover w-[444px] h-[205px]" src="https://res.cloudinary.com/diez3alve/image/upload/v1750428375/c788443fb5012c58242d830b2585155f4ff15967_gdmutr.png" alt="" />
      </a>
      <div className="p-5">
        <a>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.</p>
        <button className="inline-flex items-center px-3 py-2 text-sm font-bold text-center text-blue-500 underline">
          Learn more
        </button>
      </div>
    </div>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a>
        <img className="rounded-t-lg object-cover w-[444px] h-[205px]" src="https://res.cloudinary.com/diez3alve/image/upload/v1750428375/196f973663cdf3ebd39788215780f7c0a0221327_x1ylef.png" alt="" />
      </a>
      <div className="p-5">
        <a>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.</p>
        <button className="inline-flex items-center px-3 py-2 text-sm font-bold text-center text-blue-500 underline">
          Learn more
        </button>
      </div>
    </div>
  </div>
</section>

<SizthSection/>
<RequestQuoteForm/>
<MobileAppSection/>
<MotorcycleSections/>
<TestimonialSlider/>
<BusinessSection/>
<BusinessInfoSection/>
<StorySection/>
<FAQSection/>
    </div>
    </Lenis>
    
  )
}
