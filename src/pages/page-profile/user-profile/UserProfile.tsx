import { useNavigate } from "react-router-dom";
import imgLogin from "../../../../src/assets/imgLogin.png";
import UserOrders from "../user-orders/UserOrders";
import { useState } from "react";
import UserPaymentInfos from "../UserPaymentInfos";
import UserProfileForm from "../UserProfileForm";
import { useQuery } from "@apollo/client";
import { USER } from "../../../graphql/queries/usersQueries";
import { User } from "../../../generated/graphql";
import "./UserProfile.scss";
import { useLogin } from "../../../context/LoginProvider";

enum TabTypes {
  Profile = "profile",
  PaymentInfo = "paymentInfos",
  UserOrders = "userOrders",
  Logout = "logOut",
}
function UserProfile() {
  const navigator = useNavigate();
  const [activeTab, setActiveTab] = useState<TabTypes>(TabTypes.Profile);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const { userLog, setUserLog } = useLogin();

  const { loading, error } = useQuery(USER, {
    variables: { userId: userLog?.user.id },
    onCompleted(data) {
      if (data.user) {
        setCurrentUser(data.user);
      }
    },
  });

  const handleDeleteLocalStorage = () => {
    setUserLog(null);
  };

  if (loading) return <div>Chargement en cours</div>;
  if (error) return <div>Une erreur s'est produite</div>;

  const handleSelect = (tab: string) => {
    if (tab === "profile") setActiveTab(TabTypes.Profile);
    if (tab === "payment") setActiveTab(TabTypes.PaymentInfo);
    if (tab === "orders") setActiveTab(TabTypes.UserOrders);
  };

  return (
    <>
      <div>
        <img className="w-100" src={imgLogin} alt="" />
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-around mt-5">
        <div
          className=" col-6 card m-3"
          style={{ width: "18rem", height: "fit-content" }}
        >
          <ul className="list-group list-group-flush">
            <li
              className={
                activeTab.valueOf().match("profile")
                  ? "tabSelected list-group-item"
                  : "list-group-item tab"
              }
            >
              <button
                className="custom-button"
                onClick={() => handleSelect("profile")}
              >
                Mon profil
              </button>
            </li>
            <li
              className={
                activeTab.valueOf().match("paymentInfos")
                  ? "tabSelected list-group-item"
                  : "list-group-item tab"
              }
            >
              <button
                className="custom-button"
                onClick={() => handleSelect("payment")}
              >
                Mes informations de paiement
              </button>
            </li>
            <li
              className={
                activeTab.valueOf().match("userOrders")
                  ? "tabSelected list-group-item"
                  : "list-group-item tab"
              }
            >
              <button
                className="custom-button"
                onClick={() => handleSelect("orders")}
              >
                Mes commandes
              </button>
            </li>
            <li
              className={
                activeTab.valueOf().match("logOut")
                  ? "tabSelected list-group-item"
                  : "list-group-item tab"
              }
            >
              <button
                className="custom-button"
                onClick={handleDeleteLocalStorage}
              >
                Déconnexion
              </button>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          {activeTab === "profile" && currentUser ? (
            <UserProfileForm user={currentUser} />
          ) : null}
          {activeTab === "paymentInfos" && <UserPaymentInfos />}
          {activeTab === "userOrders" && <UserOrders />}
        </div>
      </div>
    </>
  );
}

export default UserProfile;
