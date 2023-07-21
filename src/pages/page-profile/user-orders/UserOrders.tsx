import { useState } from "react";
import skiIcon from "../../../assets/skiIcon.png";
import "./UserOrders.scss";
import { useQuery } from "@apollo/client";
import { USER_ORDERS } from "../../../graphql/queries/usersQueries";
import { useLogin } from "../../../context/LoginProvider";

interface IOrder {
  id: string;
  date: Date;
  status: string;
  user: {
    id: string;
  };
  total: number;
  bookings: [
    {
      id: string;
      startDate: string;
      endDate: string;
      price: number;
    }
  ];
}

function UserOrders() {
  const { userLog } = useLogin();
  const [orders, setOrders] = useState<IOrder[]>([]);

  useQuery(USER_ORDERS, {
    variables: { userId: userLog?.user.id },
    onCompleted(data) {
      const fetchOrders: IOrder[] = data.getOrderByUserId;
      const updatedOrders: IOrder[] = fetchOrders.map((order) => ({
        ...order,
        total: order.bookings.reduce(
          (total, booking) => total + booking.price,
          0
        ),
      }));
      updatedOrders.sort((a, b) => {
        const dateA: Date = new Date(a.date);
        const dateB: Date = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      });

      setOrders(updatedOrders);
    },
  });

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <h2>Vos commandes</h2>

        {orders.map((order) => (
          <div className="box card m-3 cardStyle" key={order.id}>
            <div className="row g-0">
              <div className="col-sm-3 ">
                <img
                  src={skiIcon}
                  className="ski img-fluid rounded-start m-3 d-none d-sm-block"
                  alt="..."
                />
              </div>
              <div className="col-sm-8 ">
                <div className="card-body text-black">
                  <h5 className="card-title">
                    Commande N° : {order.id.substring(0, 5)}
                  </h5>
                  <p className="card-text">
                    Date de la commande : {order.date.toString()}
                  </p>
                  <p className="card-text">
                    <small className="text-black">
                      Total de la commande : {order.total} €
                    </small>
                    <br></br>
                    {/* <small className="text-muted">Reste à régler : 0</small> */}
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
