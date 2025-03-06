import React from "react";
import ReactDOM from "react-dom/client";
import restaurantImage from "./src/assets/1.png";
import serachIcon from "./src/assets/2.png"
import "./styles.css";


const searchtext = {
    fontFamily: "'Poppins', sans-serif",
};



const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-container">
                <img className="logo"src="https://png.pngtree.com/png-clipart/20241007/original/pngtree-free-food-delivery-logo-template-png-image_16223989.png"></img>
            </div>
            <div className="navitems-container">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const Body = () =>{
    return (
        <div className="body">
            <div style={searchtext}className="search">
                <input className="serach-field" placeholder="search"></input>
                <button className="search-button" onClick={{}}><img className="search-logo" src={serachIcon}></img></button>
            </div>
            <div className="res-container">
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
            </div>
        </div>
    );
}

const ResturantCard = () =>{

    return (
        <div className="res-card">
            <img className="res-imamge" src={restaurantImage} alt = "resturant image"/>
            <h4>Golbari</h4>
            <div className="card-rating">⭐⭐⭐</div>
            <div className="card-inner">
            <span>Delivery Time</span>
            <span>Price</span>
            </div>
        </div>
    );
}

const Footer = ()=>{
    return (
        <div className="res-footer">
            <div className="res-social">
            <h1>Company</h1>
            <ul>
                <li>About Us</li>
                <li>Swiggy Corporate</li>
                <li>Careers</li>
                <li>Team</li>
                <li>Swiggy One</li>
                <li>Swiggy Instamart</li>
            </ul>
            </div>
            <div className="res-social">
            <h1>Company</h1>
            <ul>
                <li>About Us</li>
                <li>Swiggy Corporate</li>
                <li>Careers</li>
                <li>Team</li>
                <li>Swiggy One</li>
                <li>Swiggy Instamart</li>
            </ul>
            </div>
            <div className="res-social">
            <h1>Company</h1>
            <ul>
                <li>About Us</li>
                <li>Swiggy Corporate</li>
                <li>Careers</li>
                <li>Team</li>
                <li>Swiggy One</li>
                <li>Swiggy Instamart</li>
            </ul>
            </div>
        </div>
    )
}

const Applayout = () => {
    return (
        <div className="app-container">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>)