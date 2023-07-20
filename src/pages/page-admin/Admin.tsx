import "./Admin.scss";
import { useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import {
  GET_FILTER_ADMIN,
  LIST_PRODUCT,
} from "../../graphql/queries/productQuery";
import ProductRow from "./ProductRow";
import { SHOPS } from "../../graphql/queries/shopQuery";
import { LIST_CATEGORY } from "../../graphql/queries/categoryQuery";
import { Category, Shop } from "../../generated/graphql";

interface IAdminProducts {
  id: string;
  name: string;
  image: string;
  range: string;
  description: string;
  priceHT: number;
  quantity: number;
}

function Admin() {
  const [productList, setProductList] = useState([]);
  const [shopList, setShopList] = useState([]);
  const [selectedShopList, setSelectedShopList] = useState("");
  const [selectedCategoryList, setSelectedCategoryList] = useState("");
  console.log("selectedShopList", selectedShopList);
  const [categoryList, setCategoryList] = useState([]);
  const { loading: loadingCategories, error: errorCategories } = useQuery(
    LIST_CATEGORY,
    {
      onCompleted(data) {
        setCategoryList(data.listCategory);
      },
    }
  );
  const { loading: loadingShops, error: errorShops } = useQuery(SHOPS, {
    onCompleted(data) {
      setShopList(data.shops);
    },
  });

  const [getProducts, { loading, error, data }] =
    useLazyQuery(GET_FILTER_ADMIN);

  const handleClick = () => {
    getProducts({
      variables: { idCategory: selectedCategoryList, idShop: selectedShopList },
      onCompleted(data) {
        console.log("data", data);
        setProductList(data.productsAdmin);
      },
    });
  };

  // if (loadingProduct) return <div>Chargement en cours</div>;
  // if (errorProduct) return <div>Une erreur s'est produite</div>;

  return (
    <div>
      <div className="admin">
        <div className="admin-page-image d-flex justify-content-center flex-column align-items-center"></div>
      </div>
      <div className="titleAdmin1">
        <h1 className="text-primary mt-5">Bienvenue sur le panel d'Admin</h1>
        <p className="d-flex w-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          aliquid qui at, earum explicabo, nisi ab odio corporis illo nihil iste
          veniam id voluptatem vel soluta, quos incidunt reiciendis culpa.
        </p>
      </div>

      <div className="cat">
        <h3 className="text-primary">Séletionnez le magasin et la catégorie</h3>
      </div>
      <form className="d-flex flex-column align-items-center mb-5">
        <div className="dropdown d-flex justify-content-center w-25 mb-2">
          <select
            className="form-select "
            aria-label="Default select example"
            defaultValue=""
            required
            onChange={(event) => {
              setSelectedShopList(event.target.value);
            }}>
            <option value="" defaultValue="">
              Choisi ton magasin
            </option>
            {shopList.map((shop: Shop) => (
              <option key={shop.id} value={shop.id}>
                {shop.name}
              </option>
            ))}
          </select>
        </div>
        <div className="dropdown d-flex justify-content-center w-25 mb-2">
          <select
            className="form-select"
            aria-label="Default select example"
            defaultValue=""
            required
            onChange={(event) => {
              setSelectedCategoryList(event.target.value);
            }}>
            <option value="" defaultValue="">
              Choisi ta catégorie
            </option>
            {categoryList.map((category: Category) => (
              <option key={category.id} value={category.id}>
                {category.category}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleClick}
          type="button"
          value="Afficher ma sélection"
          className="btn btn-primary text-white mt-2 p-3 w-25">
          Afficher ma sélection
        </button>
      </form>
      <table className="table mx-5">
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
            <th className=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
              Prix
            </th>
            <th className=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
              Quantité
            </th>
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
              priceHT={product.priceHT}
              quantity={product.quantity}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
