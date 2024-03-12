import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState } from "react";

function filterData(searchText,restaurants){
  return restaurants.filter((restaurant)=>
    restaurant.info.name.includes(searchText)
  )
}


const Body = () => {
  const [searchText,setSearchText]=useState("");
  const [restaurants,setRestaurants]=useState(restaurantList);
  return (
    <>
      <div className="search-div">
        <input
          // className="p-10 m-10"
          type="input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="search-btn" onClick={()=>{
          const data=filterData(searchText,restaurantList);
          setRestaurants(data);
        }}>Search</button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />;
        })}
      </div>
    </>
  );
};
export default Body;
