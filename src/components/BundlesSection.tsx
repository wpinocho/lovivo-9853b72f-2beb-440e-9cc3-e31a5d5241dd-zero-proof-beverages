import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Package, Gift, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Bundle {
  id: string
  slug: string
  name: string
  description: string
  price: number
  comparePrice: number
  savings: string
  image: string
  icon: React.ReactNode
  items: string[]
}

const bundles: Bundle[] = [
  {
    id: '1',
    slug: 'mixology-starter-bundle',
    name: 'Mixology Starter',
    description: 'Perfect for beginners exploring zero-proof cocktails',
    price: 99.99,
    comparePrice: 107.97,
    savings: 'Save $8',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80',
    icon: <Package className="h-6 w-6" />,
    items: ['3 Premium NA Spirits', 'Recipe Guide', 'Bar Tools']
  },
  {
    id: '2',
    slug: 'aperitif-collection-bundle',
    name: 'Aperitif Collection',
    description: 'Sophisticated spirits for elevated happy hours',
    price: 129.99,
    comparePrice: 143.96,
    savings: 'Save $14',
    image: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?w=800&q=80',
    icon: <Sparkles className="h-6 w-6" />,
    items: ['4 Unique Aperitifs', 'Tasting Notes', 'Glassware Set']
  }
]

export const BundlesSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Gift className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold cyber-glow">
              Starter <span className="text-primary">Bundles</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to begin your zero-proof journey, bundled and ready
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {bundles.map((bundle) => (
            <Card key={bundle.id} className="glass-card overflow-hidden group hover:shadow-[0_0_30px_rgba(70,214,217,0.4)] transition-all duration-300">
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={bundle.image}
                  alt={bundle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground font-bold">
                    {bundle.savings}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/20 text-primary">
                    {bundle.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{bundle.name}</h3>
                    <p className="text-sm text-muted-foreground">{bundle.description}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {bundle.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-3xl font-bold text-primary">
                      ${bundle.price}
                    </div>
                    <div className="text-sm text-muted-foreground line-through">
                      ${bundle.comparePrice}
                    </div>
                  </div>
                </div>

                <Link to={`/products/${bundle.slug}`}>
                  <Button className="w-full btn-y2k">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
