import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import { Wrapper } from "../../components/account/scAccount";
import * as localStorageService from "../../services/localStorageService";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { acceptOffer, rejectOffer } from "../../services/accountService";
import { setReceivedOffers } from "../../store/actions/accountAction";
import GivenOffersRow from "../../components/account/givenOffersRow";
import ReceivedOffersRow from "../../components/account/receivedOffersRow";
import { purchaseProduct } from "../../services/productService";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
const Account = () => {
  const token = useSelector((state) => state.auth.token);
  let localStorageUser = localStorageService.getUser();
  const dispatch = useDispatch();
  const [isGive, setGive] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [isReceive, setReceive] = useState(true);
  const givenOffers = useSelector((state) => state.account.givenOffers);
  const receivedOffers =
    useSelector((state) => state.account.receivedOffers) || [];
  useEffect(() => {}, [givenOffers, receivedOffers]);
  const handleChange = (value) => {
    if (value === "given") {
      setGive(true);
      setReceive(false);
    } else {
      setGive(false);
      setReceive(true);
    }
  };
  const acceptGivenOffers = (item) => {
    acceptOffer(item.id).then((res) => {
      dispatch(
        setReceivedOffers([...receivedOffers, { ...item, status: "accepted" }])
      );
      item.status = "accepted";
    });
  };
  const rejectGivenOffers = (item) => {
    rejectOffer(item.id).then((res) => {
      dispatch(
        setReceivedOffers([...receivedOffers, { ...item, status: "rejected" }])
      );
      item.status = "rejected";
    });
  };
  const buyProduct = (item) => {
    purchaseProduct(item.product.id).then((res) => {
      setSuccessMessage(true);
      const timer = setTimeout(() => {
        setSuccessMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    });
  };

  return (
    <Wrapper>
      {successMessage && (
        <div className="successMessage">
          <div className="successIcon">
            <CheckCircleOutlineIcon style={{ color: "#46AF32" }} />
          </div>
          <div className="successDescription">Satın Alındı</div>
        </div>
      )}
      <Header token={token}></Header>
      <div className="userInfo spaceX">
        <AccountCircle style={{ fill: "#ddd", fontSize: "38px" }} />{" "}
        {localStorageUser}
      </div>
      <div className="spaceX bg-white">
        <button
          style={{
            color: isReceive ? "#4B9CE2" : "#B1B1B1",
            fontSize: 15,
            borderBottom: isReceive ? "1px solid #4B9CE2" : "none",
            borderRadius: 0,
          }}
          className="btn"
          onClick={() => handleChange("received")}
        >
          Teklif Aldıklarım
        </button>
        <button
          style={{
            color: isGive ? "#4B9CE2" : "#B1B1B1",
            fontSize: 15,
            borderBottom: isGive ? "1px solid #4B9CE2" : "none",
            borderRadius: 0,
          }}
          className="btn"
          onClick={() => handleChange("given")}
        >
          Teklif Verdiklerim
        </button>
        {isReceive &&
          receivedOffers.map((item) => (
            <ReceivedOffersRow
              key={item.id}
              item={item}
              acceptGivenOffers={acceptGivenOffers}
              rejectGivenOffers={rejectGivenOffers}
            />
          ))}

        {isGive &&
          givenOffers.map((item) => (
            <GivenOffersRow key={item.id} item={item} buyProduct={buyProduct} />
          ))}
      </div>
    </Wrapper>
  );
};
export default Account;
