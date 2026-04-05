import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cart/cartSlice";
import { Button } from "@mui/material";

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>

          <input
            type="number"
            value={item.quantity}
            onChange={(e) =>
              dispatch(updateQuantity({
                id: item.id,
                quantity: Number(e.target.value)
              }))
            }
          />

          <Button
            color="error"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </Button>
        </div>
      ))}
    </div>
  );
}