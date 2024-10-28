import { useQuery } from "@tanstack/react-query";
import { DrinkModel } from "../../models/DrinkModel";
import ModalButtonGroup from "../../UI/ModalButtonGroup";
import { IngredientModel } from "../../models/IngredientModel";
import { fetchIngredients } from "../../http";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { isDebuggerStatement } from "typescript";

export interface DrinkFormProps {
  drink: DrinkModel;
  onSubmit: (drink: DrinkModel) => void;
  onDelete?: () => void;
}

interface formInput {
  name: string;
  ingredients: IngredientModel[];
}

export function DrinkForm({ drink, onSubmit, onDelete }: DrinkFormProps) {
  const { data, isError, error } = useQuery<IngredientModel[][]>({
    queryKey: ["ingredients"],
    queryFn: fetchIngredients,
  });

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    setError,
  } = useForm<formInput>({ defaultValues: drink });

  const onsubmit: SubmitHandler<formInput> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    data.ingredients = data.ingredients.flat();
    console.log(data);
    //onSubmit(data)
  };
  return (
    <>
      <form onSubmit={handleSubmit(onsubmit)}>
        <input
          {...register("name", { required: "A cocktail needs a name" })}
          placeholder="Drink Name"
          defaultValue={drink?.name}
        />
        {errors.name && <div>{errors.name.message}</div>}
        {data?.map((category, index) => (
          <select {...register(`ingredients.${index}`)} key={index} multiple>
            {category?.map((i) => (
              <option value={i.id} key={i.id}>
                {i.name}
              </option>
            ))}
          </select>
        ))}
        <div className="flex m-2 justify-end px-4 py-3 sm:flex">
          <ModalButtonGroup
            primaryText={drink.id === "" ? "Create Drink" : "Edit Drink"}
            deleteButton={drink.id === "" ? false : true}
            onDelete={onDelete}
          />
          <button
            className="mt-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create Drink"}
          </button>
        </div>
      </form>
    </>
  );
}
