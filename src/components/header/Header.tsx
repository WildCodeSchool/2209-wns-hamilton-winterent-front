import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="align-text">
        <a href="/register">
          <button>Créer un compte</button>
        </a>
        <a href="/login">
          <button>Se connecter</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
