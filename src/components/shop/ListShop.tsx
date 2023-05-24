import { Link, useSearchParams } from "react-router-dom";

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
    let [searchParams] = useSearchParams();
    const nameCategory = searchParams.get('nameCategory');
  return (
    <>
      <Link to={`/products?nameCategory=${nameCategory}&nameShop=${nameShop}`} className="text-decoration-none headband">
        <div>
          <h4>{nameShop}</h4>
          <p>
            {addressShop.roadNumber} {addressShop.country}
            <br />
            {addressShop.postalCode} {addressShop.city}
          </p>
        </div>
      </Link>
    </>
  );
};

export default ListShop;
