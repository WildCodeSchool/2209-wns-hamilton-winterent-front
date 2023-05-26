import { Link } from 'react-router-dom';

const HeaderNotUser = () => {
  return (
    <>
      <li className="nav-item text-center p-2">
        <Link
          className="d-flex flex-column text-decoration-none text-light"
          to="/register"
        >
          Créer un compte
        </Link>
      </li>
      <li className=" opacity-30 d-none d-lg-block">|</li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Se connecter
        </Link>
      </li>
    </>
  );
}

export default HeaderNotUser