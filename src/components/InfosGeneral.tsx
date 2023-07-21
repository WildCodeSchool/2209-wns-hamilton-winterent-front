import { IoCardOutline, IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { FiSun } from 'react-icons/fi';
import { BsStopwatch } from 'react-icons/bs';
import './InfosGeneral.scss';

const InfosGeneral = () => {
  return (
    <div className="infos-general d-flex justify-content-center p-4">
      <div className="container vw-75 justify-content-around d-flex">
        <div>
          <IoCardOutline size="70px" />
          <h5>Paiments 100% sécurisés</h5>
          <p>CB, Paypal</p>
        </div>
        <div>
          <BsStopwatch size="70px" />
          <h5>Annulation gratuite</h5>
          <p>24h avant la location</p>
        </div>
        <div>
          <IoChatbubbleEllipsesOutline size="70px" />
          <h5>Expertise & service</h5>
          <p>Conseil personnalisés 7j/7j</p>
        </div>
        <div>
          <FiSun size="70px" />
          <h5>+3000 références</h5>
          <p>des plus grandes marques</p>
        </div>
      </div>
    </div>
  );
};

export default InfosGeneral;
