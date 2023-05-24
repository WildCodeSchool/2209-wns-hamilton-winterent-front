import { Link, useSearchParams } from "react-router-dom";

interface ShopAddress {
  nameShop: string;
  idShop: string;
  addressShop: {
    id: string;
    roadNumber: number;
    streetName: string;
    city: string;
    postalCode: string;
    country: string;
  };
}

const ListShop = ({ nameShop, addressShop, idShop }: ShopAddress) => {
  let [searchParams] = useSearchParams();
  const idCategory = searchParams.get('idCategory');
  return (
    <>
      <Link to={`/products?idCategory=${idCategory}&idShop=${idShop}`}  className="text-decoration-none headband">
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
