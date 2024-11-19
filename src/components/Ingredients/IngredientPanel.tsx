import { useQuery } from "@tanstack/react-query";
import { IngredientModel } from "../../models/IngredientModel";
import { fetchIngredients } from "../../http";
import { Ingredient } from "./Ingredient";
import { useNavigate } from "react-router-dom";

export function IngredientPanel() {
  const { data, isError, error } = useQuery<IngredientModel[][]>({
    queryKey: ["ingredients"],
    queryFn: fetchIngredients,
  });

  const navigate = useNavigate();

  let content;

  if (data) {
    content = data?.map((category) => (
      <div className="flex flex-wrap" key={category[0].category}>
        {category.map((i) => (
          <div onClick={() => navigate("/map/" + i.id)} key={i.id}>
            <Ingredient ingredient={i} />
          </div>
        ))}
      </div>
    ));
  }
  return <div>{content}</div>;
}
