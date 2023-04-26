import { useLogin } from '../../context/LoginProvider';
import { Link } from 'react-router-dom';
import './_header.scss';
import { useState } from 'react';


const Header = () => {
  const { userLog } = useLogin();
  const handleDeleteLocalStorage = () => {
    localStorage.removeItem('userLog');
  };
  
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return userLog ? (
    <>
      {/* <div  className="nav-elements">
        <ul>
          <li>
            <Link className="active " to="/" aria-current="page">Home</Link>
          </li>
          <li>
            <Link className="" to="/category">Categories</Link>
          </li>
          <li>
            <Link className="" to="/category">Stations</Link>
          </li>
          <li>
            <Link className="" to="/category">A propos</Link>
          </li>
          <li>
            <Link className="" to="/login" onClick={handleDeleteLocalStorage}>
              deconnexion
            </Link>
          </li>
          <Link className="" to="/login">{userLog.user.firstname}</Link>
        </ul>
      </div> */}
      <div className="nav-container">
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" type="button" >Categories</a>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <a className="dropdown-item" href="#">Ski</a>
                            <a className="dropdown-item" href="#">Snow</a>
                            <a className="dropdown-item" href="#">Chaussures</a>
                            <div className="hr dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Toutes les catégories</a>
                          </div>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="category">Stations</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/category">A propos</Link>
                      </li>
                      <li className="vr opacity-30">|</li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/login" onClick={handleDeleteLocalStorage}>
                          deconnexion
                        </Link>
                      </li >
                      <li className="vr opacity-30">|</li>
                      <li className="nav-item text-center p-2 ">
                        <Link className="d-flex flex-column text-decoration-none " to="/login"><div><i className="bi bi-person-fill fs-2 "></i></div><div className="user-profil">{userLog.user.firstname}</div></Link>
                      </li>
                  </ul>
              </div>
            </div>
        </nav>
      </div>
    </>
  ) : (
    <div className="nav-elements">
      <ul>
        <li >
          <Link className="active" to="/">home</Link>
        </li>
        <li >
          <Link className="" to="/register">Créer un compte</Link>
        </li>
        <li >
          <Link className="" to="/login">Se connecter</Link>
        </li>
      </ul>
    </div>
  );
};


export default Header;
