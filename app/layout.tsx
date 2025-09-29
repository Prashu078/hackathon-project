import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/contexts/cart-context"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Amul - The Taste of India",
  description:
    "India's most trusted dairy brand bringing you the finest milk, butter, cheese, and dairy products with unmatched quality and freshness.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased relative">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <CartProvider>
            <div
              className="fixed inset-0 z-[-1] pointer-events-none"
              style={{
                backgroundImage:
                  "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQse65_0kTD0P2VqHEQafFXTmg4Eiv0LMeZJ6MFDCDF3sCMZ-_6cbNlAAqZ&s=10')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: "0.1",
              }}
            />
            <Suspense>
              {children}
              <Analytics />
            </Suspense>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
