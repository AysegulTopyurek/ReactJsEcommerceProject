import { Wrapper } from "../../components/home/scHome";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getAllCategories } from "../../services/categoryService";
import { getAllProducts } from "../../services/productService";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import { setIsLoading } from "../../store/actions/shopAction";
import { getCategories } from "../../store/actions/categoriesAction";
import { getProducts } from "../../store/actions/productsAction";

const useQuery = () => {
  return new URLSearchParams(useLocation()?.search);
};
const Home = () => {
  const token = useSelector((state) => state.auth.token);

  const query = useQuery();
  const categoryId = query.get("categoryId");
  let products = useSelector((state) => state.product.products) || [];
  let isLoading = useSelector((state) => state.shop.isLoading) || false;
  let categories = useSelector((state) => state.category.categories) || [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsLoading(true));

    getAllCategories().then((res) => {
      dispatch(setIsLoading(false));
      dispatch(getCategories(res.data));
    });
    getAllProducts().then((res) => {
      dispatch(setIsLoading(false));
      dispatch(getProducts(res.data));
    });
  }, [dispatch]);
  if (categoryId) {
    products = products.filter((p) => p.category.id == categoryId);
  }
  const setColor = (item) => {
    return categoryId === item.id ? "#4B9CE2" : "#525252";
  };

  return (
    <Wrapper>
      <Header token={token}></Header>
      <div className="spaceX">
        <div>
          <div style={{display:"flex"}}>
          <div style={{margin:"auto"}}>
            <img
              src={require("../../assets/img/banner.png").default}
              alt="banner"
            />
          </div>
          </div>

  
          <div>
            <ul className="catNav">
              <li>
                <Link
                  style={{
                    color: !categoryId ? "#4B9CE2" : "#525252",
                    fontSize: 18,
                  }}
                  to="/"
                >
                  Hepsi
                </Link>
              </li>

              {categories.map((item) => (
                <li key={item.id}>
                  <Link
                    style={{ color: setColor(item), fontSize: 18 }}
                    to={`/?categoryId=${item.id}`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {isLoading && (
        <div className="loading">
          <div className="spinner">
            <img  src={require("../../assets/img/spinner.svg").default} alt="loading"/>
          </div>
          <div>Ürünler yükleniyor</div>
        </div>
      )}

          <div className="productWrapper">
            {products.map((item) => (
              <Link
                to={`/productDetail?productId=${item.id}`}
                className="product"
                item={item}
                key={item.id}
              >
                <div>
                  <img
                    className="productImage"
                    src={item.imageUrl}
                    alt="ProductImage"
                  />
                </div>
                <div className="productDescription">
                  <div className="brand">{item.brand.title}</div>
                  <div className="variant">Renk: {item.color.title}</div>
                </div>
                <div className="price">{item.price} TL</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Home;
