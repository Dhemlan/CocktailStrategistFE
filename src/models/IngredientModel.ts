export interface IngredientModel {
  id: string;
  name: string;
  isAvailable: boolean;
  category: number;
}

export const ingredientModelTemplate: IngredientModel = {
  id: "",
  name: "",
  isAvailable: false,
  category: -1,
};
