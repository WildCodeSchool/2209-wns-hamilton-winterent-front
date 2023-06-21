function EmptyCart() {
  return (
    <>
      <div className="card mb-4">
        <div className="card-body d-flex flex-column align-items-center">
          <i className="bi bi-cart fs-1"></i>
          <h5 className="card-title p-3">Le panier est vide !</h5>
        </div>
      </div>
    </>
  );
}
export default EmptyCart;
