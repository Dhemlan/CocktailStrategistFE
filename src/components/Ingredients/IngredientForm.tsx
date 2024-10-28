import { SubmitHandler, useForm } from "react-hook-form";
import { IngredientModel } from "../../models/IngredientModel";
import ModalButtonGroup from "../../UI/ModalButtonGroup";

export interface IngredientFormProps {
  ingredient: IngredientModel;
  onSubmit: (ingredient: IngredientModel) => void;
  onDelete?: () => void;
}
export function IngredientForm({
  ingredient,
  onSubmit,
  onDelete,
}: IngredientFormProps) {
  interface formInput {
    name: string;
    category: number;
    isAvailable: boolean;
  }

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    setError,
  } = useForm<formInput>({ defaultValues: ingredient });

  const onsubmit: SubmitHandler<formInput> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <input
        {...register("name", { required: "An ingredient needs a name" })}
        placeholder="Ingredient Name"
        defaultValue={ingredient?.name}
      />
      <input
        {...register("isAvailable")}
        type="checkbox"
        defaultChecked={ingredient.isAvailable}
      />
      <select {...register("category")} />
      <div className="flex m-2 justify-end px-4 py-3 sm:flex">
        <ModalButtonGroup
          primaryText={
            ingredient.id === "" ? "Create Ingredient" : "Edit Ingredient"
          }
          deleteButton={ingredient.id === "" ? false : true}
          onDelete={onDelete}
        />
        <button
          className="mt-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating..." : "Create Ingredient"}
        </button>
      </div>
    </form>
  );
}
