import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const products = [
  {
    name: "Fresh Milk",
    image: "https://www.bbassets.com/media/uploads/p/l/40090893_8-amul-amul-gold.jpg",
    description: "Pure and fresh milk from our dairy farms",
  },
  {
    name: "Golden Butter",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDwRZne_OtKiAix20IUxhSPdboiZblXoy2g&s",
    description: "Rich and creamy butter made from fresh cream",
  },
  {
    name: "Premium Ghee",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKhypHoJSEeWjp6oRt3AP4yLu-nBaZ6ZT2CRdn1dYrVQ&s=10",
    description: "Traditional ghee with authentic taste",
  },
  {
    name: "Fresh Paneer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1a4lmNv-8tBXXXDq-Yp_lCGHqjonYEYoa8JkWyO7ZDw&s=10",
    description: "Soft and fresh cottage cheese",
  },
  {
    name: "Chaach",
    image: "https://www.bbassets.com/media/uploads/p/l/40147628_4-amul-buttermilkchaas-polypack.jpg",
    description: "Traditional buttermilk for refreshment",
  },
  {
    name: "Chocolates",
    image: "https://m.media-amazon.com/images/I/81Rz8SxtiJL.jpg",
    description: "Delicious milk chocolates for all ages",
  },
  {
    name: "Ice Cream",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEXkpP4rgye-1o-ZoJFFMSDYwd3V-tqqY84zIBQL0JOmw24IoojuuB6-Km&s=10",
    description: "Creamy ice cream in various flavors",
  },
  {
    name: "Amul Cheese",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3HPEwEWBPtO1af923dxRb15cDKBM0Z4a2lUNlRjInbQ&s=10",
    description: "Rich cream for cooking and desserts",
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Products</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our wide range of dairy products made with love and care from the finest ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1 bg-card border-border"
              >
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
