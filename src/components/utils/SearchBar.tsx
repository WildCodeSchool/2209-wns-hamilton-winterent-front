import React from 'react'
import './SearchBar.scss'
import { useState } from "react"
import { SHOPS } from '../../graphql/queries/shopQuery';
import { useQuery } from '@apollo/client';
import { LIST_CATEGORY } from '../../graphql/queries/categoryQuery';
// import { useShopContext } from "";

interface Shop {
    id: string;
    name: string;
}

interface CategoryName {
    id: string;
    category: string;
}


export default function SearchBar() {
    //date du jour
    let currentDate = new Date().toISOString().slice(0, 10)

    //Sélectionner la date sélectionner dans le calendrier avec onChange
    const [dateArrival, setDateArrival] = useState<string | null>('');
    const [dateDeparture, setDateDeparture] = useState<string | null>(''); 
    const [categories, setCategories] = useState<CategoryName[]>([]);

    
    // récupérer les shops
    const [shops, setShops] = useState<Shop[]>([]);
    const { loading, error } = useQuery(SHOPS, {
        onCompleted(data) {
          setShops(data.shops);
        },
    });

    //Récupérer les catégories
    const { loading: loadingCategory, error: errorCategory } = useQuery(LIST_CATEGORY, {
      onCompleted(data) {
        setCategories(data.listCategory);
        console.log(data.listCategory)
      },
    });

    const onChangeArrival = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newArrival = e.target.value
      setDateArrival(newArrival)
  
    }
    const onChangeDeparture = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newDeparture = e.target.value
      setDateDeparture(newDeparture)
  
    }

    //condition la date de départ plus récent que date d'arriver
    if (dateArrival && dateDeparture){
        if (dateArrival > dateDeparture)
        {
            alert("Votre date d'arrivée ne peux pas être plus récente que votre date de départ");
            //dateDeparture.innerHTML = "";
        }
    }
    if (loading) return <div>Chargement en cours</div>;
    if (error) return <div>Une erreur s'est produite</div>;
 
    return(
        <form className="search-bar rounded border border-primary">
            <select className="product-search rounded-left"  defaultValue="" required>
                <option value="" disabled selected>Catégories</option>
                {categories.map(category =>
                    <option value={category.category} selected key={category.id}>{category.category}</option> 
                    )}
            </select>
            <select className="product-search border-left"  defaultValue="" required>
                <option value="" disabled selected>Magasins</option>
                {shops.map(shop =>
                    <option value={shop.name} selected key={shop.id}>{shop.name}</option> 
                    )}
            </select>
            <div className="date-start ">
                <input className="block-arrival search-date" 
                    type="date" 
                    placeholder="selectionner arrivée" 
                    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" 
                    title="yyyy-mm-dd" 
                    min={currentDate}
                    name="arrival" 
                    onChange={onChangeArrival}
                    required
                    />
            </div>
            <div className="date-end search-date ">
                <input className="block-departure search-date" 
                    type="date" 
                    placeholder="selectionner départ" 
                    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" 
                    title="yyyy-mm-dd" 
                    min={currentDate}
                    name="departure" 
                    onChange={onChangeDeparture}
                    required
            />
            </div>
            <button type="submit" value="Rechercher" className="btn_travelSearch rounded-right">
                Chercher
            </button>
        </form>
    )
}