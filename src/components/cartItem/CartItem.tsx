import { Product } from "../../generated/graphql";
import "./CartItem.scss";
// import ski from '../../assets/ski_rx.png';

function CartItem({ id, name, description, range, image }: Product) {
  return (
    <div className="cartContainer m-3">
      <div className="itemInfo row">
        <div className="itemImgCtnr col-2">
          {/* <img className="skiImage" src={ski} alt=""/> */}
        </div>

        <div className="itemDetails col-5">
          <div className="itemName fw-bold">Ski Rossignol Gold, pour femme</div>
          <div> size : medium </div>
          <div> shop : Isola 2000</div>
        </div>

        <div className="qtyPrice col-5">
          <div className="d-flex justify-content-end fw-bold">€28.00</div>
          <div className="d-flex justify-content-end">select</div>
        </div>
      </div>

      <div className="cartButtons row">
        <div className="space col-2"></div>
        <div className="buttons col-9">
          <button className="btn btn-outline-danger me-1" type="submit">
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
