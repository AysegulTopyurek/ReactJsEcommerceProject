import CloseIcon from "@material-ui/icons/Close";
const ProductDetailModal = ({
                               offeredInputRef,
                               currentProduct,
                               handleCloseModal,
                               handleChangeOffer,
                               showTick,
                               sendOfferPrice
                            }) => {
   return (
      <div className="modalWrapper">
         <div className="modal">
            <div className="modalHeader">
               <div className="title">Teklif Ver</div>
               <button style={{background:"transparent",border:"none",cursor:"pointer"}} onClick={() => handleCloseModal()}>
                  <CloseIcon/>
               </button>
            </div>

            <div className="productExcerpt">
               <div className="left">
                  <img src={currentProduct.imageUrl} alt="productImage"/>
                  <div className="productTitle">{currentProduct.title}</div>
               </div>
               <div className="right">
                  <span>{currentProduct.price}</span> TL
               </div>
            </div>
            <div className="radioWrapper" active>
               <input
                  onChange={(e) => handleChangeOffer(e, true)}
                  type="radio"
                  id="twenty"
                  name="offer"
                  value="20"
               />

               <label htmlFor="twenty">
                  {
                     showTick === 20 &&
                     <span className="tick"></span>
                  }

                  %20'si Kadar Teklif Ver</label>
            </div>
            <div className="radioWrapper">
               <input
                  onChange={(e) => handleChangeOffer(e, true)}
                  type="radio"
                  id="thirty"
                  name="offer"
                  value="30"
               />
               <label htmlFor="thirty">
                  {
                     showTick === 30 &&
                     <span className="tick"></span>
                  }%30'u Kadar Teklif Ver</label>
            </div>
            <div className="radioWrapper">
               <input
                  onChange={(e) => handleChangeOffer(e, true)}
                  type="radio"
                  id="fourty"
                  name="offer"
                  value="40"
               />
               <label htmlFor="fourty">
                  {
                     showTick === 40 &&
                     <span className="tick"></span>
                  }
                  %40'ı Kadar Teklif Ver</label>
            </div>
            <div style={{display: "flex", width: "100%"}}>
               <input
                  ref={offeredInputRef}
                  className="setOffer"
                  type="number"
                  id="offer"
                  name="offer"
                  placeholder="Tutar Belirle"
                  onChange={(e) => handleChangeOffer(e, false)}
               />
            </div>
            <div style={{display: "flex"}}>
               <button
                  className="modalBtn btn btn-blue"
                  onClick={() => sendOfferPrice()}
               >
                  Onayla
               </button>
            </div>
         </div>
      </div>
   )
}
export default ProductDetailModal;


