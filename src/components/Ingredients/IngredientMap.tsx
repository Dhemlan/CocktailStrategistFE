import { Link, useNavigate, useParams } from "react-router-dom";
import { IngredientModel } from "../../models/IngredientModel";
import { useQuery } from "@tanstack/react-query";
import { fetchIngredient } from "../../http";
import { getImageURL } from "../../utils/imageUtil";

export function IngredientMap() {
  const { id } = useParams();
  const { data, isError, error } = useQuery<IngredientModel>({
    queryKey: ["ingredients"],
    queryFn: () => fetchIngredient(id ?? ""),
  });
  const navigate = useNavigate();

  let content;

  if (data) {
    content = (
      <div className="flex flex-row justify-center items-center">
        <div className="grid grid-cols-2  columns-auto justify-items-center align-middle">
          {data.drinks?.map((drink) => (
            <div
              onClick={() => navigate("/drink/" + drink.id)}
              className="bg-white max-w-40 m-2 p-2 rounded-lg shadow"
            >
              <img
                src={getImageURL("Mojito.png")}
                alt={drink.name}
                className="p-3 hover:p-1"
              />
              <h2 className="font-bold">{drink.name}</h2>
              <div className="text-sm">
                {`${data.name}, ${drink.ingredients
                  .filter((i) => i != null)
                  .sort((a, b) => a.category - b.category)
                  .map((i) => i.name)
                  .join(", ")}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return <>{content}</>;
}
