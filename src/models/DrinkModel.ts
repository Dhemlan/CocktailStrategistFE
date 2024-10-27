import { IngredientModel } from "./IngredientModel";

export interface DrinkModel{
    id?: string,
    name: string,
    ingredients: IngredientModel[]
}

export const drinkModelTemplate:DrinkModel = {
    id: "",
    name: "",
    ingredients: []

}