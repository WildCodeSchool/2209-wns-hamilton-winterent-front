import { Link } from 'react-router-dom';

interface DestinationShop {
  city: string;
}

const ListDestination = ({ city }: DestinationShop) => {
  return (
    <div className="">
      <div className="well">
        <Link to={`/shop/${city}`}>
          <div className="d-flex ms-1 justify-content-between align-items-center">
            <h3>{city}</h3>
            <div>
              <i className="bi bi-chevron-right text-primary"></i>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ListDestination;
