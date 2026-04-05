import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { Button, Card, CardContent } from "@mui/material";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Headphones", price: 3000 }
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <Card key={p.id} style={{ margin: 10 }}>
          <CardContent>
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <Button
              variant="contained"
              onClick={() => dispatch(addToCart(p))}
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}