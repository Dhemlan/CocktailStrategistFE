import { useQuery } from "@tanstack/react-query";
import { IngredientModel } from "../../models/IngredientModel";
import { fetchIngredients } from "../../http";
import { Ingredient } from "./Ingredient";

export function IngredientPanel() {
    const { data, isError, error } = useQuery<IngredientModel[]>({
        queryKey: ["ingredients"],
        queryFn: fetchIngredients,
      });
      let content;

      if (data) {
        content = (
            data.map((ingredient: IngredientModel) => 
                <Ingredient ingredient={ingredient}/>
            )
        )
      }
    return <div>{content}</div>
}