import { useNavigate } from "react-router-dom";

interface ModalButtonGroupProps {
  primaryText: string;
  deleteButton: boolean;
  onDelete?: () => void;
}

function ModalButtonGroup({
  primaryText,
  deleteButton,
  onDelete,
}: ModalButtonGroupProps) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row-reverse justify-between">
      <div className="px-4 py-3 sm:flex">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="mt-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        >
          Cancel
        </button>
      </div>
      {deleteButton && onDelete && (
        <div className="px-4 py-3">
          <button
            type="button"
            onClick={onDelete!}
            className=" rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
export default ModalButtonGroup;
