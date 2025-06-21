"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Define the interface for FAQ data
interface FAQ {
  id: number
  question: string
  answer: string
}

// Define the interface for the existing Data (if needed elsewhere)


const faqData: FAQ[] = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit amet consectetur",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
  },
  {
    id: 5,
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.",
  },
]

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number>(1) // First FAQ open by default

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? 0 : id)
  }

  return (
    <section className="bg-white py-20 px-4">
      <div className="mx-auto max-w-7xl">
        {/* FAQ Section */}
        <div className="mb-20">
          {/* Header */}
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            FREQUENTLY ASKED QUESTIONS (FAQS)
          </motion.h2>

          {/* FAQ Items */}
          <div className="space-y-0">
            {faqData.map((faq: FAQ, index: number) => (
              <motion.div
                key={faq.id}
                className="border-b border-gray-200 last:border-b-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between py-6 text-left hover:bg-gray-50 transition-colors duration-200 px-4 -mx-4 rounded-lg"
                >
                  <span className="text-lg font-medium text-gray-900 pr-8">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    {openFAQ === faq.id ? (
                      <Minus className="h-5 w-5 text-gray-600" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-600" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 px-4 -mx-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Logo */}
          <div className="inline-block bg-gray-300 px-8 py-4 rounded-lg">
            <span className="text-xl font-bold text-black">LOGO</span>
          </div>

          {/* Heading */}
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 max-w-2xl mx-auto">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DUI.
          </h3>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum
            nullam.
          </p>

          {/* CTA Button */}
          <Button className="bg-[#155ADA] hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium flex items-center gap-2 mx-auto">
            Lorem Ipsum
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}