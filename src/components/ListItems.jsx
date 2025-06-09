import { useDispatch } from "react-redux";
import { addItems } from "./utils/slice/cartSlice";
import { useLocation } from "react-router";

const ListItems = ({ listData }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <div className="my-2">
      <div className="flex justify-between items-center">
        <div>
          <div className="flex gap-2 items-center">
            <div className="text-base">{listData?.name}</div>
            <div>- ₹{(listData?.defaultPrice || listData?.price) / 100}</div>
          </div>
          <div className="text-xs my-4 text-gray-700">
            {listData?.description}
          </div>
        </div>
        {!location.pathname.includes("cart") && (
          <button
            className="bg-pink-600 text-white p-2 cursor-pointer rounded-md"
            onClick={() => dispatch(addItems(listData))}
          >
            Add+
          </button>
        )}
      </div>
      <hr className="text-gray-400 my-4" />
    </div>
  );
};

export default ListItems;
