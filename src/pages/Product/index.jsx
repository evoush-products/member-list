import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
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
        console.log(product);
      }
    );
  }, [products]);
  return (
    <>
      <Helmet>
        <title>Product::Evoush</title>
        <link rel="canonical" href="https://evoush-opportunity.netlify.app" />
        <meta name="description" content="{{description}}" />
        <meta name="keywords" content="Evoush Product" />
        <meta name="author" content="evoush" />
        <meta
          property="og:title"
          content="Nutrition And Cosmetics Product By Evoush"
        />
        <meta property="og:description" content="Your Eternal Future" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/evoush-products/bahan_evoush/master/assets/img/LOGO231.png"
        />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta
          property="og:url"
          content="https://evoush-opportunity.netlify.app"
        />
      </Helmet>
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
