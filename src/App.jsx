import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Router/home/Home";
import Header from "./components/header/Header";
import ContextProvider from "./context/Context";
import SinglePage from "./Router/singlePage/SinglePage";

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sigle-page/:id" element={<SinglePage />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
};

export default App;
