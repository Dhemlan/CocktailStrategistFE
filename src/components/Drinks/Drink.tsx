import { useQuery } from "@tanstack/react-query";
import { DrinkModel } from "../../models/DrinkModel";
import { fetchDrink } from "../../http";
import { useParams } from "react-router-dom";
import { getImageURL } from "../../utils/imageUtil";
import Button from "../../UI/Button";
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";

import {
  FaEyeSlash,
  FaPlusCircle,
  FaRegStar,
  FaShareAlt,
} from "react-icons/fa";
import { MdFavoriteBorder, MdOutlineCheckBox } from "react-icons/md";

import { RecipeIngredient } from "../RecipeIngredient";

export function Drink() {
  const { id } = useParams();
  const { data, isError, error } = useQuery<DrinkModel>({
    queryKey: ["ingredients"],
    queryFn: () => fetchDrink(id ?? ""),
  });

  let content;
  if (data) {
    content = (
      <div className="flex max-h-full w-3/4 mx-auto bg-slate-100 m-2 p-2 rounded-lg shadow">
        <img
          src={getImageURL("Japanese Slipper.png")}
          alt={data.name}
          className="max-w-sm min-w-sm"
        />
        <div className="flex-col m-auto ">
          <h2 className="font-bold text-3xl m-2">{data.name}</h2>
          <div>
            <Button onClick={() => {}}>
              <MdFavoriteBorder />
            </Button>
            <Button onClick={() => {}}>
              <MdFavoriteBorder />
            </Button>
            <Button onClick={() => {}}>
              <FaEyeSlash />
            </Button>
            <Button onClick={() => {}}>
              <FaShareAlt />
            </Button>
            <Button onClick={() => {}}>
              <FaPlusCircle />
            </Button>
          </div>
          <div className="flex mx-auto my-3">
            <Button onClick={() => {}}>
              <RiArrowLeftWideLine />
            </Button>
            <div className="mx-5">
              <RecipeIngredient />
              <RecipeIngredient />
              <RecipeIngredient />
            </div>
            <Button onClick={() => {}}>
              <RiArrowRightWideLine />
            </Button>
          </div>
          <div className="flex justify-evenly items-center mx-auto w-3/4">
            <FaRegStar className="mx-auto" />
            <FaRegStar className="mx-auto" />
            <FaRegStar className="mx-auto" />
            <FaRegStar className="mx-auto" />
            <FaRegStar className="mx-auto" />
            <div className="flex items-center mx-auto">
              <MdOutlineCheckBox className=" mr-1 ml-5" />
              <label className="">Set as default</label>
            </div>
          </div>
          <p className="mx-auto my-2 w-3/4">
            Shake with ice and strain into a chilled cocktail glass.
          </p>
          <input type="text" placeholder=" Notes" className="border-2 w-2/3" />
          <p className="mx-auto my-2"> Source: Classic cocktail</p>
        </div>
      </div>
    );
  }
  return <>{content}</>;
}
