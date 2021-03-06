const GivenOffersRow = ({ item, buyProduct }) => {
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
      {item.status === "accepted" &&  !item.product.isSold &&(
        <div style={{display:"flex",gap:"1em",alignItems:"center"}}>
          <button
            className="btn btn-blue"
            onClick={() => buyProduct(item)}
          >
            Satın Al
          </button>
          <span>Onaylandı</span>
        </div>
      )}

      {item.status === "rejected" && !item.product.isSold &&<span>Reddedildi</span>}
      {item.product.isSold &&<span>Satıldı</span>}
    </div>
  </div>
  );
};
export default GivenOffersRow;
