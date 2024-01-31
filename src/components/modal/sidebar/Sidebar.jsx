import React from "react";
import "../sidebar/Sidebar.css";
import { NavLink } from "react-router-dom";

import "./pages/Computers";
import "./pages/Telephones";
import "./pages/Household";
import "./pages/Man";
import "./pages/Women";
import "./pages/Kids";
import "./pages/Auto";
import "./pages/Beaitiful";
import "./pages/Sports";
import "./pages/Animals";
import "./pages/Hobbies";
import "./pages/Stationery";
import "./pages/Chemistry";
import "./pages/Bathroom";
import "./pages/Bedroom";
import "./pages/Accessory";

const Sidebar = () => {
  const menuItem = [
    {
      path: "/Computers",
      name: "Kompyuter və noutbuklar",
    },
    {
      path: "/Telephones",
      name: "Telefonlar",
    },
    {
      path: "/Household",
      name: "Məişət texnikası",
    },
    {
      path: "/Man",
      name: "Kişilər üçün geyimlər",
    },
    {
      path: "/Women",
      name: "Qadınlar üçün geyimlər",
    },
    {
      path: "/Kids",
      name: "Uşaqlar üçün geyimlər",
    },
    {
      path: "/Auto",
      name: "Avtomobil məhsulları",
    },
    {
      path: "/Beaitiful",
      name: "Gözəllik və təravət",
    },
    {
      path: "/Sports",
      name: "İdman və əyləncə",
    },
    {
      path: "/Animals",
      name: "Ev heyvanları üçün mallar",
    },
    {
      path: "/Hobbies",
      name: "Hobbi və yaradıcılıq",
    },
    {
      path: "/Stationery",
      name: "Dəftərxana ləvazimatları",
    },
    {
      path: "/Chemistry",
      name: "Məişət kimyası",
    },
    {
      path: "/Bathroom",
      name: "Hamam məhsulları",
    },
    {
      path: "/Bedroom",
      name: "Yataq otağı məhsulları",
    },
    {
      path: "/Accessory",
      name: "Aksesuarlar",
    },
  ];
  return (
    <div className="sidebar" >
      {menuItem.map((item, index) => (
        <NavLink to={item.path} key={index} className="link"  >
          <p className="link-text" >{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
