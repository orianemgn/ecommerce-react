import { CategoryItem } from "../components/category-item/index" ;
import {CategoriesList} from "../components/categories-list/index";
import { useEffect, useState } from "react";
import axios from "axios";
import {useFetch} from "../components/hooks/useFetch";

const data = [
    {
      id: 1,
      name: "Clothes",
      image: "https://api.lorem.space/image/fashion?w=640&h=480&r=6011",
    },
    {
      id: 2,
      name: "Electronics",
      image: "https://api.lorem.space/image/watch?w=640&h=480&r=304",
    },
    {
      id: 3,
      name: "Furniture",
      image: "https://api.lorem.space/image/furniture?w=640&h=480&r=9450",
    },
    {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=3133",
    },
    {
      id: 5,
      name: "Others",
      image: "https://api.lorem.space/image?w=640&h=480&r=4432",
    },
  ];

  const urlAPI =  `https://api.escuelajs.co/api/v1/categories`; 

const Categories = () => {

    const [categoriesResp, errorResp, isLoading] = useFetch(urlAPI)


    if (isLoading){

        return <h2>request is still in process, loading...</h2>
    }

    if (errorResp) {
        console.log("error: ", errorResp);
        return <h2>an error has occurred, please contact the support</h2>;
      }
  

    return (
        <div>
            <CategoriesList>
              {categoriesResp.data.map((element, index) => {
                const {id, name, image, url} = element; 
                return (
                  <CategoryItem key={id || index} name={name} image={image}/>
                )
              })}
            </CategoriesList>
        </div>
        
    );
};

export default Categories; 