import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { type Collection } from '@/lib/supabase'
import { ArrowRight } from 'lucide-react'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="glass-card overflow-hidden group hover:shadow-[0_0_30px_rgba(70,214,217,0.4)] transition-all duration-300">
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-card overflow-hidden relative">
          {collection.image ? (
            <img 
              src={collection.image} 
              alt={collection.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm bg-gradient-to-br from-card to-muted">
              <div className="text-center p-4">
                <div className="text-4xl mb-2">🍸</div>
                <div className="text-xs uppercase tracking-wider">Collection</div>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-white font-bold text-xl line-clamp-1 cyber-glow">
                {collection.name}
              </h3>
              {collection.featured && (
                <Badge className="bg-primary text-primary-foreground font-bold shadow-lg">
                  FEATURED
                </Badge>
              )}
            </div>
          </div>
        </div>
        
        <div className="p-4">
          {collection.description && (
            <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
              {collection.description}
            </p>
          )}
          
          <Button 
            variant="outline" 
            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold uppercase tracking-wider transition-all"
            onClick={() => onViewProducts(collection.id)}
          >
            Explore
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
