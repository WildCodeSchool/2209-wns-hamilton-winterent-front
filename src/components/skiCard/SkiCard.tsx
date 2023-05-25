import './SkiCard.scss';
import ski from '../../assets/ski_rx.png';
import shoe from '../../assets/shoe.png';
import helmet from '../../assets/helmet.png';
import { Link } from 'react-router-dom';

interface Product {
    idProduct: string;
    nameProduct: string;
    descriptionProduct: string;
    range: string
    // image: string
}


function SkiCard ({nameProduct, range }: Product) {
    
    return (
      <div className="cardContainer container w-100 m-4 bg-white shadow-sm">

        <div className="skiInfos row">
            <h3 className="range fs-2 fw-normal">BRONZE</h3>
            <h5 className="skiModel fw-normal">{range} {nameProduct}</h5>
            <p>ou modèle équivalent</p>
            <h3>29€</h3>
        </div>

        <div className="packageContainer row">          
            <div className='skipic col-4 p-0'>
                <img className="skiImage" src={ski} alt=""/>
            </div>
            <div className="accessory col-8">
                <div className=""> 
                    <h6 className='mb-0 fw-bold'>+ Infos</h6>
                    <p className='mb-0'>Bâtons inclus</p>
                </div>
                <div className="shoesInfos" >
                    <img className="shoeImage" src={shoe} alt=""/>
                    <p className="text-center mb-1">(inclus)</p>
                    <div className="form-check ">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox"/>
                            Chaussures
                        </label>
                    </div>
                </div>
                <div className="helmetInfos">
                    <img className="shoeImage" src={helmet} alt=""/>
                    <p className="text-center mb-1">conseillé!</p>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox"/>
                            Casque
                        </label>
                    </div>
                </div>
                <div className="others text-wrap fw-bold mt-2"> VOIR LES AUTRES MODELES</div>
            </div>
        </div>
        <Link className="w-100 btn btn-primary mt-3 mb-3" type="submit" to={''}>Sélectionner</Link>

      </div>
    );
  }
  
  export default SkiCard;