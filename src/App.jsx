import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Error from "./pages/Erorr/Error";
import HomePage from "./pages/Home/Home";
import LandingPage from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import MovieDetail from "./pages/MovieDetail/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage/>} />
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/detail/:id" element={<MovieDetail/>} />
          <Route path="*" element={<Error/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
