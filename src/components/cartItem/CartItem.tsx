import "./CartItem.scss";
import imgSki from "../../assets/ski_rx.png";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
import { Product } from "../../generated/graphql";

function CartItem({ id, name, range, description, image }: Product) {
  const { removeFromCart } = useContext(ShopContext);
  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <div className="d-flex gap-5">
          <img src={imgSki} alt="" />
          <div className="d-flex flex-column">
            <h5>
              {name} {range}
            </h5>
            <p> size : medium </p>
            <p> shop : Isola 2000</p>
            <button
              className="btn btn-outline-danger"
              type="button"
              onClick={() => removeFromCart(id)}
            >
              Supprimer
            </button>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center">
          <p>28 €</p>
          <select className="form-select">
            <option>Quantité: 1</option>
            <option value="2">Quantité: 2</option>
            <option value="3">Quantité: 3</option>
            <option value="4">Quantité: 4</option>
          </select>
        </div>
      </div>

      <div className="line mb-4"></div>
    </>
  );
}

export default CartItem;
