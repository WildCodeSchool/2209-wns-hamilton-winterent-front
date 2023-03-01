import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { LIST_CATEGORY } from '../../graphql/queries/categoryQuery';
import ListCategory from './ListCategory';

const Category = () => {
  const [listCategory, setListCategory] = useState([]);
  const { loading } = useQuery(LIST_CATEGORY, {
    onCompleted(data) {
      setListCategory(data.listCategory);
    },
  });
  return (
    <div>
      <h3>CATEGORIES</h3>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
        incidunt distinctio deleniti, explicabo eum fuga soluta. Ipsa sit omnis
        nihil reprehenderit sunt excepturi voluptatum autem, soluta magni
        cupiditate explicabo quis.
      </div>
      <div>
        {listCategory.map((el) => (
          <div>
            <ListCategory category={el.category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
