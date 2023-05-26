import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { LIST_CATEGORY } from '../../graphql/queries/categoryQuery';
import ListCategory from '../../components/category/ListCategory';
import logowinterent from '../../assets/Logo_winterent-light.png';
import SearchBar from '../../components/utils/SearchBar';
import './Category.scss';

interface CategoryName {
  id: string;
  category: string;
}

const Category = () => {
  const [listCategory, setListCategory] = useState([]);
  const { loading, error } = useQuery(LIST_CATEGORY, {
    onCompleted(data) {
      setListCategory(data.listCategory);
    },
  });

  if (loading) return <div>Chargement en cours</div>;
  if (error) return <div>Une erreur s'est produite</div>;
  return (
    <div>
      <div className="home-page-image d-flex justify-content-center flex-column align-items-center">
        <img className="logo-winterent pb-5" src={logowinterent} alt="" />

        <h1 className="text-white display-1">On loue du rêve</h1>

        <div className="text-white d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-center">
            Professional partner for ski & snowboard
          </div>
          <div className="d-flex justify-content-center">
            rental in Europe and Canada
          </div>
        </div>
      </div>
      <SearchBar />
      <div className="d-flex justify-content-center mt-4">
        <div className="w-50">
          <h3 className="text-primary">
            <i className="bi bi-chevron-double-down"></i> CATEGORIES
          </h3>
          <div>
            Envoie du rêve! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Debitis incidunt distinctio deleniti, explicabo eum fuga
            soluta. Ipsa sit omnis nihil reprehenderit sunt excepturi voluptatum
            autem, soluta magni cupiditate explicabo quis.
          </div>
          <div className="d-flex flex-row mt-4">
            {listCategory.map((el: CategoryName) => (
              <div
                key={el.id}
                className={`m-2 bg-image-${el.category} d-flex flex-column justify-content-end`}
              >
                <ListCategory category={el.category} idCategory={el.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="a-propos mt-5">
        <div className="bandeau"></div>
        <div className="d-flex justify-content-center align-items-center flex-column h-100">
          <div className="w-75 text-white d-flex justify-content-start flex-column">
            <h1>
              <i className="bi bi-chevron-double-down"></i> A PROPOS DE NOUS
            </h1>
            <div>
              Envoie du rêve! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Debitis incidunt distinctio deleniti, explicabo
              eum fuga soluta. Ipsa sit omnis nihil reprehenderit sunt excepturi
              voluptatum autem, soluta magni cupiditate explicabo quis.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
