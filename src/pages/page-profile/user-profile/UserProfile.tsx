import { useNavigate } from "react-router-dom";
import imgLogin from "../../../../src/assets/imgLogin.png";
import UserOrders from "../UserOrders";
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
  const { userLog } = useLogin();

  const { loading, error, data } = useQuery(USER, {
    variables: { userId: userLog?.user.id },
    onCompleted(data) {
      if (data.user) {
        setCurrentUser(data.user);
      }
    },
  });

  const handleSelect = (tab: string) => {
    if (tab === "profile") setActiveTab(TabTypes.Profile);
    if (tab === "payment") setActiveTab(TabTypes.PaymentInfo);
    if (tab === "orders") setActiveTab(TabTypes.UserOrders);
  };

  return (
    <div>
      <div>
        <img className="w-100" src={imgLogin} alt="" />
      </div>

      <div className="d-flex justify-content-around">
        <div
          className=" col-6 card m-3"
          style={{ width: "18rem", height: "fit-content" }}
        >
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <button
                className="custom-button"
                onClick={() => handleSelect("profile")}
              >
                Mon profil
              </button>
            </li>
            <li className="list-group-item">
              <button
                className="custom-button"
                onClick={() => handleSelect("payment")}
              >
                Mes informations de paiement
              </button>
            </li>
            <li className="list-group-item">
              <button
                className="custom-button"
                onClick={() => handleSelect("orders")}
              >
                Mes commandes
              </button>
            </li>
            <li className="list-group-item">
              <button
                className="custom-button"
                onClick={() => handleSelect("unlog")}
              >
                Déconnexion
              </button>
            </li>
          </ul>
        </div>

        {activeTab === "profile" && currentUser ? (
          <UserProfileForm user={currentUser} />
        ) : null}
        {activeTab === "paymentInfos" && <UserPaymentInfos />}
        {activeTab === "userOrders" && <UserOrders />}
      </div>
    </div>
  );
}

export default UserProfile;
