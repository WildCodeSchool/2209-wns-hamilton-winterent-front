import { useLogin } from '../../context/LoginProvider';
import './Header.scss';

const Header = () => {
  const { userLog } = useLogin();
  const handleDeleteLocalStorage = () => {
    localStorage.removeItem('userLog');
  };

  return userLog ? (
    <div className="header">
      <div className="align-text">
        <a href="/login">
          <button type="button" onClick={handleDeleteLocalStorage}>
            deconnexion
          </button>
        </a>
        <a href="/home">
          <button>home</button>
        </a>
        <a href="/login">{userLog.user.firstname}</a>
      </div>
    </div>
  ) : (
    <div className="header">
      <div className="align-text">
        <a href="/register">
          <button>Créer un compte</button>
        </a>
        <a href="/home">
          <button>home</button>
        </a>
        <a href="/login">
          <button>Se connecter</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
