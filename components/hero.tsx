export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/dark-atmospheric-hookah-lounge-interior-with-ambie.jpg"
          alt="Hookah lounge atmosphere"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-balance">
          Experience the Art of Relaxation
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          Premium hookah flavors and handcrafted beverages in a sophisticated atmosphere
        </p>
      </div>
    </section>
  )
}
