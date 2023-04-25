import { useLazyQuery, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { LIST_SHOP } from '../../graphql/queries/shopQuery';
import ListShop from './ListShop';
import './Shop.scss';

function Shop() {
  const [shopList, setShopList] = useState([]);
  const test = 'Chico';
  const { loading } = useQuery(LIST_SHOP, {
    variables: { city: test },
    onCompleted(data) {
      setShopList(data.listShop);
    },
  });

  return (
    <div className="shop">
      <div className="shop-page-image d-flex justify-content-center flex-column align-items-center">
        <div className="text-white d-flex flex-column justify-content-center"></div>
      </div>
      <div>liste input</div>
      <div className="d-flex justify-content-center pb-5">
        <div className="w-75">
          <h3 className="text-primary">
            <i className="bi bi-chevron-double-down"></i> VOTRE DESTINATION
          </h3>
          <div>
            Envoie du rêve! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Debitis incidunt distinctio deleniti, explicabo eum fuga
            soluta. Ipsa sit omnis nihil reprehenderit sunt excepturi voluptatum
            autem, soluta magni cupiditate explicabo quis.
          </div>
          <div className="d-flex flex-row">
            {shopList.map((el) => (
              <div
                key={el.id}
                className={`m-2 image-width d-flex flex-column justify-content-end`}
              >
                <ListShop listShop={el} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
