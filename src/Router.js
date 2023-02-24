import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import List from "./pages/List/List";
import Login from "./pages/Login/Login";
import Detail from "./pages/Detail/Detail";
import Contents from "./pages/Contents/Contents";
import Host from "./pages/Host/Host";
import Footer from "./components/Footer/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/contents" element={<Contents />} />
        <Route path="/host" element={<Host />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
