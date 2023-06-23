import { useContext, useEffect, useState } from "react";
import "./CartPayment.scss";
import { ShopContext } from "../../context/ShopContextProvider";
import { useMutation } from "@apollo/client";
import { ADD_ORDER } from "../../graphql/mutations/orderMutations";
import { useLogin } from "../../context/LoginProvider";
import { OrderInput } from "../../generated/graphql";
import { ToastContainer, toast } from "react-toastify";
import useNotification from "../../notifications/useNotification";

const CartPayment = () => {
  const { cartItems } = useContext(ShopContext);
  const { order } = useNotification();
  const [waiting, setWaiting] = useState<boolean>(false);
  const [err, setErr] = useState<String | null>(null);
  const [orderInfos, setOrderInfos] = useState<OrderInput>({
    userId: "",
    bookings: [],
  });
  const [total, setTotal] = useState(0);
  const [addOrder] = useMutation(ADD_ORDER);
  const { userLog, setUserLog } = useLogin();

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

  const handleCreateOrder = async () => {
    if (userLog) {
      //let orderInfos: OrderInput = { userId: userLog.user.id };
      setOrderInfos({ userId: userLog.user.id });

      cartItems.map((element) => {
        setOrderInfos((prevOrderInfos) => ({
          ...prevOrderInfos,
          bookings: [
            ...(prevOrderInfos?.bookings ?? []),
            {
              shopId: element.shopId,
              productId: element.product.id,
              endDate: "2023-01-20",
              startDate: "2023-01-12",
            },
          ],
        }));
        return orderInfos;
      });

      await addOrder({
        variables: {
          orderInfos: orderInfos,
        },
        onCompleted() {
          localStorage.removeItem("shopping-cart");
          toast(order.createOrderSuccess, {
            onClose() {
              setWaiting(false);
              window.location.reload();
            },
            onOpen() {
              setWaiting(true);
            },
            type: "success",
          });
        },
        onError(error) {
          setErr(error.message);
        },
      });
    } else {
      alert("please create a profile or login");
    }
  };

  return (
    <>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
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
            <button
              className="btn btn-success"
              onClick={() => handleCreateOrder()}
            >
              Réserver
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPayment;
