import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { LIST_ADDRESS_SHOP } from '../../graphql/queries/destinationQuery';
import ListDestination from '../../components/destination/ListDestination';
import googleMap from '../../assets/exemple-google-map-sombre.png';
import './Destination.scss';

interface DestinationShop {
  address: {
    id: string;
    city: string;
  };
}

function Destination() {
  const [destination, setDestination] = useState([]);
  const { loading, error } = useQuery(LIST_ADDRESS_SHOP, {
    onCompleted(data) {
      setDestination(data.shops);
    },
  });

  if (loading) return <div>Chargement en cours</div>;
  if (error) return <div>Une erreur s'est produite</div>;
  return (
    <div className="destination">
      <div className="destination-page-image d-flex justify-content-center flex-column align-items-center">
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
          <div className="d-flex flex-row justify-content-between">
            {destination.map((el: DestinationShop, index) => (
              <div
                key={el.address.id}
                className={`m-2 bg-image-${index} d-flex flex-column justify-content-end`}
              >
                <ListDestination city={el.address.city} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="google-map">
        <div className="info-google-shop">
          <div className="test"></div>
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

export default Destination;
