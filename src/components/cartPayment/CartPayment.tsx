import { useContext, useEffect, useState } from "react";
import "./CartPayment.scss";
import { ShopContext } from "../../context/ShopContextProvider";

const CartPayment = () => {
  const { cartItems } = useContext(ShopContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const updateTotal = () => {
      const result = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      console.log(result);
      setTotal(result);
    };
    updateTotal();
  }, [cartItems]);

  return (
    <div className="my-2 mt-5">
      <div className="bloc p-4">
        {/* <div className="d-flex justify-content-between">
          <p>Subtotal:</p>
          <p>€1403.22</p>
        </div> */}
        {/* <div className="d-flex justify-content-between">
          <p>Discount:</p>
          <p className="text-danger">- €60.00</p>
        </div> */}
        {/* <div className="d-flex justify-content-between">
          <p>Tax:</p>
          <p className="text-success">+ €14.00</p>
        </div> */}
        <div className="d-flex justify-content-between mt-2">
          <h5>Total: </h5>
          <h5>{total} €</h5>
        </div>
        <div className="line"></div>
        <div className="text d-flex justify-content-center my-4 ">
          Taxes incluses. Détails de la réservation et modalités de paiement à
          l'étape suivante
        </div>
        <div className="d-flex justify-content-center mt-2">
          <button className="btn btn-success">Réserver</button>
        </div>
      </div>
    </div>
  );
};

export default CartPayment;
