import React from 'react';

const ListCategory = ({ category }) => {
  return (
    <div>
      <div>
        <img
        style={{width: "150px", height: "200px"}}
          src="https://www.okvoyage.com/wp-content/uploads/2019/11/ski.jpg"
          alt=""
        />
      </div>
      <div>
        <div>Location</div>
        <div>{category}</div>
      </div>
    </div>
  );
};

export default ListCategory;
