import SkiCard from "../../components/skiCard/SkiCard";
import './Products.scss';
const Products = () => {
    return (
        <div className="products">
            <div className="destination-page-image d-flex justify-content-center flex-column align-items-center">
                <div className="text-white d-flex flex-column justify-content-center"></div>
            </div>
            <div>liste input</div>
            <div className="d-flex justify-content-center">
                <div className="w-75">
                    <h3 className="text-primary">
                        <i className="bi bi-chevron-double-down"></i> NOS SKIS
                    </h3>
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
                        incidunt distinctio deleniti, explicabo eum fuga soluta. Ipsa sit
                        omnis nihil reprehenderit sunt excepturi voluptatum autem, soluta
                        magni cupiditate explicabo quis.
                    </div>
                    <SkiCard/>
                </div>
            </div>
        </div>
    );
}

export default Products;
