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
    <>
      <div className="test">
        <h4>{nameShop}</h4>

        <p>
          {addressShop.roadNumber} {addressShop.country}
          <br />
          {addressShop.postalCode} {addressShop.city}
        </p>
      </div>
    </>
  );
};

export default ListShop;
