import React, { useEffect, useState } from "react";

const Man = () => {
  const [man, setMan] = useState([]);
  const [menProduct, setMenProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/db.json");
        const data = await response.json();
        // left
        console.log(data);
        setMan(data.data.menclothes);
        // right
        setMenProduct(data.data.menproduct);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="parent">
      <div className="left">
        <ul>
          <li>
            <strong>Geyim</strong>
          </li>
          {man ? (
            man.map((data) => <li key={data.id}>{data.name}</li>)
          ) : (
            <li>Yüklənir...</li>
          )}
        </ul>
      </div>

      <div className="right">
        {menProduct ? (
          menProduct.map((data) => (
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

export default Man;
