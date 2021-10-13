import React, { useState, useEffect } from "react";
import { AllProduct } from "../../fetchs";
import { ProductLists } from "../../components";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    AllProduct("https://evoush-mock-api.herokuapp.com/products").then(
      (product) => setProducts(product.data)
    );
  }, [products]);
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <ProductLists products={products} />
        </div>
      </div>
    </>
  );
};

export default Product;
