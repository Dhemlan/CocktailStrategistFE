import { RiArrowUpSLine } from "react-icons/ri";
import { getImageURL } from "../utils/imageUtil";
import { FaRegSquarePlus } from "react-icons/fa6";

export function RecipeIngredient() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center">
        <RiArrowUpSLine className="ml-auto" color="rgb(74 222 128)" />
        <p className="text-green-400 text-xs font-bold">1/2</p>
      </div>
      <img
        src={getImageURL("Mojito.png")}
        alt={"placeholder"}
        className="p-3 max-w-12 "
      />
      <p>2 oz</p>
      <p className="mx-2">Melon Liqueur</p>
      <FaRegSquarePlus className="ml-8" />
    </div>
  );
}
