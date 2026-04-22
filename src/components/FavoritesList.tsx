"use client"

import * as React from "react"
import { Heart, BookOpen, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { GenerateRecipeFromIngredientsOutput } from "@/ai/flows/generate-recipe-from-ingredients"

interface FavoritesListProps {
  favorites: GenerateRecipeFromIngredientsOutput[]
  onSelect: (recipe: GenerateRecipeFromIngredientsOutput) => void
  onRemove: (index: number) => void
}

export function FavoritesList({ favorites, onSelect, onRemove }: FavoritesListProps) {
  if (favorites.length === 0) return null

  return (
    <Card className="w-full shadow-md border-primary/20 bg-white">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-primary font-headline">
          <Heart className="w-5 h-5 fill-current" />
          Favorite Recipes
        </CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        <div className="space-y-1">
          {favorites.map((recipe, idx) => (
            <div
              key={`${recipe.title}-${idx}`}
              className="group flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
              onClick={() => onSelect(recipe)}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="font-medium text-sm text-foreground line-clamp-1">
                  {recipe.title}
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 text-muted-foreground hover:text-destructive"
                onClick={(e) => {
                  e.stopPropagation()
                  onRemove(idx)
                }}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}