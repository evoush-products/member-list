import React, { useState, useEffect } from "react";
import { AllProduct } from "../../fetchs";
import { ProductLists } from "../../components";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AllProduct("https://evoush-mock-api.herokuapp.com/products").then(
      (product) => {
        setTimeout(() => {
          setLoading(false);
        }, 2500);
        setProducts(product.data);
      }
    );
  }, [products]);
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-xs-12 col-sm-12">
            <ProductLists
              title="Evoush Products"
              products={products}
              loading={loading}
              setLoading={setLoading}
              className="mt-5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
