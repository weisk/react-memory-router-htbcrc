import React, { Component } from "react";
import { render } from "react-dom";
import { MemoryRouter } from "react-router-dom";

import Application from "./app/Application";
import NavBar from "./app/NavBar";
import Footer from "./app/Footer";
import "./style.scss";

const Index = () => (
  <MemoryRouter>
    <NavBar />
    <Application />
  </MemoryRouter>
);

render(<Index />, document.getElementById("root"));
