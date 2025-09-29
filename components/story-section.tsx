"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Users, Award, Leaf } from "lucide-react"

const stats = [
  { icon: Users, value: "100M+", label: "Happy Customers" },
  { icon: Award, value: "75+", label: "Years of Trust" },
  { icon: Leaf, value: "100%", label: "Natural Products" },
]

export function StorySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? "animate-in slide-in-from-left duration-700" : "opacity-0"}`}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
                <span className="font-serif text-foreground">Crafting</span>{" "}
                <span className="text-primary">Excellence</span>
                <br />
                <span className="font-serif text-foreground">Since 1946</span>
              </h2>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                From a small cooperative in Gujarat to India's largest dairy brand, Amul has been synonymous with
                quality, freshness, and trust for over seven decades.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our journey began with a simple mission: to provide pure, nutritious dairy products to every Indian
                household. Today, we continue that legacy with innovative products that blend traditional wisdom with
                modern technology.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every drop of milk, every gram of butter, and every product that bears the Amul name is a testament to
                our unwavering commitment to quality and the trust of millions of families across India.
              </p>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 group">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Our Journey
            </Button>
          </div>

          {/* Visual Content */}
          <div
            className={`space-y-8 ${isVisible ? "animate-in slide-in-from-right duration-700 delay-200" : "opacity-0"}`}
          >
            {/* Hero Image */}
            <div className="relative">
              <img
                src="/dairy-farm-with-cows-and-farmers-working-together.jpg"
                alt="Amul dairy farm"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-semibold mb-2">Farm to Table Excellence</h3>
                <p className="text-white/90">Ensuring quality at every step</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-4 bg-muted/50 border-0">
                  <CardContent className="p-0">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
