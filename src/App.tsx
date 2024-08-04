import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OrdinalDetailPage from "./pages/OrdinalDetailPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/ordinal/:wallet/:inscriptionId"
        element={<OrdinalDetailPage />}
      />
    </Routes>
  );
};

export default App;
