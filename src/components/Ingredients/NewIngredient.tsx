import { useMutation } from "@tanstack/react-query";
import Modal from "../../UI/Modal";
import { IngredientForm } from "./IngredientForm";
import {
  IngredientModel,
  ingredientModelTemplate,
} from "../../models/IngredientModel";
import { createIngredient, queryClient } from "../../http";
import { useNavigate } from "react-router-dom";

export function NewIngredient() {
  const { mutate } = useMutation<IngredientModel, Error, IngredientModel>({
    mutationFn: (ingredient: IngredientModel) => createIngredient(ingredient),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ingredients"] });
    },
  });

  const navigate = useNavigate();

  const submitHandler = (ingredient: IngredientModel) => {
    mutate(ingredient);
    navigate("/");
  };

  return (
    <Modal title="Add Ingredient">
      <IngredientForm
        ingredient={ingredientModelTemplate}
        onSubmit={submitHandler}
      ></IngredientForm>
    </Modal>
  );
}
