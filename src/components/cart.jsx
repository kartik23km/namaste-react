import { TrashIcon } from "@heroicons/react/24/solid";
import ListItems from "./ListItems";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./utils/slice/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const cartCards = cartItem.map((el) => {
    return (
      <div
        className="p-5 my-2 rounded-lg w-1/2 bg-pink-50 text-left"
        key={el.id}
      >
        <ListItems listData={el} />
      </div>
    );
  });

  return (
    <div className="text-center">
      <div className="flex gap-x-5 items-baseline justify-center">
        <div className="mt-5 text-2xl font-medium">Cart</div>
        <button
          className="p-2 bg-pink-200 rounded-xl cursor-pointer"
          onClick={() => dispatch(clearCart())}
        >
          Clear cart
        </button>
      </div>
      <hr className="my-5 mx-5" />
      {cartItem.length > 0 ? (
        <div className="flex flex-col items-center">{cartCards}</div>
      ) : (
        <div className="text-xl"> No Items Available in cart</div>
      )}
    </div>
  );
};
export default Cart;
