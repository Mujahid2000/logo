"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

type TabKey = "research" | "plan" | "design";

export default function BusinessSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("research")

  const tabsData: Record<TabKey, {
    title: string;
    description: string;
    ctaText: string;
    image: string;
  }> = {
    research: {
      title: "Research & Analysis",
      description:
        "Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.",
      ctaText: "Check tools",
      image: "/placeholder.svg?height=400&width=600",
    },
    plan: {
      title: "Strategic Planning",
      description:
        "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore. Dolore magna aliqua enim ad minim veniam quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.",
      ctaText: "View plans",
      image: "/placeholder.svg?height=400&width=600",
    },
    design: {
      title: "Creative Design",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
      ctaText: "See designs",
      image: "/placeholder.svg?height=400&width=600",
    },
  }

  const tabs = [
    { id: "research", label: "Research" },
    { id: "plan", label: "Plan" },
    { id: "design", label: "Design" },
  ]

  const currentTab = tabsData[activeTab]

  return (
    <section className="bg-white py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Decorative Plus Icons */}
          <div className="absolute top-9 left-[35%] text-2xl text-gray-300 hidden lg:block"> <img src="https://res.cloudinary.com/diez3alve/image/upload/v1750451124/Untitled-1-removebg-preview_dny2or.png" alt="" className="w-[64%] h-[64%]"/></div>
         

          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">LOREM IPSUM DOLOR SIT AMET</h2>

            {/* Tabs */}
            <div className="flex  flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabKey)}
                  className={`relative px-4 w-40 py-2 border  border-[#CBD5E1] text-lg font-medium transition-colors ${
                    activeTab === tab.id ? "text-gray-900 bg-[#F1F5F9]" : "text-gray-500 hover:text-gray-700"
                  } ${tab.id === 'research' ? "rounded-l-md" : ""} ${tab.id === 'design' ? 'rounded-r-md' : ''}` }
                >
                  {tab.label}
                  {activeTab === tab.id && <div className="absolute bottom-0 left-0 h-0.5 w-full "></div>}
                </button>
              ))}
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">{currentTab.description}</p>

            {/* CTA Link */}
            <a
              href="#"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              {currentTab.ctaText}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={"https://res.cloudinary.com/diez3alve/image/upload/v1750448196/Section9-Image_bsrvbe.png"}
                alt={`${currentTab.title} - Business collaboration image`}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
