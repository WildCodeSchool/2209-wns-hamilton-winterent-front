import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { LIST_SHOP } from '../../graphql/queries/shopQuery';
import ListShop from '../../components/shop/ListShop';
import googleMap from '../../assets/exemple-google-map-sombre.png';
import './Shop.scss';
import SearchBar from '../../components/utils/SearchBar';

interface ListShops {
  id: string;
  name: string;
  address: {
    id: string;
    roadNumber: number;
    streetName: string;
    city: string;
    postalCode: string;
    country: string;
  };
}

function Shop() {
  let { id } = useParams();
  const [shopList, setShopList] = useState([]);
  const { loading, error } = useQuery(LIST_SHOP, {
    variables: { city: id },
    onCompleted(data) {
      setShopList(data.listShop);
    },
  });
  if (loading) return <div>Chargement en cours</div>;
  if (error) return <div>Une erreur s'est produite</div>;
  return (
    <div className="shop">
      <div className="shop-page-image d-flex justify-content-center flex-column align-items-center">
        <div className="text-white d-flex flex-column justify-content-center"></div>
      </div>
      <SearchBar/>
      <div className="d-flex justify-content-center pb-5">
        <div className="w-75">
          <h3 className="text-primary">
            <i className="bi bi-chevron-double-down"></i> NOS MAGASINS
          </h3>
          <div>
            Envoie du rêve! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Debitis incidunt distinctio deleniti, explicabo eum fuga
            soluta. Ipsa sit omnis nihil reprehenderit sunt excepturi voluptatum
            autem, soluta magni cupiditate explicabo quis.
          </div>
          <div className="d-flex flex-row justify-content-between">
            {shopList.map((el: ListShops) => (
              <div
                key={el.id}
                className={`m-2 bg-image-1 d-flex flex-column justify-content-end`}
              >
                <ListShop nameShop={el.name} idShop={el.id} addressShop={el.address} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="google-map">
        <div className="info-google-shop">
          <div className="bandeau"></div>
          <div className="d-flex justify-content-center align-items-center flex-column h-100">
            <div className="w-75 text-white d-flex justify-content-start flex-column">
              <h1>
                <i className="bi bi-chevron-double-down"></i> NOS MAGASINS DE
                LOCATION
              </h1>
              <div>
                Envoie du rêve! Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Debitis incidunt distinctio deleniti,
                explicabo eum fuga soluta. Ipsa sit omnis nihil reprehenderit
                sunt excepturi voluptatum autem, soluta magni cupiditate
                explicabo quis.
              </div>
            </div>
          </div>
        </div>
        <img src={googleMap} alt="" />
      </div>
    </div>
  );
}

export default Shop;
