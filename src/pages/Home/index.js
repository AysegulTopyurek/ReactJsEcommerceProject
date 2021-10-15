import { Wrapper } from "./scHome";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getAllCategories } from "../../services/categoryService";
import { getAllProducts } from "../../services/productService";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Home = () => {
  const [categoriesList, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const query = useQuery();
  const categoryId = query.get("categoryId");

  useEffect(() => {
    getAllCategories().then((res) => {
      setCategories(res.data);
      console.log("kategoriler", res.data);
    });
  }, []);
  useEffect(() => {
    getAllProducts().then((res) => {
      console.log("productlar", res.data);
      setProducts(res.data);
      if (categoryId) {
        console.log("111");
        let degisen = products.filter((p) => p.category.id == categoryId);
        setProducts([...degisen]);
      }
      console.log("product after if", products);
    });
  }, [categoryId]);

  return (
    <Wrapper>
      <div className="navWrapper">
        <nav>
          <ul className="menu">
            <li>
              <img
                className="logo"
                src={require("../../assets/img/logo.svg").default}
                alt="deneme"
              />
            </li>
            <li>
              <Link className="btn btn-babyBlue" to="/addProduct">
                Ürün ekle
              </Link>
            </li>
            <li>
              <Link className="btn btn-babyBlue" to="/login">
                Giriş yap
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="spaceX">
        <div>
          <div className="banner">
            <img
              src={require("../../assets/img/banner.png").default}
              alt="banner"
            />
          </div>
          <div>
            <ul className="catNav">
              <li>
                <Link to={`/all`}>Hepsi</Link>
              </li>

              {categoriesList.map((item) => (
                <li key={item.id}>
                  <Link to={`/?categoryId=${item.id}`}>{item.title}</Link>
                </li>
              ))}

              <li>
                <Link to="/register">Diğer</Link>
              </li>
            </ul>
          </div>

          <div className="productWrapper">
            {products.map((item) => (
              <div className="product" key={item.id}>
                <div>
                  <img
                    src={require("../../assets/img/pantolon.png").default}
                    alt="deneme"
                  />
                </div>
                <div className="productDescription">
                  <div className="brand">Levi's</div>
                  <div className="variant">Renk: Pink</div>
                </div>
                <div className="price">1.900 TL</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Home;
