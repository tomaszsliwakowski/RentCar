import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./containers/HomePage";
import * as ROUTES from "./Routes/Routes";
import CarsPage from "./containers/CarsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.Home} element={<HomePage />} />
        <Route path={ROUTES.Cars} element={<CarsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
