"use client"

import * as React from "react"
import { Plus, Trash2, Refrigerator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface IngredientManagerProps {
  ingredients: string[]
  onAdd: (ingredient: string) => void
  onRemove: (index: number) => void
}

export function IngredientManager({ ingredients, onAdd, onRemove }: IngredientManagerProps) {
  const [inputValue, setInputValue] = React.useState("")

  const handleAdd = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (inputValue.trim()) {
      onAdd(inputValue.trim())
      setInputValue("")
    }
  }

  return (
    <Card className="w-full shadow-md border-primary/20 bg-white">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-primary font-headline">
          <Refrigerator className="w-5 h-5" />
          My Fridge
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleAdd} className="flex gap-2">
          <Input
            placeholder="Add ingredient (e.g. Eggs, Kale, Tofu)"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="focus-visible:ring-primary border-primary/20"
          />
          <Button type="submit" size="icon" className="shrink-0 bg-primary hover:bg-primary/90 text-white">
            <Plus className="w-5 h-5" />
          </Button>
        </form>

        <div className="flex flex-wrap gap-2">
          {ingredients.length === 0 ? (
            <p className="text-sm text-muted-foreground italic py-2">
              Your fridge is empty. Add some ingredients to get started!
            </p>
          ) : (
            ingredients.map((item, idx) => (
              <Badge
                key={`${item}-${idx}`}
                variant="secondary"
                className="pl-3 pr-1 py-1 flex items-center gap-1 text-sm bg-secondary border-none hover:bg-secondary/80 transition-colors"
              >
                {item}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5 hover:bg-destructive hover:text-white rounded-full transition-colors"
                  onClick={() => onRemove(idx)}
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              </Badge>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}