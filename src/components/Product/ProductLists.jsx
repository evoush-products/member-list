import React, { useState, useEffect } from "react";
import { Loading } from "../Molecules";

const ProductLists = (props) => {
  const [products, setProducts] = useState([]);
  let [page, setPage] = useState(1);
  let loading = props.loading;
  let setLoading = props.setLoading;

  useEffect(() => {
    switch (page) {
      case 1:
        setProducts(props.products.slice(0, 6));
        break;

      case 2:
        setProducts(props.products.slice(6, 12));
        break;

      case 3:
        setProducts(props.products.slice(12, 14));
        break;
    }
  }, [products]);
  return (
    <div class="content-product">
      {loading ? (
        <div className="row justify-content-center">
          <Loading anim="https://thumbs.gfycat.com/AdoredRawHaddock-size_restricted.gif" />
        </div>
      ) : (
        <>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xs-8 col-sm-12 mb-5 mt-5">
              <h1 className="text-center">{props.title}</h1>
              <p>
                Evoush didukung dengan brand-brand product kosmetik dan nutrisi
                yang kami produksi di pabrik sendiri, yang kualitas dan
                manfaatnya telah terbukti menjadi alasan kuat untuk membawa anda
                menuju kesuksesan yang gilang-gemilang. <br />
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            {products.map((product) => (
              <div className="col-md-4">
                <div className="card mb-3 card-product">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={product.assets[0].url} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{product.seo.title}</h5>
                        <p className="card-text">{product.seo.description}</p>

                        <a
                          href={`https://evoush.com/product/${product.permalink}`}
                          class="btn btn-outline-success rounded-pill"
                          target="_blank"
                        >
                          View Product
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                  <li
                    className={page <= 1 ? "page-item disabled" : "page-item"}
                    onClick={() => {
                      setLoading(true);
                      setPage(page >= 1 ? (page -= 1) : page);
                    }}
                  >
                    <a class="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li
                    className={page >= 3 ? "page-item disable" : "page-item"}
                    onClick={() => {
                      setLoading(true);
                      setPage(page >= 3 ? page : (page += 1));
                    }}
                  >
                    <a class="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductLists;
