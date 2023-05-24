import { Link } from "react-router-dom";

interface Category {
  category: string;
}

const ListCategory = ({ category }: Category) => {
  return (
    <div>
      <Link to={`/destination?nameCategory=${category}`} className="text-decoration-none">
        <div className="well">
          <div className="text-primary ms-1">Location</div>
          <div className="d-flex ms-1 justify-content-between align-items-center">
            <h3>{category}</h3>
            <div>
              <i className="bi bi-chevron-right text-primary"></i>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListCategory;
