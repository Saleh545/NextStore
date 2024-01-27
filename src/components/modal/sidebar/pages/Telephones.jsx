import React, { useEffect, useState } from "react";
import "./Pages.css";

const Computers = () => {
  const [telBrands, setTelBrands] = useState([]);
  const [tel, setTel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/db.json");
        const data = await response.json();
        // console.log("Data:", data);
        setTelBrands(data.data.brendlers);
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
        setTel(item.laptops);
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
          {telBrands ? (
            telBrands.map((tel) => <li key={tel.id}>{tel.name}</li>)
          ) : (
            <li>Yüklənir...</li>
          )}
        </ul>
      </div>

      <div className="right">
        {tel ? (
          tel.map((item) => (
            <ul key={item.brand}>
              <strong>{item.brand}</strong>
              <li>{item.models.map((model, index) => (
              <li key={index}>{model}</li>))}</li>
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
