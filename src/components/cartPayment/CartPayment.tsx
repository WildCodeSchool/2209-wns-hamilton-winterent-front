import "./CartPayment.scss";

const CartPayment = () => {
  return (
    <div>
      <div className="bloc p-2">
        <div className="d-flex justify-content-between">
          <p>Subtotal:</p>
          <p>€1403.22</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Discount:</p>
          <p className="text-danger">- €60.00</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Tax:</p>
          <p className="text-success">+ €14.00</p>
        </div>
        <div className="line"></div>
        <div className="d-flex justify-content-between">
          <h5>Total: </h5>
          <h5>€1355.30</h5>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <button className="btn btn-success">Valider</button>
        </div>
      </div>
    </div>
  );
};

export default CartPayment;
