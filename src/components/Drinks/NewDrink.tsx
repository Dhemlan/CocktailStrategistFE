
import { useMutation } from "@tanstack/react-query";
import { DrinkModel, drinkModelTemplate } from "../../models/DrinkModel";
import Modal from "../../UI/Modal";
import { DrinkForm } from "./DrinkForm";
import { createDrink, queryClient } from "../../http";
import { useNavigate } from "react-router-dom";


export function NewDrink(){
    const {mutate} = useMutation<DrinkModel, Error, DrinkModel>({
        mutationFn: (drink: DrinkModel) => createDrink(drink),
        onSuccess: () => {queryClient.invalidateQueries({queryKey:["drinks"]})}
    }) 

    const navigate = useNavigate();

    const submitHandler = (drink: DrinkModel) => {
       mutate(drink);
       navigate("/");
    }

    return <Modal title="Add Drink">
        <DrinkForm drink={drinkModelTemplate} onSubmit={submitHandler}></DrinkForm>
    </Modal>
}