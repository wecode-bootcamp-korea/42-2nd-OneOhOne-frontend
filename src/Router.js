import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List/List";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Detail from "./pages/Detail/Detail";
import Contents from "./pages/Contents/Contents";
import Host from "./pages/Host/Host";
import Container from "./components/Container/Container";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Container />}>
          <Route path="/" element={<List />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contents" element={<Contents />} />
        <Route path="/host" element={<Host />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
