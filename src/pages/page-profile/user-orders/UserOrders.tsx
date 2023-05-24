import skiIcon from "../../../assets/skiIcon.png";
import "./UserOrders.scss";

interface IOrder {
  id: number;
  date: string;
  status: string;
  bookingStartDate: string;
  bookingEndDate: string;
}

function UserOrders() {
  // faire un state de mon tableau d'order avec la valeur du statut pour chaque commande ?
  const orders: IOrder[] = [
    {
      id: 1,
      date: "31/02/2022",
      status: "Terminée",
      bookingEndDate: "02/03/2022",
      bookingStartDate: "15/03/2022",
    },
    {
      id: 2,
      date: "12/02/2023",
      status: "En cours",
      bookingEndDate: "01/01/2024",
      bookingStartDate: "10/01/2024",
    },
    {
      id: 3,
      date: "12/02/2023",
      status: "Annulé",
      bookingEndDate: "01/01/2024",
      bookingStartDate: "10/01/2024",
    },
  ];

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <h2>Vos commandes</h2>

        {orders.map((order) => (
          <div className="card border-info m-3 cardStyle" key={order.id}>
            <div className="row g-0">
              <div className="col-md-3 ">
                <img
                  src={skiIcon}
                  className="img-fluid rounded-start m-3 d-none d-sm-block"
                  style={{ maxWidth: "70px" }}
                  alt="..."
                />
              </div>
              <div className="col-md-8 ">
                <div className="card-body">
                  <h5 className="card-title">Commande N° : 0000</h5>
                  <p className="card-text">Date de la commande :{order.date}</p>
                  <p className="card-text">
                    Dates de location : du {order.bookingStartDate} au{" "}
                    {order.bookingEndDate}
                  </p>
                  <p className="card-text">
                    Statut :&nbsp;
                    <span>
                      {order.status === "En cours" && (
                        <span className="badge rounded-pill bg-primary">
                          {order.status}
                        </span>
                      )}
                      {order.status === "Terminée" && (
                        <span className="badge rounded-pill bg-success">
                          {order.status}
                        </span>
                      )}
                      {order.status === "Annulé" && (
                        <span className="badge rounded-pill bg-danger">
                          {order.status}
                        </span>
                      )}
                    </span>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Reste à régler : 0</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserOrders;
