import "./SkiCard.scss";
import ski from "../../assets/ski_rx.png";
import shoe from "../../assets/shoe.png";
import helmet from "../../assets/helmet.png";
import { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
import { Product } from "../../generated/graphql";
import { GET_PRODUCT_INFOS } from "../../graphql/queries/productQuery";
import { useQuery } from "@apollo/client/react";

export interface IItemInfos {
  shopId: string;
  product: Product;
  quantity: number;
  price: number;
}

interface ISkiCardProps {
  product: Product;
  idShop: string;
}

function SkiCard({ product, idShop }: ISkiCardProps) {
  const { addToCart } = useContext(ShopContext);
  const [item, setItem] = useState<IItemInfos>({
    shopId: idShop,
    product: product,
    quantity: 0,
    price: 0,
  });

  const { loading, error } = useQuery(GET_PRODUCT_INFOS, {
    variables: { idShop: idShop, idProduct: product.id },
    onCompleted(data) {
      setItem({
        shopId: idShop,
        product: product,
        price: data.productInfos.price,
        quantity: data.productInfos.quantity,
      });
    },
  });

  function updateQuantity(item: IItemInfos) {
    if (item.quantity != null) {
      setItem({
        shopId: idShop,
        product,
        price: item.price,
        quantity: item.quantity - 1,
      });
    }
    item.quantity = 1;
    addToCart(item);
  }

  return (
    <div className="cardContainer container w-100 m-4 bg-white shadow-sm">
      <div className="skiInfos row">
        <h3 className="range fs-2 fw-normal">BRONZE</h3>
        <h5 className="skiModel fw-normal">
          {product.range} {product.name}
        </h5>
        <p>ou modèle équivalent</p>
        <h3>{item?.price} €</h3>
      </div>

      <div className="packageContainer row">
        <div className="skipic col-4 p-0">
          <img className="skiImage" src={ski} alt="" />
        </div>
        <div className="accessory col-8">
          <div className="">
            <h6 className="mb-0 fw-bold">+ Infos</h6>
            <p className="mb-0">Bâtons inclus</p>
          </div>
          <div className="shoesInfos">
            <img className="shoeImage" src={shoe} alt="" />
            <p className="text-center mb-1">(inclus)</p>
            <div className="form-check ">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" />
                Chaussures
              </label>
            </div>
          </div>
          <div className="helmetInfos">
            <img className="shoeImage" src={helmet} alt="" />
            <p className="text-center mb-1">conseillé!</p>
            <div className="form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" />
                Casque
              </label>
            </div>
          </div>
          <div className="others text-wrap fw-bold mt-2">
            VOIR LES AUTRES MODELES
          </div>
        </div>
      </div>
      <button
        className="w-100 btn btn-primary mt-3 mb-3"
        onClick={() => updateQuantity(item)}
      >
        Selectionner
      </button>
    </div>
  );
}

export default SkiCard;
