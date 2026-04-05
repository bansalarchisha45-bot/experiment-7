import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className="text-center mt-5">Loading...</h2>;

  if (error) return <h2 className="text-danger text-center">{error}</h2>;

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Product List</h2>

      <div className="row">
        {products.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4 shadow">
              <img src={item.image} className="card-img-top" alt="product" />
              <div className="card-body text-center">
                <h5>{item.name}</h5>
                <p>₹ {item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;