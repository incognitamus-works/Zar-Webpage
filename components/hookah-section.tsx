"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const hookahData = {
  adalya: [
    { name: "Lady Killer", description: "Melon, mint, and a hint of citrus", price: "$25" },
    { name: "Love 66", description: "Passion fruit, grapefruit, and grenadine", price: "$25" },
    { name: "Blue Melon", description: "Blueberry and watermelon blend", price: "$25" },
    { name: "Ice Bonbon", description: "Mint candy with cooling effect", price: "$25" },
    { name: "Crazy Berry", description: "Mixed berries with a sweet twist", price: "$25" },
  ],
  alwaha: [
    { name: "Mango Tango", description: "Sweet tropical mango", price: "$23" },
    { name: "Mint Freeze", description: "Pure refreshing mint", price: "$23" },
    { name: "Peach", description: "Ripe juicy peach flavor", price: "$23" },
    { name: "Grape", description: "Sweet grape with a subtle tartness", price: "$23" },
    { name: "Apple Bahraini", description: "Classic double apple", price: "$23" },
  ],
  alfakher: [
    { name: "Double Apple", description: "Traditional anise-flavored apple", price: "$24" },
    { name: "Mint", description: "Classic refreshing mint", price: "$24" },
    { name: "Watermelon", description: "Sweet summer watermelon", price: "$24" },
    { name: "Orange", description: "Zesty citrus orange", price: "$24" },
    { name: "Grapefruit", description: "Tangy pink grapefruit", price: "$24" },
  ],
  fumari: [
    { name: "Blueberry Muffin", description: "Sweet blueberries with vanilla", price: "$26" },
    { name: "White Gummi Bear", description: "Pineapple candy flavor", price: "$26" },
    { name: "Ambrosia", description: "Melon and citrus medley", price: "$26" },
    { name: "Spiced Chai", description: "Warm spiced tea blend", price: "$26" },
    { name: "Lemon Mint", description: "Refreshing lemon and mint", price: "$26" },
  ],
}

export function HookahSection() {
  const [activeTab, setActiveTab] = useState("adalya")

  return (
    <section id="hookah" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-4">Hookah Menu</h2>
          <p className="text-muted-foreground text-lg">Premium tobacco from renowned manufacturers</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 md:grid-cols-4 mb-12">
            <TabsTrigger value="adalya">Adalya</TabsTrigger>
            <TabsTrigger value="alwaha">Al Waha</TabsTrigger>
            <TabsTrigger value="alfakher">Al Fakher</TabsTrigger>
            <TabsTrigger value="fumari">Fumari</TabsTrigger>
          </TabsList>

          <TabsContent value="adalya" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hookahData.adalya.map((flavor, index) => (
                <Card key={index} className="bg-card hover:bg-card/80 transition-colors border-border/50">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1 flex-1">
                        <h3 className="font-semibold text-lg">{flavor.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{flavor.description}</p>
                      </div>
                      <span className="text-primary font-semibold text-lg ml-4">{flavor.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="alwaha" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hookahData.alwaha.map((flavor, index) => (
                <Card key={index} className="bg-card hover:bg-card/80 transition-colors border-border/50">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1 flex-1">
                        <h3 className="font-semibold text-lg">{flavor.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{flavor.description}</p>
                      </div>
                      <span className="text-primary font-semibold text-lg ml-4">{flavor.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="alfakher" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hookahData.alfakher.map((flavor, index) => (
                <Card key={index} className="bg-card hover:bg-card/80 transition-colors border-border/50">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1 flex-1">
                        <h3 className="font-semibold text-lg">{flavor.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{flavor.description}</p>
                      </div>
                      <span className="text-primary font-semibold text-lg ml-4">{flavor.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fumari" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hookahData.fumari.map((flavor, index) => (
                <Card key={index} className="bg-card hover:bg-card/80 transition-colors border-border/50">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1 flex-1">
                        <h3 className="font-semibold text-lg">{flavor.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{flavor.description}</p>
                      </div>
                      <span className="text-primary font-semibold text-lg ml-4">{flavor.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
