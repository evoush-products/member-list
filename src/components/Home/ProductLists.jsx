import React from "react";

const ProductLists = (props) => {
  const products = props.products;
  return (
    <div>
      <h1>{props.title}</h1>
      {products.map((data) => (
        <h1 className="text-primary" key={data.id}>
          {data.seo.title}
        </h1>
      ))}
    </div>
  );
};

export default ProductLists;
