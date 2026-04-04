import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product List</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {products.map((p) => (
        <div key={p._id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <h3>{p.name}</h3>
          <p>Price: ₹{p.price}</p>
          <img src={p.image} width="100" alt="product"/>
        </div>
      ))}
    </div>
  );
}

export default App;