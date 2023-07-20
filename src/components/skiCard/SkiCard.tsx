import './SkiCard.scss';
import ski from '../../assets/ski_rx.png';
import { useContext, useState } from 'react';
import { ShopContext } from '../../context/ShopContextProvider';
import { ProductCate } from '../../generated/graphql';
import { GET_PRODUCT_INFOS } from '../../graphql/queries/productQuery';
import { useQuery } from '@apollo/client/react';
import { ToastContainer, toast } from 'react-toastify';
import useNotification from '../../notifications/useNotification';

export interface IItemInfos {
  shopId: string;
  product: ProductCate;
  quantity: number;
  price: number;
}

interface ISkiCardProps {
  product: ProductCate;
  idShop: string;
}

function SkiCard({ product, idShop }: ISkiCardProps) {
  const { addToCart } = useContext(ShopContext);
  const { order } = useNotification();
  const [waiting, setWaiting] = useState<boolean>(false);
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
    toast(order.addToCartSuccess, {
      onClose() {
        setWaiting(false);
      },
      onOpen() {
        setWaiting(true);
      },
      type: 'success',
    });
  }

  if (loading) return <div>Chargement en cours</div>;
  if (error) return <div>Une erreur s'est produite</div>;

  return (
    <>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <div className="cardContainer container w-100 m-4 bg-white shadow-sm">
        <div className="skiInfos row">
          <h3 className="range fs-2 fw-normal">BRONZE</h3>
          <h5 className="skiModel fw-normal">
            {product.range} {product.name}
          </h5>
          <p>ou modèle équivalent</p>
          <div className="d-flex justify-content-center">
            <h3>{item?.price} €</h3>
          </div>
        </div>
        <div className="packageContainer row d-flex justify-content-center">
          <div
            className={`${
              product.category?.category === 'ski' ? `skipic` : `shoes`
            } col-4 p-0`}
          >
            <img
              className="skiImage"
              src={product.image ? product.image : ski}
              alt=""
            />
          </div>
        </div>
        <button
          className="w-100 btn btn-primary mt-3 mb-3"
          onClick={() => updateQuantity(item)}
        >
          Ajouter au panier
        </button>
      </div>
    </>
  );
}

export default SkiCard;
