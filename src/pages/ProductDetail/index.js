import React, { useEffect, useState, createRef } from "react";
import { Wrapper } from "../../components/productDetail/scProductDetail";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import { purchaseProduct } from "../../services/productService";
import { sendOffer } from "../../services/productService";
import ProductDetailModal from "../../components/productDetailModal";
import * as accountService from "../../services/accountService";
import { setGivenOffers } from "../../store/actions/accountAction";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
const useQuery = () => {
  return new URLSearchParams(useLocation()?.search);
};
const ProductDetail = () => {
  const [modal, setModal] = useState(false); // teklif ver modalı
  const [soldModal, setSoldModal] = useState(false); // satın al modalı
  const [showTick, setTick] = useState(Number); // checkbox state
  const [currentProduct, setCurrenProduct] = useState({}); // id'den okunan current product
  const [offeredPrice, setOfferedPrice] = useState(Number); // verilen teklif fiyatı
  const [offered, setOffered] = useState(false); //
  const [showSoldToast, setShowSoldToast] = useState(false);
  const [currentOfferId, setCurrentOfferId] = useState(null);
  const token = useSelector((state) => state.auth.token);
  let givenOffers = useSelector((state) => state.account.givenOffers) || [];
  const query = useQuery();
  const offeredInputRef = createRef();
  let products = useSelector((state) => state.product.products) || [];
  const productId = query.get("productId");
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && products && products.length > 0) {
      setCurrenProduct(products.find((p) => p.id === productId));
    }
    let givenOffer = givenOffers.find(
      (g) => g.product.id === currentProduct.id
    );
    setCurrentOfferId(givenOffer ? givenOffer.id : null);
    if (givenOffer) {
      setOffered(true);
      setOfferedPrice(givenOffer.offeredPrice);
    }
  }, [products, currentProduct, productId]);

  const buyProduct = () => {
    purchaseProduct(productId).then((res) => {
      currentProduct.isSold = true;
      setSoldModal(false);
      setTick(false);
      setShowSoldToast(true);
      const timer = setTimeout(() => {
        setShowSoldToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    });
  };
  const handleChangeOffer = (e, isSelected) => {
    e.preventDefault();
    if (isSelected === true) {
      setOfferedPrice((currentProduct.price * Number(e.target.value)) / 100);
      setTick(Number(e.target.value)); //tick alanı
      offeredInputRef.current.value = null;
    } else {
      setOfferedPrice(Number(e.target.value));
      setTick(0);
    }
  };
  const sendOfferPrice = () => {
    sendOffer(productId, offeredPrice).then((res) => {
      setCurrentOfferId(res.data.id);
      handleCloseModal();
      setOffered(true);
      givenOffers.push({
        id: res.data.id,
        offeredPrice: offeredPrice,
        product: currentProduct,
        status: "offered",
      });
      dispatch(setGivenOffers(givenOffers));
    });
  };

  const cancelOffer = () => {
    accountService.cancelOffer(currentOfferId).then((res) => {
      //başarılı
      givenOffers = givenOffers.filter((g) => g.id !== currentOfferId);
      dispatch(setGivenOffers(givenOffers));
      setOffered(false);
      setOfferedPrice(0);
    });
  };

  const handleCloseModal = () => {
    setModal(false);
    setTick(false);
  };

  if (!currentProduct || currentProduct === {}) {
    return <div>deneme</div>;
  }

  return (
    <Wrapper>
      {showSoldToast && (
        <div className="successMessage">
          <div className="successIcon">
            <CheckCircleOutlineIcon style={{ color: "#46AF32" }} />
          </div>
          <div className="successDescription">Satın alındı</div>
        </div>
      )}
      <Header token={token}></Header>
      <div className="productPage spaceX">
        <div className="productDetail">
          <div className="productImage">
            <img src={currentProduct.imageUrl} alt="ProductImage" />
          </div>
          <div className="text">
            <h1>{currentProduct.title}</h1>
            <div className="info">
              <div>Marka</div>
              <span>{currentProduct.brand?.title}</span>
            </div>
            <div className="info">
              <div>Renk</div>
              <span>{currentProduct.color?.title}</span>
            </div>
            <div className="info">
              <div>Kullanılma durumu</div>
              <span>{currentProduct.status?.title}</span>
            </div>

            <div className="price">
              <span>{currentProduct.price}</span> TL
            </div>

            {offered && !currentProduct.isSold && (
              <div className="offerPrice">
                <span>Verilen Teklif:</span>
                <span>{offeredPrice}</span>TL
              </div>
            )}

            <div className="btnSet">
              {currentProduct.isSold && (
                <button className="btn btn-orange">
                  Bu Ürün Satışta Değil
                </button>
              )}
              {!currentProduct.isSold && (
                <button
                  className="btn btn-blue"
                  onClick={() => setSoldModal(true)}
                >
                  Satın Al
                </button>
              )}
              {!currentProduct.isSold &&
                currentProduct.isOfferable &&
                !offered && (
                  <button
                    onClick={() => setModal(true)}
                    className="btn btn-babyBlue"
                  >
                    Teklif Ver
                  </button>
                )}
              {offered && !currentProduct.isSold && (
                <button
                  onClick={() => cancelOffer()}
                  className="btn btn-babyBlue"
                >
                  Teklifi Geri Çek
                </button>
              )}
            </div>

            <div className="descriptionWrapper">
              <div>Açıklama</div>
              <span>{currentProduct.description}</span>
            </div>
          </div>
        </div>
      </div>

      {soldModal && (
        <div className="modalWrapper">
          <div className="modal center">
            <div className="modalHeader">
              <div className="title">Satın Al</div>
            </div>
            <div className="modalBody">Satın almak istiyor musunuz?</div>
            <div className="btnSet">
              <button
                className="btn btn-babyBlue"
                onClick={() => setSoldModal(false)}
              >
                Vazgeç
              </button>
              <button className="btn btn-blue" onClick={() => buyProduct()}>
                Satın al
              </button>
            </div>
          </div>
        </div>
      )}

      {modal && (
        <ProductDetailModal
          offeredInputRef={offeredInputRef}
          currentProduct={currentProduct}
          handleCloseModal={handleCloseModal}
          handleChangeOffer={handleChangeOffer}
          showTick={showTick}
          sendOfferPrice={sendOfferPrice}
        />
      )}
    </Wrapper>
  );
};
export default ProductDetail;
