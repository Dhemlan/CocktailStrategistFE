import { Link } from "react-router-dom";

import { IngredientPanel } from "./Ingredients/IngredientPanel";

export function PageTemplate() {
  return (
    <>
      <IngredientPanel />

      <Link to="/AddDrink">
        <button>Add Drink</button>
      </Link>
      <Link to="/AddIngredient">
        <button>Add Ingredient</button>
      </Link>
    </>
  );
}
