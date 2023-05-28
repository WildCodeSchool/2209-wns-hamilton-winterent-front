import './Cart.scss';
import CartItem from '../../components/cartItem/CartItem';

const Cart = () => {
    return (
        <div className="cart">
            <div className="cart-page-image d-flex justify-content-center flex-column align-items-center">
                <div className="text-white d-flex flex-column justify-content-center"></div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75">
                    <h3 className="text-primary">
                        <i className="bi bi-chevron-double-down"></i> PANIER
                    </h3>
                    <CartItem/>
                </div>
            </div>
        </div>
    );
}

export default Cart;
