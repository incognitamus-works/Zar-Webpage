"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 relative">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-primary">
                <path
                  d="M12 2C12 2 8 6 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 6 12 2 12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 14V22M8 18H16M10 22H14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-xl font-semibold tracking-tight">oasis.</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("drinks")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Drinks
            </button>
            <button
              onClick={() => scrollToSection("hookah")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Hookah
            </button>
            <Button size="sm" className="rounded-full px-6">
              Reserve
            </Button>
          </nav>

          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("drinks")}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Drinks
            </button>
            <button
              onClick={() => scrollToSection("hookah")}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Hookah
            </button>
            <Button size="sm" className="rounded-full px-6 w-full">
              Reserve
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
