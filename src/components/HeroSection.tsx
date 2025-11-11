import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const HeroSection = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-section')
    productsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&q=80)',
          filter: 'brightness(0.4)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-60" />
      
      {/* Cyber Grid Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 cyber-glow">
          ZERO PROOF
          <span className="block text-primary mt-2">MAXIMUM FLAVOR</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-secondary mb-8 max-w-2xl mx-auto">
          Craft sophisticated mocktails with premium non-alcoholic spirits. 
          All the taste, none of the hangover.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="btn-y2k text-lg px-8 py-6"
            onClick={scrollToProducts}
          >
            Discover Flavors
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Shop Bundles
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="glass-card p-4 rounded-lg">
            <div className="text-3xl font-bold text-primary">0%</div>
            <div className="text-sm text-muted-foreground uppercase">Alcohol</div>
          </div>
          <div className="glass-card p-4 rounded-lg">
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground uppercase">Flavor</div>
          </div>
          <div className="glass-card p-4 rounded-lg">
            <div className="text-3xl font-bold text-primary">∞</div>
            <div className="text-sm text-muted-foreground uppercase">Possibilities</div>
          </div>
        </div>
      </div>
    </section>
  )
}
