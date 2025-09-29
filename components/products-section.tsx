"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

const products = [
  {
    id: 1,
    name: "Amul Fresh Milk",
    category: "Milk",
    price: "₹28",
    rating: 4.8,
    image: "https://www.bbassets.com/media/uploads/p/l/40090893_8-amul-amul-gold.jpg",
    description: "Pure, fresh milk delivered daily",
    badge: "Fresh",
    color: "bg-accent/10",
  },
  {
    id: 2,
    name: "Amul Butter",
    category: "Butter",
    price: "₹52",
    rating: 4.9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDwRZne_OtKiAix20IUxhSPdboiZblXoy2g&s",
    description: "Creamy, golden butter made from pure cream",
    badge: "Bestseller",
    color: "bg-primary/10",
  },
  {
    id: 3,
    name: "Amul Chaach",
    category: "Beverages",
    price: "₹15",
    rating: 4.7,
    image: "https://www.bbassets.com/media/uploads/p/l/40147628_4-amul-buttermilkchaas-polypack.jpg",
    description: "Traditional spiced buttermilk",
    badge: "Traditional",
    color: "bg-secondary/20",
  },
  {
    id: 4,
    name: "Amul Cheese",
    category: "Cheese",
    price: "₹85",
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3HPEwEWBPtO1af923dxRb15cDKBM0Z4a2lUNlRjInbQ&s=10",
    description: "Rich, creamy processed cheese",
    badge: "Premium",
    color: "bg-primary/15",
  },
  {
    id: 5,
    name: "Amul Ice Cream",
    category: "Desserts",
    price: "₹45",
    rating: 4.8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEXkpP4rgye-1o-ZoJFFMSDYwd3V-tqqY84zIBQL0JOmw24IoojuuB6-Km&s=10",
    description: "Creamy vanilla ice cream",
    badge: "Popular",
    color: "bg-accent/15",
  },
  {
    id: 6,
    name: "Amul Lassi",
    category: "Beverages",
    price: "₹25",
    rating: 4.5,
    image: "https://www.livemint.com/lm-img/img/2023/05/26/600x338/aMul_Lassi_1685078258455_1685078281749.jpg",
    description: "Sweet and refreshing lassi",
    badge: "Refreshing",
    color: "bg-secondary/15",
  },
  {
    id: 7,
    name: "Amul Ghee",
    category: "Ghee",
    price: "₹180",
    rating: 4.9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKhypHoJSEeWjp6oRt3AP4yLu-nBaZ6ZT2CRdn1dYrVQ&s=10",
    description: "Pure cow ghee for authentic taste",
    badge: "Pure",
    color: "bg-secondary/10",
  },
  {
    id: 8,
    name: "Amul Paneer",
    category: "Paneer",
    price: "₹95",
    rating: 4.7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1a4lmNv-8tBXXXDq-Yp_lCGHqjonYEYoa8JkWyO7ZDw&s=10",
    description: "Fresh cottage cheese for cooking",
    badge: "Fresh",
    color: "bg-accent/10",
  },
]

export function ProductsSection() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const { addItem } = useCart()

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    })
  }

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance mb-4 sm:mb-6">
            <span className="font-serif text-foreground">Our</span>{" "}
            <span className="text-primary">Premium Products</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Discover our range of fresh, nutritious dairy products crafted with traditional methods and modern quality
            standards.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-xl animate-tilt ${product.color} border-0`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <CardContent className="p-6">
                {/* Product Image */}
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      {product.badge}
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`absolute top-3 right-3 bg-background/90 hover:bg-background transition-all duration-200 ${
                      favorites.includes(product.id) ? "text-red-500" : "text-muted-foreground"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(product.id)
                    }}
                  >
                    <Heart className={`h-4 w-4 ${favorites.includes(product.id) ? "fill-current" : ""}`} />
                  </Button>
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{product.category}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-2 gap-2 sm:gap-0">
                    <span className="text-xl sm:text-2xl font-bold text-primary">{product.price}</span>
                    <Button
                      size="sm"
                      className={`transition-all duration-200 w-full sm:w-auto ${
                        hoveredProduct === product.id
                          ? "bg-primary hover:bg-primary/90 scale-105"
                          : "bg-primary/80 hover:bg-primary"
                      }`}
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-12">
          <Button
            size="lg"
            variant="outline"
            className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg bg-transparent w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
