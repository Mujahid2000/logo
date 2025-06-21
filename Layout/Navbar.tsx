"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setOpenMobileDropdown(null)
  }

  const toggleMobileDropdown = (dropdown: string) => {
    setOpenMobileDropdown(openMobileDropdown === dropdown ? null : dropdown)
  }

  const navItems = [
    {
      id: "services",
      label: "Services",
      items: ["Web Development", "Mobile Apps", "Consulting", "Support"],
    },
    {
      id: "products",
      label: "Products",
      items: ["Software Solutions", "Digital Tools", "Analytics", "Integrations"],
    },
    {
      id: "company",
      label: "Company",
      items: ["About Us", "Careers", "News", "Contact"],
    },
  ]

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? " backdrop-blur-sm shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
          {/* Logo */}
          <motion.div
            className={`px-4 py-2 lg:px-6 lg:py-3 text-lg lg:text-xl font-bold rounded-lg shadow-lg transition-colors duration-300 ${
              isScrolled ? "bg-[#DBDBDB] text-[#000000]" : "bg-white text-black"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LOGO
          </motion.div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex space-x-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuTrigger
                    className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                      isScrolled
                        ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                        : "text-[#1959AC] hover:text-blue-200 "
                    } bg-transparent`}
                  >
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-56 p-4  rounded-lg shadow-xl ">
                      <div className="space-y-2">
                        {item.items.map((subItem, index) => (
                          <motion.a
                            key={index}
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                            whileHover={{ x: 4 }}
                          >
                            {subItem}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Sign In Button */}
          <Button
            variant="outline"
            className={`hidden lg:flex px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
              isScrolled
                ? "bg-white text-gray-900  hover:bg-gray-50"
                : " text-[#000000]   hover:text-gray-900"
            }`}
          >
            Sign In
          </Button>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMobileMenu}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-gray-900 font-bold hover:bg-white/10"
            }`}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw]  z-50 lg:hidden "
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 ">
                  <div className="bg-[#DBDBDB] text-[##000000] px-4 py-2 rounded-lg font-bold text-lg">LOGO</div>
                  <button
                    onClick={toggleMobileMenu}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Mobile Navigation Items */}
                <div className="flex-1 overflow-y-auto py-6">
                  <div className="space-y-2 px-6">
                    {navItems.map((item) => (
                      <div key={item.id} className="space-y-2">
                        <button
                          onClick={() => toggleMobileDropdown(item.id)}
                          className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <span className="font-medium">{item.label}</span>
                          <motion.div
                            animate={{ rotate: openMobileDropdown === item.id ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="h-4 w-4 text-gray-500" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {openMobileDropdown === item.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 space-y-1">
                                {item.items.map((subItem, index) => (
                                  <motion.a
                                    key={index}
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                                    whileHover={{ x: 4 }}
                                    onClick={toggleMobileMenu}
                                  >
                                    {subItem}
                                  </motion.a>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-6  bg-gray-50">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-[#fff] py-3 rounded-lg font-medium">
                    Sign In
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
