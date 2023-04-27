import shopImage from '../../assets/0d195a5e-b30b-4b8e-8fec-90db57366dfe.jpg';

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
