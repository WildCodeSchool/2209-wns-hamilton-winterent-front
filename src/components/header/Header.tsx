import { useLogin } from "../../context/LoginProvider";
import { Link, useLocation } from "react-router-dom";
import logoWinterent from "../../assets/Logo_winterent-ligh-Ht.png";
import "./_header.scss";
import { useState } from "react";

const Header = () => {
  let location = useLocation();
  const { userLog } = useLogin();
  const handleDeleteLocalStorage = () => {
    localStorage.removeItem("userLog");
  };

  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return userLog ? (
    <>
      <div className="nav-container">
        <a href="/"><img className="m-3 logo-w"  src={logoWinterent}/></a>
        <nav className="navbar navbar-expand-lg navbar-dark ">
          <div className="container-fluid">
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  {/* <Link type="button flex" to="#">Catégories</Link>
                          <a className="nav-link dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" type="button" >
                            <span className="visually-hidden">Catégories</span>
                          </a> */}
                  <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    type="button"
                  >
                    Categories
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <a className="dropdown-item" href="#">
                      Ski
                    </a>
                    <a className="dropdown-item" href="#">
                      Snow
                    </a>
                    <a className="dropdown-item" href="#">
                      Chaussures
                    </a>
                    <div className="hr dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Toutes les catégories
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/destination" ? "active" : ""
                    }`}
                    to="/destination"
                  >
                    Stations
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category">
                    A propos
                  </Link>
                </li>
                <li className=" opacity-30 d-none d-lg-block">|</li>
                <li>
                  <Link className="text-light m-2" to="/">
                    <i className="bi bi-cart fs-4"></i>
                  </Link>
                </li>
                <li className=" opacity-30 d-none d-lg-block">|</li>
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
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  ) : (
    <div className="nav-container">
    <a href="/"><img className="m-3 logo-w"  src={logoWinterent}/></a>
    <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                      <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item dropdown">
                      {/* <Link type="button flex" to="#">Catégories</Link>
                      <a className="nav-link dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" type="button" >
                        <span className="visually-hidden">Catégories</span>
                      </a> */}
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
                      <Link className={`nav-link ${location.pathname === "/destination" ? "active" : ""}`} to="/shop">Stations</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/category">A propos</Link>
                  </li>
                  <li className=" opacity-30 d-none d-lg-block">|</li>
                  <li>
                    <Link className="text-light m-2" to="/"><i className="bi bi-cart fs-4"></i></Link>
                  </li>
                  <li className=" opacity-30 d-none d-lg-block">|</li>
                  <li className="nav-item text-center p-2">
                    <Link className="d-flex flex-column text-decoration-none text-light" to="/register">Créer un compte</Link>
                  </li>
                  <li className=" opacity-30 d-none d-lg-block">|</li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login" >
                      Se connecter
                    </Link>
                  </li >
              </ul>
          </div>
        </div>
    </nav>
  </div>
  );
};

export default Header;
