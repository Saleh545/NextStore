import React from "react";
import { Route, Routes } from "react-router-dom";
import Computers from "../modal/sidebar/pages/Computers";
import Telephones from "../modal/sidebar/pages/Telephones";
import Household from "../modal/sidebar/pages/Household";
import Man from "../modal/sidebar/pages/Man";
import Women from "../modal/sidebar/pages/Women";
import Kids from "../modal/sidebar/pages/Kids";
import Auto from "../modal/sidebar/pages/Auto";
import Beaitiful from "../modal/sidebar/pages/Beaitiful";
import Sports from "../modal/sidebar/pages/Sports";
import Animals from "../modal/sidebar/pages/Animals";
import Hobbies from "../modal/sidebar/pages/Hobbies";
import Stationery from "../modal/sidebar/pages/Stationery";
import Chemistry from "../modal/sidebar/pages/Chemistry";
import Bathroom from "../modal/sidebar/pages/Bathroom";
import Bedroom from "../modal/sidebar/pages/Bedroom";
import Accessory from "../modal/sidebar/pages/Accessory";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Computers" element={<Computers />} />
      <Route path="/Telephones" element={<Telephones />} />
      <Route path="/Household" element={<Household />} />
      <Route path="/Man" element={<Man />} />
      <Route path="/Women" element={<Women />} />
      <Route path="/Kids" element={<Kids />} />
      <Route path="/Auto" element={<Auto />} />
      <Route path="/Beaitiful" element={<Beaitiful />} />
      <Route path="/Sports" element={<Sports />} />
      <Route path="/Animals" element={<Animals />} />
      <Route path="/Hobbies" element={<Hobbies />} />
      <Route path="/Stationery" element={<Stationery />} />
      <Route path="/Chemistry" element={<Chemistry />} />
      <Route path="/Bathroom" element={<Bathroom />} />
      <Route path="/Bedroom" element={<Bedroom />} />
      <Route path="/Accessory" element={<Accessory />} />
    </Routes>
  );
};
export default AppRoutes;
