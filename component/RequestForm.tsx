"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"
import './request.css'
export default function RequestQuoteForm() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold text-[#222] md:text-4xl">REQUEST A QUOTE</h1>
        </div>

        {/* Form */}
        <form className="space-y-8">
          {/* First Row - Name and Email */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                className="h-12 bg-gray-100 border-1 focus:bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                className="h-12 bg-gray-100 border-1 focus:bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Second Row - Phone and Time Frame */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                className="h-12 bg-gray-100 border-1 focus:bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeframe" className="text-sm font-medium text-gray-700">
                Time Frame*
              </Label>
              <Select>
                <SelectTrigger className="h-19 w-full bg-gray-100 border-1 focus:bg-white focus:ring-2 focus:ring-blue-500">
                  <SelectValue placeholder="Choose Time Frame" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">ASAP</SelectItem>
                  <SelectItem value="1-week">Within 1 week</SelectItem>
                  <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
                  <SelectItem value="1-month">Within 1 month</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Third Row - Size and Quantity */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="size" className="text-sm font-medium text-gray-700">
                Size*
              </Label>
              <Select>
                <SelectTrigger className="h-12 w-full bg-gray-100 border-1 focus:bg-white focus:ring-2 focus:ring-blue-500">
                  <SelectValue placeholder="Choose Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Small</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="large">Large</SelectItem>
                  <SelectItem value="extra-large">Extra Large</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="quantity" className="text-sm font-medium text-gray-700">
                Quantity*
              </Label>
              <Select>
                <SelectTrigger className="h-12 w-full bg-gray-100 border-1 focus:bg-white focus:ring-2 focus:ring-blue-500">
                  <SelectValue placeholder="Choose Quantity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10</SelectItem>
                  <SelectItem value="11-50">11-50</SelectItem>
                  <SelectItem value="51-100">51-100</SelectItem>
                  <SelectItem value="100+">100+</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Project Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium text-gray-700">
              Please Describe Your Project*
            </Label>
            <Textarea
              id="description"
              placeholder="Choose a project type"
              className="min-h-[229px] bg-gray-100 border-1 focus:bg-white focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Terms and Submit */}
          <div className="space-y-6">
            <p className="text-center text-lg text-gray-600">
              By submitting this form you agree to our{" "}
              <a href="#" className="text-[#3C3C3C] underline hover:text-blue-800">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#3C3C3C] underline hover:text-blue-800">
                Privacy Policy
              </a>
              .
            </p>

            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-[#1959AC] hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium flex items-center gap-2"
              >
                Lorem Ipsum
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
