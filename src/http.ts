import { QueryClient } from "@tanstack/react-query";
import { DrinkModel } from "./models/DrinkModel";
import { IngredientModel } from "./models/IngredientModel";

export const queryClient = new QueryClient();

const BASE_URL = "http://localhost:5213";

export async function fetchIngredients() {
  const response = await fetch(`${BASE_URL}/ingredient`);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching ingredients");
    throw error;
  }
  const resData = await response.json();
  return resData;
}

export async function fetchIngredient(id: string) {
  const response = await fetch(`${BASE_URL}/ingredient/map/${id}`);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the ingredient");
    throw error;
  }
  const resData = await response.json();
  return resData;
}

export async function createIngredient(ingredientData: IngredientModel) {
  const response = await fetch(`${BASE_URL}/ingredient`, {
    method: "POST",
    body: JSON.stringify(ingredientData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    handleError("An error occurred while adding the ingredient");
  }
  const { ingredient } = await response.json();
  return ingredient;
}

export async function fetchDrink(id: string) {
  const response = await fetch(`${BASE_URL}/drink/${id}`);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching drink");
    throw error;
  }
  const resData = await response.json();
  return resData;
}

export async function createDrink(drinkData: DrinkModel) {
  const response = await fetch(`${BASE_URL}/drink`, {
    method: "POST",
    body: JSON.stringify(drinkData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    handleError("An error occurred while adding the drink");
  }
  const { drink } = await response.json();
  return drink;
}

export async function editDrink(drinkData: DrinkModel) {
  const response = await fetch(`${BASE_URL}/drink/${drinkData.id}`, {
    method: "PUT",
    body: JSON.stringify(drinkData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    handleError("An error occurred while editing the drink");
  }
  const { drink } = await response.json();
  return drink;
}

function handleError(message: string) {
  const error = new Error(message);
  throw error;
}
