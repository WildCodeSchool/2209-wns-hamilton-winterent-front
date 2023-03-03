
interface Category {
  category: string;
}

const ListCategory = ({ category }: Category) => {
  return (
    <div>
      <div>
        <img
          className="p-3"
          style={{ width: '150px', height: '200px' }}
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
