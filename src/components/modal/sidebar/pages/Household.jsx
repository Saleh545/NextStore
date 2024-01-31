import React, { useEffect, useState } from "react";

const Household = () => {
  const [brand, setBrands] = useState([]);
  const [hold, setHold] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/db.json");
        const data = await response.json();
        //brend
        // console.log(data);
        setBrands(data.data.holdname);
        //modeller
        setHold(data.data.homeproduct);
      } catch (error) {
        console.error("error data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="parent">
      <div className="left">
        <ul>
          <li>
            <strong>Brendlər</strong>
          </li>
          {brand ? (
            brand.map((data) => <li key={data.id}>{data.name}</li>)
          ) : (
            <li>Yüklənir...</li>
          )}
        </ul>
      </div>


      <div className="right">
        {hold ? (
          hold.map((data) => (
            <ul key={data.brand}>
              <strong>{data.brand}</strong>
              
              {data.models.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          ))
        ) : (
          <li>Yüklənir...</li>
        )}
      </div>
    </div>
  );
};

export default Household;
