import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./containers/HomePage";
import * as ROUTES from "./Routes/Routes";
import CarsPage from "./containers/CarsPage";
import BeatLoader from "react-spinners/BeatLoader";

function App() {
  const override = {
    display: "flex",
    margin: "0 auto",
    borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.Home} element={<HomePage />} />
        <Route path={ROUTES.Cars} element={<CarsPage />} />
        <Route
          path="*"
          element={
            <BeatLoader
              color={"#ef4444"}
              loading={true}
              cssOverride={override}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
