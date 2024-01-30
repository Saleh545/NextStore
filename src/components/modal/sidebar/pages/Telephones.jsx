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
        console.log("Data", data);

        // Tel markalarını güncelle
        setTelBrands(data.data.telBrendler);

        // Telefon modellerini güncelle
        setTel(data.data.telephones);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="telephones">
      <div className="left">
        <ul>
          <li>
            <strong>Brendlər</strong>
          </li>
          {telBrands ? (
            telBrands.map((data) => <li key={data.id}>{data.name}</li>)
          ) : (
            <li>Yüklənir...</li>
          )}
        </ul>
      </div>

      <div className="right">
        {tel ? (
          tel.map((data) => (
            <ul key={data.brand}><strong>{data.brand}</strong>
            <li>
                {data.series.map((model, index) => (
                  <li key={index}>{model}</li>
                ))}
              </li>
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
