import "./CartItem.scss";
import imgSki from "../../assets/ski_rx.png";
import { ChangeEvent, useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
import { ProductCate } from '../../generated/graphql';

interface ICartItemProps {
  product: ProductCate;
  quantity: number;
  price: number;
}

function CartItem({ product, quantity, price }: ICartItemProps) {
  const { removeFromCart } = useContext(ShopContext);
  const [selecetdQuantity, setSelectedQuantity] = useState(quantity);

  const handleQuantityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const quantity = parseInt(event.target.value);
    setSelectedQuantity(quantity);
  };

  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <div className="d-flex gap-5">
          <img src={imgSki} alt="" />
          <div className="d-flex flex-column">
            <h5>
              {product.name} {product.range}
            </h5>
            <p> size : medium </p>
            <p> shop : Isola 2000</p>
            <button
              className="btn btn-outline-danger"
              type="button"
              onClick={() => removeFromCart(product.id)}
            >
              Supprimer
            </button>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center">
          <p>{price} €</p>
          <select
            className="form-select"
            value={selecetdQuantity}
            onChange={handleQuantityChange}
          >
            <option>Quantité: 1</option>
            <option value={2}>Quantité: 2</option>
            <option value={3}>Quantité: 3</option>
            <option value={4}>Quantité: 4</option>
          </select>
        </div>
      </div>

      <div className="line mb-4"></div>
    </>
  );
}

export default CartItem;
