import ReactDOM from "react-dom";
import React from "react";
import CollectionSwiper from "./components/CollectionSwiper";

const rootEl = document.getElementById("react-collection-swiper");

ReactDOM.render(<CollectionSwiper props={window.__myData}/>, rootEl);