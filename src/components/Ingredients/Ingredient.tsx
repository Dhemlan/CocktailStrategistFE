import { IngredientModel } from "../../models/IngredientModel";

interface IngredientProps {
    ingredient: IngredientModel;
}

export function Ingredient({ingredient}: IngredientProps){
    return <>
    <button>{ingredient.isAvailable}</button>
    {ingredient.name}</>
}