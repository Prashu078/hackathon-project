"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([])
  const [milkDroplets, setMilkDroplets] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    const droplets = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
    }))
    setMilkDroplets(droplets)
  }, [])

  const createRipple = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const newRipple = { id: Date.now(), x, y }

    setRipples((prev) => [...prev, newRipple])
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
    }, 600)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-accent/10 pt-24">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-milk-wave" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-milk-wave-reverse" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {milkDroplets.map((droplet) => (
          <div
            key={droplet.id}
            className="absolute w-3 h-3 bg-white/30 dark:bg-white/20 rounded-full animate-milk-droplet"
            style={{
              left: `${droplet.x}%`,
              top: `${droplet.y}%`,
              animationDelay: `${droplet.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/40 rounded-full animate-milk-splash"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-3/4 right-1/4 w-12 h-12 bg-white/30 rounded-full animate-milk-splash"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-3/4 w-20 h-20 bg-white/20 rounded-full animate-milk-splash"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-accent/20 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-1/3 w-28 h-28 bg-accent/15 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      {/* Flowing lines */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-flow"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-flow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-flow"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 transform-gpu">
        <div className="max-w-4xl mx-auto animate-subtle-parallax">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-4 sm:mb-6">
            <span className="font-serif text-foreground">The Pure</span>
            <br />
            <span className="text-primary">Taste of India</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground text-pretty mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Experience the richness of authentic dairy products crafted with love, tradition, and the finest ingredients
            from across India.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4 sm:px-0">
            <Link href="/products" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg group w-full"
              >
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link
              href="https://youtu.be/Apnvkjz4co0?list=PLHAJPMw2xa4yezgwwylNCKUmTsPpKbWJX"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                size="lg"
                className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg group bg-transparent w-full"
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                Watch Our Story
              </Button>
            </Link>
          </div>

          {/* Interactive ripple area */}
          <div
            className="relative w-full max-w-xs sm:max-w-md mx-auto h-24 sm:h-32 cursor-pointer"
            onClick={createRipple}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm text-muted-foreground">Click for freshness</span>
            </div>
            {ripples.map((ripple) => (
              <div
                key={ripple.id}
                className="absolute w-4 h-4 bg-primary/30 rounded-full animate-ripple pointer-events-none"
                style={{
                  left: ripple.x - 8,
                  top: ripple.y - 8,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
