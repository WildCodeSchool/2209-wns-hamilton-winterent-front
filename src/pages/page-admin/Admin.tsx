import "./Admin.scss";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { LIST_PRODUCT } from "../../graphql/queries/productQuery";
import ProductRow from "./ProductRow";

interface IAdminProducts {
  id: string;
  name: string;
  image: string;
  range: string;
  description: string;
}

function Admin() {
  const [productList, setProductList] = useState([]);
  const { loading, error } = useQuery(LIST_PRODUCT, {
    onCompleted(data) {
      setProductList(data.products);
    },
  });

  console.log("productList", productList);

  if (loading) return <div>Chargement en cours</div>;
  if (error) return <div>Une erreur s'est produite</div>;

  return (
    <div>
      <div className="admin">
        <div className="admin-page-image d-flex justify-content-center flex-column align-items-center"></div>
      </div>
      <div className="titleAdmin1">
        <h1 className="text-primary">Bienvenue sur le panel d'Admin</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          aliquid qui at, earum explicabo, nisi ab odio corporis illo nihil iste
          veniam id voluptatem vel soluta, quos incidunt reiciendis culpa.
        </p>
      </div>
      {/* <div className="cat">
        <h3 className="text-primary">Choisir par catégorie</h3>
      </div>
      <div className="butCat">
        <button type="button" className="btn btn-primary text-white">
          Ski
        </button>
        <button type="button" className="btn btn-primary text-white">
          Chaussure
        </button>
      </div> */}
      {/* <div className="cat">
        <h3 className="text-primary">Choisir son magasin</h3>
      </div>
      <div className="d-flex justify-content-center">
        <input type="" placeholder="Choisir son magasin" />
      </div> */}
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
              Marque
            </th>
            {/* <th className=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
              Stock
            </th> */}
            <th className="action text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product: IAdminProducts, index) => (
            <ProductRow
              key={index}
              id={product.id}
              name={product.name}
              image={product.image}
              range={product.range}
              description={product.description}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
