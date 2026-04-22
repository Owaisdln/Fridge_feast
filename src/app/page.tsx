"use client"

import * as React from "react"
import { Sparkles, UtensilsCrossed, Loader2, ChefHat } from "lucide-react"
import { Button } from "@/components/ui/button"
import { IngredientManager } from "@/components/IngredientManager"
import { RecipeDisplay } from "@/components/RecipeDisplay"
import { FavoritesList } from "@/components/FavoritesList"
import { generateRecipeFromIngredients, GenerateRecipeFromIngredientsOutput } from "@/ai/flows/generate-recipe-from-ingredients"
import { useToast } from "@/hooks/use-toast"

export default function FridgeFeast() {
  const [ingredients, setIngredients] = React.useState<string[]>([])
  const [currentRecipe, setCurrentRecipe] = React.useState<GenerateRecipeFromIngredientsOutput | null>(null)
  const [favorites, setFavorites] = React.useState<GenerateRecipeFromIngredientsOutput[]>([])
  const [isLoading, setIsLoading] = React.useState(false)
  const { toast } = useToast()

  // Load favorites from local storage
  React.useEffect(() => {
    const saved = localStorage.getItem("fridge-feast-favorites")
    if (saved) {
      try {
        setFavorites(JSON.parse(saved))
      } catch (e) {
        console.error("Failed to load favorites", e)
      }
    }
  }, [])

  // Save favorites to local storage
  React.useEffect(() => {
    localStorage.setItem("fridge-feast-favorites", JSON.stringify(favorites))
  }, [favorites])

  const handleAddIngredient = (item: string) => {
    setIngredients((prev) => [...prev, item])
  }

  const handleRemoveIngredient = (index: number) => {
    setIngredients((prev) => prev.filter((_, i) => i !== index))
  }

  const handleGenerateRecipe = async () => {
    if (ingredients.length === 0) {
      toast({
        title: "Fridge Empty!",
        description: "Please add at least one ingredient to generate a recipe.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      const result = await generateRecipeFromIngredients({ ingredients })
      setCurrentRecipe(result)
      // Scroll to recipe
      window.scrollTo({ top: 400, behavior: 'smooth' })
    } catch (error) {
      toast({
        title: "Generation Failed",
        description: "We couldn't cook up a recipe right now. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const toggleFavorite = (recipe: GenerateRecipeFromIngredientsOutput) => {
    const isAlreadyFav = favorites.some((fav) => fav.title === recipe.title)
    if (isAlreadyFav) {
      setFavorites((prev) => prev.filter((fav) => fav.title !== recipe.title))
      toast({
        title: "Removed from favorites",
        description: `${recipe.title} has been removed.`,
      })
    } else {
      setFavorites((prev) => [recipe, ...prev])
      toast({
        title: "Saved to favorites",
        description: `${recipe.title} is now in your collection!`,
      })
    }
  }

  const handleRemoveFavorite = (index: number) => {
    setFavorites((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen pb-20 px-4 md:px-8 bg-background selection:bg-accent selection:text-accent-foreground">
      {/* Header */}
      <header className="max-w-6xl mx-auto pt-12 pb-16 text-center space-y-4">
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary text-white shadow-lg mb-4">
          <UtensilsCrossed className="w-8 h-8" />
        </div>
        <h1 className="text-5xl font-black tracking-tight text-primary font-headline">
          Fridge Feast
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Turn your leftovers into legendary meals. Enter what you have, and our AI chef will do the rest.
        </p>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sidebar: Entry and Favorites */}
        <div className="lg:col-span-4 space-y-8 order-1">
          <IngredientManager
            ingredients={ingredients}
            onAdd={handleAddIngredient}
            onRemove={handleRemoveIngredient}
          />
          
          <Button
            size="lg"
            className="w-full h-16 text-lg font-bold bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl shadow-accent/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:grayscale"
            onClick={handleGenerateRecipe}
            disabled={isLoading || ingredients.length === 0}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                Cooking up ideas...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-6 w-6" />
                Brainstorm Recipe
              </>
            )}
          </Button>

          <FavoritesList
            favorites={favorites}
            onSelect={setCurrentRecipe}
            onRemove={handleRemoveFavorite}
          />
        </div>

        {/* Main Area: Recipe Display */}
        <div className="lg:col-span-8 order-2">
          {currentRecipe ? (
            <RecipeDisplay
              recipe={currentRecipe}
              isFavorite={favorites.some((f) => f.title === currentRecipe.title)}
              onToggleFavorite={() => toggleFavorite(currentRecipe)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center py-24 px-6 border-2 border-dashed border-primary/20 rounded-3xl bg-white/50 text-center space-y-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <ChefHat className="w-10 h-10 opacity-40" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground/80 font-headline">No recipe yet</h3>
                <p className="text-muted-foreground max-w-md">
                  Add some ingredients from your fridge and hit "Brainstorm Recipe" to see the magic happen!
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="max-w-6xl mx-auto mt-24 pt-8 border-t border-primary/10 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Fridge Feast • Created by Owais • Powered by Culinary AI</p>
      </footer>
    </div>
  )
}
