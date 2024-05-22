import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BasketContext } from "../../context/BasketProvider";
import "./Home.scss";
function Home() {
  const { addBasket } = useContext(BasketContext);
  const [inp, setInp] = useState([]);
  const [data, setData] = useState([]);

  async function getAllData() {
    const response = await fetch("http://localhost:3000/product/");
    const datas = await response.json();
    console.log(datas);
    setData(datas);
  }
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <div >
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section className="hero">
      <div className="hero-cards">
        <div className="hero-left">
          <img
            src="https://preview.colorlib.com/theme/shop/img/header-img.png"
            alt=""
          />
          
        </div>
        <div className="hero-right">
          <span>Flat</span>
          <span className="percent">75%Off</span>
          <h1>IT’S HAPPENING THIS SEASON!</h1>
          <button>Purchase Now</button>
        </div>
      </div>
      </section>
      {/* <section className="categories">
          <h1>Shop for Different Categories</h1>
          <p>Who are in extremely love with eco friendly system.</p>
      
<div class="grid-container">
  <div class="grid-item item2">2</div>
  <div class="grid-item item3">3</div>  
  <div class="grid-item item4">4</div>
  <div class="grid-item item5">5</div>
  
</div>
      </section> */}
      <section className="forMen">
             {data
    //   .filter((x)=>x.name.toLowerCase().include(inp.toLowerCase()))
      .map((x) => {
        return (
          <>
            <div className="cards" key={x._id}>
              <div className="card">
                <img src={x.image} alt="" />
                <p>{x.name}</p>
                <p>{x.price}</p>
                <Link to={`/detail/${x._id}`}>detail</Link>
                <button onClick={()=>addBasket(x)}>add</button>
              </div>
            </div>
          </>
        );
      })}
      </section>
    
      {/* <input type="text" 
      placeholder="filter"  
      value={inp}
      onChange={(e)=>/> */}
   
    </div>
  );
}

export default Home;
