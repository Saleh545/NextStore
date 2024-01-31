import React, { useEffect, useState } from "react";
import "./Pages.css";

const Computers = () => {
  const [brands, setBrands] = useState([]);
  const [comp, setComp] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/db.json");
        const data = await response.json();
        // Brend
        // console.log(data);
        setBrands(data.data.brendler);
        // notbuk modelleri
        setComp(data.data.laptops);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="parent">
      <div className="left">
        <ul>
          <li><strong>Brendlər</strong></li>

          {brands ? (
            brands.map((brand) => <li key={brand.id}>{brand.name}</li>)
          ) : (
            <li>Yüklənir...</li>
          )}
        </ul>
      </div>

      <div className="right">
        {comp ? (
          comp.map((data) => (
            <ul key={data.brand}>
              <strong>{data.brand}</strong>
              {data.models.map((model, index) => (
                <li key={index}>{model}</li>
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
export default Computers;