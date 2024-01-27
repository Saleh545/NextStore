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
        // console.log("Data:", data);
        setBrands(data.data.brendler);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const compData = async () => {
      try {
        const res = await fetch("/db.json");
        const item = await res.json();
        // console.log("comp-data", item);
        setComp(item.laptops);
      } catch (error) {
        console.error("error data", error);
      }
    };
    compData();
  }, []);

  return (
    <div className="telephones">
      <div className="left">
        <ul>
          <li>
            <strong>Brendlər</strong>
          </li>
          {brands ? (
            brands.map((brand) => <li key={brand.id}>{brand.name}</li>)
          ) : (
            <li>Yüklənir...</li>
          )}
        </ul>
      </div>

      <div className="right">
        {comp ? (
          comp.map((item) => (
            <ul key={item.brand}>
              <strong>{item.brand}</strong>
              <li>{item.models.map((model, index) => (<li key={index}>{model}</li>))}</li>
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
