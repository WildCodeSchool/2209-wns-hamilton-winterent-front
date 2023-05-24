import { useQuery } from "@apollo/client";
import { useState } from "react";
// import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { string } from "yargs";
import SkiCard from "../../components/skiCard/SkiCard";
import SearchBar from "../../components/utils/SearchBar";
import { GET_PRODUCT } from "../../graphql/queries/productQuery";
import './Products.scss';


interface Product{
    id: string;
    name: string;
    description: string;
}

const Products = () => {
    
    let [searchParams] = useSearchParams();
    const idCategory = searchParams.get('idCategory');
    const idShop = searchParams.get('idShop');
    console.log("idCategory", idCategory)
    console.log("idShop", idShop)

    const [productlist, setProductlist] = useState([]);
    const { loading, error } = useQuery(GET_PRODUCT, {
      variables: { idCategory: idCategory ,idShop: idShop},
      onCompleted(data) {
          setProductlist(data.productsFilter);
      },
    });
    console.log('productlist', productlist)
    console.log('searchParams', searchParams)
    if (loading) return <div>Chargement en cours</div>;
    if (error) return <div>Une erreur s'est produite</div>;


    return (
        <div className="products">
            <div className="destination-page-image d-flex justify-content-center flex-column align-items-center">
                <div className="text-white d-flex flex-column justify-content-center"></div>
            </div>
            <SearchBar/>
            <div className="d-flex justify-content-center">
                <div className="w-75">
                    <h3 className="text-primary">
                        <i className="bi bi-chevron-double-down"></i> NOS SKI
                    </h3>
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
                        incidunt distinctio deleniti, explicabo eum fuga soluta. Ipsa sit
                        omnis nihil reprehenderit sunt excepturi voluptatum autem, soluta
                        magni cupiditate explicabo quis.
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        {productlist.map((el: Product) => (
                            <div
                                key={el.id}
                                className={`m-2 bg-image-1 d-flex flex-column justify-content-end`}
                            >
                                <SkiCard nameProduct={el.name} idProduct={el.id} descriptionProduct={el.description} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
