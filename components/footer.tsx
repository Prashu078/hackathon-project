"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-primary rounded-full blur-2xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <motion.div
            className="space-y-4 sm:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image
                  src="/amul-logo.png"
                  alt="Amul Logo"
                  width={100}
                  height={40}
                  className="h-10 w-auto object-contain"
                  priority
                />
              </motion.div>
            </div>
            <motion.p
              className="text-background/80 leading-relaxed text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              India's most trusted dairy brand, bringing you the finest quality products with over 75 years of
              excellence.
            </motion.p>
            <div className="flex space-x-2 sm:space-x-4">
              <motion.div whileHover={{ scale: 1.1, rotateZ: 5 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-background hover:text-primary hover:bg-background/10"
                  asChild
                >
                  <a href="https://facebook.com/AmulIndia" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, rotateZ: -5 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-background hover:text-primary hover:bg-background/10"
                  asChild
                >
                  <a href="https://twitter.com/Amul_Coop" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, rotateZ: 5 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-background hover:text-primary hover:bg-background/10"
                  asChild
                >
                  <a href="https://instagram.com/amul_coop" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, rotateZ: -5 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-background hover:text-primary hover:bg-background/10"
                  asChild
                >
                  <a href="https://youtube.com/user/amulindiaofficial" target="_blank" rel="noopener noreferrer">
                    <Youtube className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Products */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-base sm:text-lg font-semibold"
              whileHover={{ scale: 1.05, textShadow: "0 0 8px rgba(255,255,255,0.3)" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              Products
            </motion.h3>
            <ul className="space-y-2 text-background/80 text-sm sm:text-base">
              <motion.li whileHover={{ x: 5, scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Link href="/products#milk" className="hover:text-primary transition-colors">
                  Fresh Milk
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5, scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Link href="/products#butter" className="hover:text-primary transition-colors">
                  Butter & Ghee
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5, scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Link href="/products#cheese" className="hover:text-primary transition-colors">
                  Cheese
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5, scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Link href="/products#icecream" className="hover:text-primary transition-colors">
                  Ice Cream
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5, scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Link href="/products#beverages" className="hover:text-primary transition-colors">
                  Beverages
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5, scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Link href="/products#sweets" className="hover:text-primary transition-colors">
                  Sweets
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-base sm:text-lg font-semibold"
              whileHover={{ scale: 1.05, textShadow: "0 0 8px rgba(255,255,255,0.3)" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              Company
            </motion.h3>
            <ul className="space-y-2 text-background/80 text-sm sm:text-base">
              <motion.li whileHover={{ x: 5, scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5, scale: 1.02 }} transition={{ duration: 0.2 }}>
                <a
                  href="https://youtu.be/Apnvkjz4co0?list=PLHAJPMw2xa4yezgwwylNCKUmTsPpKbWJX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Our Story
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5, scale: 1.02 }} transition={{ duration: 0.2 }}>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5, scale: 1.02 }} transition={{ duration: 0.2 }}>
                <a href="#" className="hover:text-primary transition-colors">
                  Press
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5, scale: 1.02 }} transition={{ duration: 0.2 }}>
                <a href="#" className="hover:text-primary transition-colors">
                  Sustainability
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5, scale: 1.02 }} transition={{ duration: 0.2 }}>
                <a href="#" className="hover:text-primary transition-colors">
                  Quality
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div
            className="space-y-4 sm:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-base sm:text-lg font-semibold"
              whileHover={{ scale: 1.05, textShadow: "0 0 8px rgba(255,255,255,0.3)" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              Stay Connected
            </motion.h3>
            <div className="space-y-3 text-background/80 text-sm sm:text-base">
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ x: 3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="h-4 w-4" />
                <span>1800-258-3333</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ x: 3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="h-4 w-4" />
                <span>info@amul.com</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ x: 3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="h-4 w-4" />
                <span>Anand, Gujarat</span>
              </motion.div>
            </div>

            <div className="space-y-2">
              <motion.p
                className="text-xs sm:text-sm text-background/80"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Subscribe to our newsletter
              </motion.p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <motion.div whileFocus={{ scale: 1.02 }} className="flex-1">
                  <Input
                    placeholder="Enter your email"
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/60 flex-1"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotateX: 5 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">Subscribe</Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-background/20 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-background/60 text-xs sm:text-sm text-center md:text-left"
            whileHover={{ scale: 1.02 }}
          >
            © 2025 Amul. All rights reserved.
          </motion.p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-background/60">
            <motion.a href="#" className="hover:text-primary transition-colors" whileHover={{ scale: 1.05, y: -2 }}>
              Privacy Policy
            </motion.a>
            <motion.a href="#" className="hover:text-primary transition-colors" whileHover={{ scale: 1.05, y: -2 }}>
              Terms of Service
            </motion.a>
            <motion.a href="#" className="hover:text-primary transition-colors" whileHover={{ scale: 1.05, y: -2 }}>
              Cookie Policy
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
