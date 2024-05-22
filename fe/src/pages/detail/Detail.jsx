import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams } from 'react-router-dom';
function Detail() {
    const [data, setData] = useState([]);
    const {id}=useParams()
    async function getAllData( ) {
      const response = await fetch("http://localhost:3000/product/"+id);
      const datasAll = await response.json();
      return setData(datasAll)
    }
  
      useEffect(() => {
        getAllData();
      }, []);
  return (
    <div>
          <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="cards">
              <div className="card">
                <img src={data.image} alt="" />
                <p>{data.name}</p>
                <p>{data.price}</p>
              </div>
            </div>
    </div>
  )
}

export default Detail
