import { useNavigate } from "react-router-dom";
import imgLogin from "../../src/assets/imgLogin.png";
import UserOrders from "./UserOrders";
import { useState } from "react";
import UserPaymentInfos from "./UserPaymentInfos";
import UserProfileForm from "./UserProfileForm";

enum TabTypes {
  Profile = "profile",
  PaymentInfo = "paymentInfos",
  UserOrders = "userOrders",
  Logout = "logOut",
}
function UserProfile() {
  const navigator = useNavigate();
  const [activeTab, useActiveTab] = useState<TabTypes>(TabTypes.Profile);

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
            <li className="list-group-item">Profil</li>
            <li className="list-group-item">Mes informations de paiement</li>
            <li className="list-group-item">Mes commandes</li>
            <li className="list-group-item">Déconnexion</li>
          </ul>
        </div>

        {activeTab === "profile" && <UserProfileForm />}
        {activeTab === "paymentInfos" && <UserPaymentInfos />}
        {activeTab === "userOrders" && <UserOrders />}
      </div>
    </div>
  );
}

export default UserProfile;
