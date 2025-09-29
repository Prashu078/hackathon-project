import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">The Amul Story</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From a small cooperative in Gujarat to India's largest dairy brand, Amul has been bringing the taste of
              India to millions of homes for over 75 years.
            </p>
          </div>

          {/* Story Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Heritage</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 1946, Amul began as a cooperative movement in Anand, Gujarat, empowering local farmers and
                  revolutionizing India's dairy industry.
                </p>
                <p>
                  Today, we stand as a testament to the power of cooperation, bringing together over 3.6 million milk
                  producers across the country.
                </p>
                <p>
                  Our commitment to quality, freshness, and fair prices has made us India's most trusted dairy brand,
                  touching lives across generations.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/amul-dairy-farm-with-cows-and-farmers.jpg" alt="Amul Heritage" fill className="object-cover" />
            </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/fresh-milk-processing-facility-modern-dairy.jpg" alt="Amul Quality" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Values</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Quality First</h3>
                  <p className="text-muted-foreground">
                    Every product undergoes rigorous quality checks to ensure the highest standards.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Farmer Empowerment</h3>
                  <p className="text-muted-foreground">
                    We believe in fair prices and supporting our dairy farmers across India.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Innovation</h3>
                  <p className="text-muted-foreground">
                    Continuously improving our processes and products to serve you better.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
