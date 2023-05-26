import { useLogin } from '../../context/LoginProvider';
import { Link, useLocation } from 'react-router-dom';
import logoWinterent from '../../assets/Logo_winterent-ligh-Ht.png';
import { LIST_CATEGORY } from '../../graphql/queries/categoryQuery';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import HeaderUserLog from './HeaderUserLog';
import HeaderNotUser from './HeaderNotUser';
import './_header.scss';

interface CategoryName {
  id: string;
  category: string;
}

const Header = () => {
  const [categories, setCategories] = useState<CategoryName[]>([]);

  let location = useLocation();
  const { userLog } = useLogin();

  //Récupérer les catégories
  const { loading, error } = useQuery(LIST_CATEGORY, {
    onCompleted(data) {
      setCategories(data.listCategory);
    },
  });
  if (loading) return <div>Chargement en cours</div>;
  if (error) return <div>Une erreur s'est produite</div>;

  return (
    <>
      <div className="nav-container">
        <a href="/">
          <img
            className="m-3 logo-w"
            src={logoWinterent}
            alt="logo-winterent"
          />
        </a>
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
                      location.pathname === '/' ? 'active' : ''
                    }`}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
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
                    {categories.map((category) => (
                      <Link
                        to={`/destination?idCategory=${category.id}`}
                        key={category.id}
                        className="dropdown-item"
                      >
                        {category.category}
                      </Link>
                    ))}
                    <div className="hr dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Toutes les catégories
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === '/destination' ? 'active' : ''
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
                {userLog ? <HeaderUserLog /> : <HeaderNotUser />}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
