import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SkiCard from "../../components/skiCard/SkiCard";
import SearchBar from "../../components/utils/SearchBar";
import { GET_PRODUCT } from "../../graphql/queries/productQuery";
import "./Products.scss";

interface Product {
  id: string;
  name: string;
  description: string;
  range: string;
}

const Products = () => {
  let [searchParams] = useSearchParams();
  const idCategory = searchParams.get("idCategory");
  const idShop = searchParams.get("idShop");

  const [productlist, setProductlist] = useState([]);
  const { loading, error } = useQuery(GET_PRODUCT, {
    variables: { idCategory: idCategory, idShop: idShop },
    onCompleted(data) {
      setProductlist(data.productsFilter);
    },
  });
  // console.log("productlist", productlist);
  // console.log("searchParams", searchParams);
  if (loading) return <div>Chargement en cours</div>;
  if (error) return <div>Une erreur s'est produite</div>;

  return (
    <div className="products">
      <div className="destination-page-image d-flex justify-content-center flex-column align-items-center">
        <div className="text-white d-flex flex-column justify-content-center"></div>
      </div>
      <SearchBar />
      <div className="d-flex justify-content-center mt-4">
        <div className="w-75">
          <h3 className="text-primary">
            <i className="bi bi-chevron-double-down"></i> NOS SKI
          </h3>
          <div>
            Découvrez notre rubrique de location de ski, votre destination pour
            trouver l'équipement parfait. Skis, snowboards, accessoires : nous
            avons tout ce dont vous avez besoin. Notre équipe expérimentée vous
            guidera vers le matériel adapté à votre niveau et à vos préférences.
            Location flexible pour une journée ou plus. Prêt à dévaler les
            pentes en toute sécurité ? Rejoignez-nous dès maintenant !
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center container-product mt-5">
        <div className="w-75">
          <div className="row mt-4">
            {productlist.map((product: Product) => (
              <div key={product.id} className={`col-sm-4 mb-3 mt-6 ski-card`}>
                <SkiCard
                  name={product.name}
                  id={product.id}
                  description={product.description}
                  range={product.range}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
