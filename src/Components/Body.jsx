import "../../styles.css"
import ResturantCard from "./ResturantCard";
import serachIcon from "../assets/2.png";
import { resList } from "../utils/consts";
import { useState,useEffect } from "react";

export const searchtext = {
  fontFamily: "'Poppins', sans-serif",
};

const Body = () => {
  const [filteredList,setFilteredList] = useState(resList)

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.9974&lng=79.0011&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsonData = await data.json();
    console.log(jsonData);
  }

  return (
    <div className="body">
      <div style={searchtext} className="search">
        <input className="serach-field" placeholder="search"></input>
        <button className="search-button"><img className="search-logo" src={serachIcon}></img></button>
        <button className="filter-button" onClick={()=>{
          const filteredResList = resList.filter(
            (res) => Number(res.data.avgRating) > 4
          );
          setFilteredList(filteredResList)
        }}>
         Filter by Rating
        </button>
        <button className="filter-button" onClick={()=>{
          const filteredByPriceList = resList.filter(
            (res) => (res.data.costForTwo/100) < 400
          );
          setFilteredList(filteredByPriceList);
        }}>Filter by Price</button>
      </div>
      <div className="res-container">{
        filteredList.map((item)=><ResturantCard key={item.data?.id} resObj={item}/>)
        }</div>
    </div>
  );
};

export default Body