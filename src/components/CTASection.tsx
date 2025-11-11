import { Button } from '@/components/ui/button'
import { ArrowRight, Zap } from 'lucide-react'

export const CTASection = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-section')
    productsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient opacity-30" />
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          <Zap className="h-8 w-8 text-primary animate-pulse" />
          <Zap className="h-6 w-6 text-secondary animate-pulse delay-100" />
          <Zap className="h-8 w-8 text-primary animate-pulse delay-200" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-glow">
          Ready to <span className="text-primary">Discover Flavors?</span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands mixing up incredible zero-proof cocktails. 
          No alcohol, no regrets, just amazing taste.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            size="lg" 
            className="btn-y2k text-lg px-8 py-6"
            onClick={scrollToProducts}
          >
            Discover Flavors
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
          <div>
            <div className="text-2xl font-bold text-primary mb-1">10K+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Unique Recipes</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
