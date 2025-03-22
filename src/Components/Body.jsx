import "../../styles.css"
import ResturantCard from "./ResturantCard";
import serachIcon from "../assets/2.png";
import { useState,useEffect } from "react";
import {resURL} from "../utils/consts";

export const searchtext = {
  fontFamily: "'Poppins', sans-serif",
};

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredList,setFilteredList] = useState([])
  const [resPriceList, setResPriceList] = useState([])

  useEffect(()=>{
    fetchData()
  },[]);

  const fetchData = async ()=>{
    const data = await fetch(resURL);
    const jsonData = await data.json();
    setResList(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setFilteredList(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setResPriceList(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  }
  console.log(filteredList);
  return (
    <div className="body">
      <div style={searchtext} className="search">
        <input className="serach-field" placeholder="search"></input>
        <button className="search-button"><img className="search-logo" src={serachIcon}></img></button>
        <button className="filter-button" onClick={()=>{
          const filteredResList = filteredList.filter(
            (res) => Number(res.info.avgRating) > 4.2
          );
          setFilteredList(filteredResList)
        }}>
         Filter by Rating
        </button>
        <button className="filter-button" onClick={()=>{
          const filteredByPriceList = resPriceList.filter(
            (res) => (res.info.sla.deliveryTime > 27)
          );
          setResPriceList(filteredByPriceList);
        }}>Filter by Delivery Time</button>
        <button className="filter-button" onClick={()=>{
          setResPriceList(resList);
        }}>Clear The Filter</button>
      </div>
      <div className="res-container">{
        resPriceList.map((item)=><ResturantCard key={item.info?.id} resObj={item}/>)
        }</div>
    </div>
  );
};

export default Body