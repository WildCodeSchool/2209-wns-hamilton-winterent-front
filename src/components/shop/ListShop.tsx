import shopImage from '../../assets/0d195a5e-b30b-4b8e-8fec-90db57366dfe.jpg';

interface ListShops2 {
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

const ListShop = ({ nameShop, addressShop }: ListShops2) => {
 // console.log(listShop)
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
