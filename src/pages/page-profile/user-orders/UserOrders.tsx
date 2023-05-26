import { useState } from "react";
import skiIcon from "../../../assets/skiIcon.png";
import "./UserOrders.scss";
import { useQuery } from "@apollo/client";
import { USER_ORDERS } from "../../../graphql/queries/usersQueries";
import { useLogin } from "../../../context/LoginProvider";
import { Order } from "../../../generated/graphql";

// interface IOrder {
//   id: number;
//   date: string;
//   status: string;
//   bookingStartDate: string;
//   bookingEndDate: string;
// }

function UserOrders() {
  const { userLog } = useLogin();

  const { loading, error, data } = useQuery<Order[]>(USER_ORDERS, {
    variables: { userId: userLog?.user.id },
  });
  //console.log(data);

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <h2>Vos commandes</h2>

        {/* {orders?.map((order) => (
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
                  <p className="card-text">Date de la commande :{order.date}</p> */}
        {/* <p className="card-text">
                    Dates de location : du {order.bookingStartDate} au{" "}
                    {order.bookingEndDate}
                  </p> */}
        {/* <p className="card-text">
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
                  </p> */}
        {/* <p className="card-text">
                    <small className="text-muted">Reste à régler : 0</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </>
  );
}

export default UserOrders;
