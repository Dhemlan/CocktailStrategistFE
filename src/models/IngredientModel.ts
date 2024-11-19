import { DrinkModel } from "./DrinkModel";

export interface IngredientModel {
  id?: string;
  name: string;
  isAvailable: boolean;
  category: IngredientCategory;
  drinks?: DrinkModel[];
}

export enum IngredientCategory {
  BaseSpirits,
  SecondaryBaseSpirits,
  Fermented,
  FruitLiqueurs,
  BotanicalLiqueurs,
  SpiceAndNutLiqueurs,
  DessertLiqueurs,
  Citrus,
  SyrupsAndSweeteners,
  BittersAndWaters,
  ProduceAndJuice,
  DairyAndEggs,
  SoftDrinks,
  HerbsAndSpices,
  Pantry,
  Other,
}

export const ingredientModelTemplate: IngredientModel = {
  id: "",
  name: "",
  isAvailable: false,
  category: IngredientCategory.BaseSpirits,
};
