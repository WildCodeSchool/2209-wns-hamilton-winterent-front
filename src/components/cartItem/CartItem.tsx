import { useContext } from "react";
import { Product } from "../../generated/graphql";
import "./CartItem.scss";
import { ShopContext } from "../../context/ShopContextProvider";
// import ski from '../../assets/ski_rx.png';

function CartItem({ id, name, description, range, image }: Product) {
  const { removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartContainer m-3">
      <div className="itemInfo row">
        <div className="itemImgCtnr col-2">
          {/* <img className="skiImage" src={ski} alt=""/> */}
        </div>

        <div className="col-5">
          <div className="itemName fw-bold">
            {name} {range}
          </div>
          <div> size : medium </div>
          <div> shop : Isola 2000</div>
        </div>

        <div className="col-5">
          <div className="d-flex justify-content-end fw-bold">€28.00</div>
          <div className="d-flex justify-content-end">select</div>
        </div>
      </div>

      <div className=" row">
        <div className="space col-2"></div>
        <div className="buttons col-9">
          <button
            className="btn btn-outline-danger me-1"
            type="submit"
            onClick={() => removeFromCart(id)}
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
