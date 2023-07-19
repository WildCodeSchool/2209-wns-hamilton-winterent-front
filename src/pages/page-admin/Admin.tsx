import "./Admin.scss";
import shoe from "../../assets/shoe.png";

function Admin() {
  return (
    <div>
      <div className="admin">
        <div className="admin-page-image d-flex justify-content-center flex-column align-items-center"></div>
      </div>
      <div className="titleAdmin1">
        <h1 className="text-primary">Binvenue sur le panel d'Admin</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          aliquid qui at, earum explicabo, nisi ab odio corporis illo nihil iste
          veniam id voluptatem vel soluta, quos incidunt reiciendis culpa.
        </p>
      </div>
      <table className="table">
        <thead className="bg-primary">
          <tr>
            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
              #
            </th>
            <th className=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
              Image
            </th>
            <th className=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
              Référence
            </th>
            <th className=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
              Prix
            </th>
            <th className=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
              Stock
            </th>
            <th className="action text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>banane</td>
            <td>
              <img src={shoe} alt="" />
            </td>
            <td>banane</td>
            <td>21%</td>
            <td>1200</td>
            <td>
              <button type="button" className="btn btn-success">
                Modifier
              </button>
              <button type="button" className="btn btn-danger">
                Supprimer
              </button>
            </td>
          </tr>
          <tr>
            <td>toto</td>
            <td>
              <img src={shoe} alt="" />
            </td>
            <td>toto</td>
            <td>2%</td>
            <td>12</td>
            <td>
              <button type="button" className="btn btn-success">
                Modifier
              </button>
              <button type="button" className="btn btn-danger">
                Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
