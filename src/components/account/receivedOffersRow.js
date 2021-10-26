const ReceivedOffersRow = ({ item, acceptGivenOffers, rejectGivenOffers  }) => {
  return (
   
    <div className="accountDetail">
      <div className="left">
        <div className="productImage">
          <img src={item.product.imageUrl} alt="ProductImage" />
        </div>
        <div className="titleAndPrice">
          <h3>{item.product.title}</h3>
          <div className="price">
            <span className="gray">Alınan Teklif: </span>
            <b>{item.offeredPrice} TL</b>
          </div>
        </div>
      </div>

      <div className="right">
        {item.status != "accepted" && item.status === "offered" && item.isSold !=="sold" && (
          <button
            className="btn btn-blue"
            onClick={() => acceptGivenOffers(item)}
          > 
            Onayla
          </button>
        )}
        {item.status != "rejected" && item.status === "offered" &&   item.isSold !=="sold" &&(
          <button
            className="btn btn-red"
            onClick={() => rejectGivenOffers(item)}
          >
            Reddet
          </button>
        )}

        {item.status === "accepted" &&  item.isSold !=="sold" &&<span>Onaylandı</span>}

        {item.status === "rejected" &&  item.isSold !=="sold" &&<span>Reddedildi</span>}
        {item.isSold === "sold" && <span>Satıldı</span>}
      </div>
    </div>
  );
};
export default ReceivedOffersRow;
