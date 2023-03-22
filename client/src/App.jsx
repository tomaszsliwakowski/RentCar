import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./containers/HomePage";
import * as ROUTES from "./Routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.Home} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
