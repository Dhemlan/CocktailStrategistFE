import { useNavigate, useParams } from "react-router-dom";
import { DrinkModel } from "../../models/DrinkModel";
import Modal from "../../UI/Modal";
import { DrinkForm } from "./DrinkForm";
import { useMutation, useQuery } from "@tanstack/react-query";
import { editDrink, fetchDrink, queryClient } from "../../http";

export function EditDrink(){
    const { id } = useParams();
    if (!id) {
        return <p>Error</p>;
      }
    const navigate = useNavigate();
    
    const {data} = useQuery<string, Error, DrinkModel>({
        queryKey:["drinks", id],
        queryFn: () => fetchDrink(id)
    })

    const {mutate} = useMutation<DrinkModel, Error, DrinkModel>({
        mutationFn: (drink: DrinkModel) => editDrink(drink),
        onSuccess: () => {queryClient.invalidateQueries({queryKey:["drinks"]})}
    }) 
    
    const submitHandler = (drink: DrinkModel) => {
        mutate(drink);
        navigate("/");
    }

    let content;
    if (data){
        content = (<Modal title="Edit Drink">
            <DrinkForm drink={data} onSubmit={submitHandler}></DrinkForm>
        </Modal>)
    }

    return <>{content}</>
}