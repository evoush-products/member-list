import React from "react";

const ProductLists = (props) => {
  const products = props.products;
  console.log(products);
  return (
    <div>
      {products.map((product) => (
        <>
          <div className="col-lg-4 col-xs-12 col-sm-12">
            <div className="card card-about mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={product.assets[0].url}
                    className="img-fluid rounded-start"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ProductLists;
