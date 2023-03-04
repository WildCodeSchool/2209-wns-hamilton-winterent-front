import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { LIST_CATEGORY } from '../../graphql/queries/categoryQuery';
import ListCategory from './ListCategory';
import logowinterent from '../../assets/Logo_winterent-light.png';
import './Category.scss';

interface CategoryName {
  id: string;
  category: string;
}

const Category = () => {
  const [listCategory, setListCategory] = useState([]);
  const { loading } = useQuery(LIST_CATEGORY, {
    onCompleted(data) {
      setListCategory(data.listCategory);
    },
  });
  console.log(listCategory);
  
  return (
    <div>
      <div className="home-page-image d-flex justify-content-center flex-column align-items-center">
        <img className="logo-winterent pb-5" src={logowinterent} alt="" />

        <h1 className="text-white display-1">On loue du rêve</h1>

        <div className="text-white d-flex flex-column justify-content-center">
          <div className='d-flex justify-content-center'>Professional partner for ski & snowboard</div>
          <div className='d-flex justify-content-center'>rental in Europe and Canada</div>
        </div>
      </div>
      <div>liste input</div>
      <div className="d-flex justify-content-center">
        <div className="w-50">
          <h3 className="text-primary">
            <i className="bi bi-chevron-double-down"></i> CATEGORIES
          </h3>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
            incidunt distinctio deleniti, explicabo eum fuga soluta. Ipsa sit
            omnis nihil reprehenderit sunt excepturi voluptatum autem, soluta
            magni cupiditate explicabo quis.
          </div>
          <div className="d-flex flex-row">
            {listCategory.map((el: CategoryName) => (
              <div className={`m-2 bg-image-${el.category} d-flex flex-column justify-content-end`}>
                <ListCategory category={el.category} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

 export default Category;
