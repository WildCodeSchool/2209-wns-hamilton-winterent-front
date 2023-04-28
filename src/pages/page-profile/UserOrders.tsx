import skiIcon from "../../assets/skiIcon.png";

function UserOrders() {
  return (
    <div>
      <div className="card m-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src={skiIcon}
              className="img-fluid rounded-start m-3"
              style={{ maxWidth: "100px" }}
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Commande N° : ****</h5>
              <p className="card-text">Date de la commande : **/**/****</p>
              <p className="card-text">
                Dates de location : du **/**/**** au **/**/****
              </p>
              <p className="card-text">Statut : ********</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserOrders;
