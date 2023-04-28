import shopImage from '../../assets/1.jpg';

interface ShopAddress {
  nameShop: string;
  addressShop: {
    id: string;
    roadNumber: number;
    streetName: string;
    city: string;
    postalCode: string;
    country: string;
  };
}

const ListShop = ({ nameShop, addressShop }: ShopAddress) => {
  return (
    <div>
      <img src={shopImage} alt="" />
      <h3>{nameShop}</h3>
      <h5>
        {addressShop.roadNumber} {addressShop.country}
      </h5>
      <h5>
        {addressShop.postalCode} {addressShop.city}
      </h5>
    </div>
  );
};

export default ListShop;
