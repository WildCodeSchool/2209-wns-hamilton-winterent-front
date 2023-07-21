import './CartItem.scss';
import imgSki from '../../assets/ski_rx.png';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContextProvider';
import { ProductCate } from '../../generated/graphql';

interface ICartItemProps {
  product: ProductCate;
  quantity: number;
  price: number;
}

function CartItem({ product, quantity, price }: ICartItemProps) {
  const { removeFromCart } = useContext(ShopContext);

  return (
    <>
      <div className="cartitem mb-4">
        <div className="test d-flex">
          <img src={product.image ? product.image : imgSki} alt="" />
          <div className="container-infos">
            <div className="description d-flex flex-column">
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
          <div className="container-price d-flex flex-column ">
            <p>{price} €</p>
            <div>Quantité: {quantity}</div>
          </div>
        </div>
      </div>

      <div className="line mb-4"></div>
    </>
  );
}

export default CartItem;
