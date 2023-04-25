import shopImage from '../../assets/0d195a5e-b30b-4b8e-8fec-90db57366dfe.jpg';

const ListShop = ({ listShop }) => {
  return (
    <div>
      <img src={shopImage} alt="" />
      <h3>{listShop.name}</h3>
      <h5>
        {listShop.address.roadNumber} {listShop.address.country}
      </h5>
      <h5>
        {listShop.address.postalCode} {listShop.address.city}
      </h5>
    </div>
  );
};

export default ListShop;
