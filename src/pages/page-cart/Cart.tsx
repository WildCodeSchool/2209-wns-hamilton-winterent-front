import './Cart.scss';
import CartItem from '../../components/cartItem/CartItem';
import CartPayment from '../../components/cartPayment/CartPayment';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContextProvider';
import EmptyCart from '../../components/emptyCart/EmptyCart';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-page-image d-flex justify-content-center flex-column align-items-center">
        <div className="text-white d-flex flex-column justify-content-center"></div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75">
          <h3 className="text-primary mt-4">
            <i className="bi bi-chevron-double-down"></i> PANIER
          </h3>
          <div className="d-flex justify-content-around ">
            <div className="components mb-4 article mt-5 p-4">
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => {
                  return (
                    <div key={index}>
                      <CartItem
                        product={item.product}
                        quantity={item.quantity}
                        price={item.price}
                      />
                    </div>
                  );
                })
              ) : (
                <EmptyCart />
              )}

              <div className="d-flex justify-content-between">
                <button
                  className="butBack btn btn-primary"
                  type="button"
                  onClick={() => {
                    navigate('/');
                  }}
                >
                  Retour à l'accueil
                </button>
                {/* <button className="butBack btn btn-primary" type="submit">
                  Tout supprimer
                </button> */}
              </div>
            </div>
            <CartPayment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
