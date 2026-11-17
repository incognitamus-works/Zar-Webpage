"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const drinksData = {
  hot: [
    { name: "Turkish Coffee", description: "Traditional preparation with cardamom", price: "$5" },
    { name: "Mint Tea", description: "Fresh mint leaves with green tea", price: "$4" },
    { name: "Chamomile Tea", description: "Soothing herbal blend", price: "$4" },
    { name: "Espresso", description: "Double shot, rich and bold", price: "$3" },
  ],
  cold: [
    { name: "Lemonade", description: "Freshly squeezed with mint", price: "$5" },
    { name: "Iced Tea", description: "Choice of flavors", price: "$4" },
    { name: "Fruit Smoothies", description: "Mango, strawberry, or mixed berry", price: "$7" },
    { name: "Sparkling Water", description: "Imported mineral water", price: "$3" },
  ],
  specialty: [
    { name: "Rose Latte", description: "Espresso with rose syrup and steamed milk", price: "$6" },
    { name: "Saffron Milk", description: "Warm milk infused with saffron and honey", price: "$7" },
    { name: "Arabic Coffee", description: "Spiced with cardamom and served with dates", price: "$6" },
    { name: "Hibiscus Cooler", description: "Chilled hibiscus tea with honey", price: "$5" },
  ],
}

export function DrinksSection() {
  const [activeTab, setActiveTab] = useState("hot")

  return (
    <section id="drinks" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-4">Beverages</h2>
          <p className="text-muted-foreground text-lg">Handcrafted drinks to complement your experience</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="hot">Hot Drinks</TabsTrigger>
            <TabsTrigger value="cold">Cold Drinks</TabsTrigger>
            <TabsTrigger value="specialty">Specialty</TabsTrigger>
          </TabsList>

          <TabsContent value="hot" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {drinksData.hot.map((drink, index) => (
                <Card key={index} className="bg-card hover:bg-card/80 transition-colors border-border/50">
                  <CardContent className="p-6 space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-lg">{drink.name}</h3>
                      <span className="text-primary font-semibold">{drink.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{drink.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cold" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {drinksData.cold.map((drink, index) => (
                <Card key={index} className="bg-card hover:bg-card/80 transition-colors border-border/50">
                  <CardContent className="p-6 space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-lg">{drink.name}</h3>
                      <span className="text-primary font-semibold">{drink.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{drink.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="specialty" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {drinksData.specialty.map((drink, index) => (
                <Card key={index} className="bg-card hover:bg-card/80 transition-colors border-border/50">
                  <CardContent className="p-6 space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-lg">{drink.name}</h3>
                      <span className="text-primary font-semibold">{drink.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{drink.description}</p>
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
