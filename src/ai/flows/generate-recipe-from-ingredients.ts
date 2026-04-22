'use server';
/**
 * @fileOverview A recipe generation AI agent.
 *
 * - generateRecipeFromIngredients - A function that handles the recipe generation process.
 * - GenerateRecipeFromIngredientsInput - The input type for the generateRecipeFromIngredients function.
 * - GenerateRecipeFromIngredientsOutput - The return type for the generateRecipeFromIngredients function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateRecipeFromIngredientsInputSchema = z.object({
  ingredients: z
    .array(z.string())
    .describe('A list of ingredients available in the fridge.'),
});
export type GenerateRecipeFromIngredientsInput = z.infer<
  typeof GenerateRecipeFromIngredientsInputSchema
>;

const GenerateRecipeFromIngredientsOutputSchema = z.object({
  title: z.string().describe('The title of the generated recipe.'),
  ingredients: z
    .array(
      z.object({
        name: z.string().describe('The name of the ingredient.'),
        quantity: z.string().describe('The quantity of the ingredient.'),
      })
    )
    .describe('A list of ingredients with their quantities required for the recipe.'),
  instructions: z
    .array(z.string())
    .describe('Step-by-step cooking instructions for the recipe.'),
});
export type GenerateRecipeFromIngredientsOutput = z.infer<
  typeof GenerateRecipeFromIngredientsOutputSchema
>;

export async function generateRecipeFromIngredients(
  input: GenerateRecipeFromIngredientsInput
): Promise<GenerateRecipeFromIngredientsOutput> {
  console.log('[RecipeFlow] Starting generation for ingredients:', input.ingredients);
  
  // Basic environment check for logs
  if (!process.env.GOOGLE_GENAI_API_KEY && !process.env.GEMINI_API_KEY) {
    console.error('[RecipeFlow] CRITICAL: No AI API Key found in environment variables. Check Firebase App Hosting Secrets.');
  }

  try {
    const result = await generateRecipeFromIngredientsFlow(input);
    console.log('[RecipeFlow] Successfully generated recipe:', result.title);
    return result;
  } catch (error: any) {
    console.error('[RecipeFlow] Error encountered:', {
      message: error.message,
      stack: error.stack,
    });
    
    // Check for common auth errors
    if (error.message?.includes('API_KEY_INVALID') || error.message?.includes('403')) {
      throw new Error('AI authentication failed. Please verify your API key in Firebase Secrets.');
    }
    
    throw new Error(error.message || 'The AI chef is currently unavailable. Please try again soon.');
  }
}

const prompt = ai.definePrompt({
  name: 'generateRecipeFromIngredientsPrompt',
  input: { schema: GenerateRecipeFromIngredientsInputSchema },
  output: { schema: GenerateRecipeFromIngredientsOutputSchema },
  config: {
    temperature: 0.8,
  },
  prompt: `You are a world-class creative chef. Based on the ingredients provided, generate a delicious and creative recipe. \
  Include a catchy title, a detailed list of ingredients with suggested quantities, and clear, step-by-step cooking instructions.

Ingredients available: 
{{#each ingredients}}
- {{{this}}}
{{/each}}`,
});

const generateRecipeFromIngredientsFlow = ai.defineFlow(
  {
    name: 'generateRecipeFromIngredientsFlow',
    inputSchema: GenerateRecipeFromIngredientsInputSchema,
    outputSchema: GenerateRecipeFromIngredientsOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('The AI model failed to produce a recipe output.');
    }
    return output;
  }
);
