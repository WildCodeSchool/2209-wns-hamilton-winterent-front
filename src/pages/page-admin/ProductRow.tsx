import shoe from "../../assets/shoe.png";

interface IProductRowsProps {
  id: string;
  name: string;
  image: string;
  range: string;
  description: string;
  priceHT: number;
  quantity: number;
}

function ProductRow({
  name,
  description,
  range,
  image,
  priceHT,
  quantity,
}: IProductRowsProps) {
  return (
    <tr>
      <td>{name}</td>
      <td>
        <img src={shoe} alt="" />
      </td>
      <td>{description}</td>
      <td>{range}</td>
      <td>{priceHT}</td>
      <td>{quantity}</td>
      <td>
        <button type="button" className="btn btn-success">
          Modifier
        </button>
        <button type="button" className="btn btn-danger">
          Supprimer
        </button>
      </td>
    </tr>
  );
}

export default ProductRow;
