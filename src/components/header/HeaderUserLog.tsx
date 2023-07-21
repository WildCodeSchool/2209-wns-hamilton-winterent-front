import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../../context/LoginProvider';
import { ShopContext } from '../../context/ShopContextProvider';

const HeaderUserLog = () => {
  const { userLog, setUserLog } = useLogin();
  const { clearCart } = useContext(ShopContext);

  const handleDeleteLocalStorage = () => {
    clearCart();
    setUserLog(null);
  };

  return (
    <>
      {userLog && (
        <>
          <li className="nav-item text-center p-2">
            <Link
              className="d-flex flex-column text-decoration-none text-light"
              to="/profile"
            >
              <div>
                <i className="bi bi-person-fill fs-4 "></i>
              </div>
              <div className="user-profil">{userLog.user.firstname}</div>
            </Link>
          </li>
          <li className=" opacity-30 d-none d-lg-block">|</li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/login"
              onClick={handleDeleteLocalStorage}
            >
              deconnexion
            </Link>
          </li>
        </>
      )}
    </>
  );
};

export default HeaderUserLog;
