import { useQuery } from "@tanstack/react-query";
import { IngredientModel } from "../../models/IngredientModel";
import { fetchIngredients } from "../../http";
import { Ingredient } from "./Ingredient";

export function IngredientPanel() {
    const { data, isError, error } = useQuery<IngredientModel[][]>({
        queryKey: ["ingredients"],
        queryFn: fetchIngredients,
      });
      let content;

      if (data) {
        content = 
          data?.map(category => (
            <ul>
                {category.map(i => <Ingredient ingredient={i}/>) }
            </ul>
          ))
        }
    return <div>{content}</div>
}