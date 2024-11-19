import { Link } from "react-router-dom";

import { IngredientPanel } from "./Ingredients/IngredientPanel";

export function PageTemplate() {
  return (
    <>
      <Link to="/AddDrink">
        <button className="m-1">Add Drink</button>
      </Link>
      <Link to="/AddIngredient">
        <button className="m-1">Add Ingredient</button>
      </Link>

      <IngredientPanel />
    </>
  );
}
