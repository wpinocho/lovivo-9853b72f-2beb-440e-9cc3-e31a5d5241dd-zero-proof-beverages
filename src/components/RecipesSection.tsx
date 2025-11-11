import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Clock, Users } from 'lucide-react'

interface Recipe {
  id: string
  name: string
  image: string
  time: string
  servings: number
  description: string
}

const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Cyber Mojito',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80',
    time: '5 min',
    servings: 1,
    description: 'Fresh mint, lime, and zero-proof rum for the ultimate refresher'
  },
  {
    id: '2',
    name: 'Neon Martini',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&q=80',
    time: '3 min',
    servings: 1,
    description: 'Sophisticated NA gin with a twist of lemon and botanical garnish'
  },
  {
    id: '3',
    name: 'Digital Sunset',
    image: 'https://images.unsplash.com/photo-1595981234058-e7d08cf9f2d0?w=800&q=80',
    time: '4 min',
    servings: 2,
    description: 'Tropical blend with passion fruit, pineapple, and NA tequila'
  }
]

export const RecipesSection = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 cyber-glow">
            Featured <span className="text-primary">Recipes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Craft bar-quality mocktails at home with our curated recipes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <Card key={recipe.id} className="glass-card overflow-hidden group hover:shadow-[0_0_30px_rgba(70,214,217,0.4)] transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{recipe.name}</h3>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{recipe.servings} {recipe.servings > 1 ? 'servings' : 'serving'}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {recipe.description}
                </p>

                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  View Recipe
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
