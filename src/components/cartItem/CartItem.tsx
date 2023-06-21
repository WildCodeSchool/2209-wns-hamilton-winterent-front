import "./CartItem.scss";
import imgSki from "../../assets/ski_rx.png";

const CartItem = () => {
  return (
    <div>
      <div className="article mt-5 p-2">
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-5">
            <img src={imgSki} alt="" />
            <div className="d-flex flex-column">
              <h5>Ski Rossignol Gold, pour femme</h5>
              <p> size : medium </p>
              <p> shop : Isola 2000</p>
              <button className="btn btn-outline-danger" type="submit">
                Supprimer
              </button>
            </div>
          </div>

          <div className="d-flex flex-column align-items-center">
            <p>28 €</p>
            <select className="form-select">
              <option selected>Quantité: 1</option>
              <option value="2">Quantité: 2</option>
              <option value="3">Quantité: 3</option>
              <option value="4">Quantité: 4</option>
            </select>
          </div>
        </div>

        <div className="line"></div>
        <div className="mt-5">
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-5">
              <img src={imgSki} alt="" />
              <div className="d-flex flex-column">
                <h5>Ski Rossignol Gold, pour femme</h5>
                <p> size : medium </p>
                <p> shop : Isola 2000</p>
                <button className="btn btn-outline-danger" type="submit">
                  Supprimer
                </button>
              </div>
            </div>

            <div className="d-flex flex-column align-items-center">
              <p>28 €</p>
              <select className="form-select">
                <option selected>Quantité: 1</option>
                <option value="2">Quantité: 2</option>
                <option value="3">Quantité: 3</option>
                <option value="4">Quantité: 4</option>
              </select>
            </div>
          </div>
        </div>
        <div className="buts d-flex justify-content-between">
          <button className="butBack btn btn-primary mt-4" type="submit">
            Retour au menu
          </button>
          <button className="butBack btn btn-primary mt-4" type="submit">
            Tout supprimer
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
