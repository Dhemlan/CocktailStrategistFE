import {
  IngredientCategory,
  IngredientModel,
} from "../../models/IngredientModel";
import { getImageURL } from "../../utils/imageUtil";
import { pascalCaseToTitleCase } from "../../utils/stringUtils";

interface IngredientProps {
  ingredient: IngredientModel;
}

export function Ingredient({ ingredient }: IngredientProps) {
  return (
    <>
      <div className="flex-col w-56 bg-white rounded-lg shadow m-2 p-1 py-2">
        <img
          src={getImageURL("Lime.jpg")}
          alt={ingredient.name}
          className="max-w-32 mx-auto"
        />
        <div className="flex justify-center">
          <h2 className="font-bold mr-2">{ingredient.name}</h2>
          <button className="w-6 h-6 border-red-300"></button>
        </div>
        <p className="text-sm">
          {pascalCaseToTitleCase(IngredientCategory[ingredient.category])}
        </p>
      </div>
    </>
  );
}
