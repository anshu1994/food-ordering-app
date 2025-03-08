import "../../styles.css"
import ResturantCard from "./ResturantCard";
import serachIcon from "../assets/2.png";
import { resList } from "../utils/consts";
import { useState } from "react";

export const searchtext = {
  fontFamily: "'Poppins', sans-serif",
};

const Body = () => {
  const [filteredList,setFilteredList] = useState(resList)
  console.log(filteredList);
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
         Filter by rating
        </button>
      </div>
      <div className="res-container">{
        filteredList.map((item)=><ResturantCard key={item.data?.id} resObj={item}/>)
        }</div>
    </div>
  );
};

export default Body