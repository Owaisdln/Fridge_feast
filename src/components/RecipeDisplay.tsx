"use client"

import * as React from "react"
import { Heart, ChefHat, Timer, Flame, Sparkles, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GenerateRecipeFromIngredientsOutput } from "@/ai/flows/generate-recipe-from-ingredients"

interface RecipeDisplayProps {
  recipe: GenerateRecipeFromIngredientsOutput
  isFavorite: boolean
  onToggleFavorite: () => void
  onSave?: () => void
}

export function RecipeDisplay({ recipe, isFavorite, onToggleFavorite }: RecipeDisplayProps) {
  return (
    <Card className="w-full shadow-lg border-primary/10 overflow-hidden bg-white animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-primary/5 p-6 border-b border-primary/10 relative overflow-hidden">
        <Sparkles className="absolute top-4 right-4 text-primary/20 w-12 h-12" />
        <div className="flex justify-between items-start">
          <Badge className="mb-2 bg-accent text-accent-foreground border-none font-bold">
            NEW CREATION
          </Badge>
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleFavorite}
            className={`rounded-full ${isFavorite ? "text-red-500 hover:text-red-600" : "text-muted-foreground hover:text-red-400"}`}
          >
            <Heart className={`w-6 h-6 ${isFavorite ? "fill-current" : ""}`} />
          </Button>
        </div>
        <CardTitle className="text-3xl font-headline text-foreground leading-tight">
          {recipe.title}
        </CardTitle>
      </div>

      <CardContent className="p-6 space-y-8">
        <section>
          <h3 className="text-lg font-bold flex items-center gap-2 mb-4 text-primary font-headline">
            <ChefHat className="w-5 h-5" />
            Ingredients
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {recipe.ingredients.map((ing, idx) => (
              <li key={idx} className="flex items-center gap-3 p-2 rounded-lg bg-secondary/30 text-sm">
                <span className="font-bold text-primary min-w-[60px]">{ing.quantity}</span>
                <span className="text-foreground">{ing.name}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-bold flex items-center gap-2 mb-4 text-primary font-headline">
            <Flame className="w-5 h-5" />
            Instructions
          </h3>
          <div className="space-y-4">
            {recipe.instructions.map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold text-sm">
                  {idx + 1}
                </span>
                <p className="text-muted-foreground leading-relaxed pt-1">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>
      </CardContent>
    </Card>
  )
}