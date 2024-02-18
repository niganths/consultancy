import { useState, useEffect } from "react";
import MyCard from "./MyCard";
import Carouse from "./Carosel";
import "./comp.css";

import img1 from "../../img/desktop-wallpaper-olive-oil-has-a-fraud-problem-cooking-oil-thumbnail.jpg";
import img2 from "../../img/istockphoto-153737841-170667a.webp";
import img3 from "../../img/download (4).jpg";
import img4 from "../../img/download (1).jpg";

const DUMMY_DATA = [
  {
    image: img1,
    title: "RICE",
  },
  {
    image: img2,
    title: "Oil",
  },
  {
    image: img3,
    title: "Wheat",
  },
  {
    image: img4,
    title: "pulses",
  },
  {
    image: img3,
    title: "Millet",
  },
];

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <Carouse />
        <div className="card-container">
          {DUMMY_DATA.map((data, index) => (
            <MyCard key={index} myImage={data.image} myTitle={data.title} />
          ))}
        </div>
      </section>
    </>
  );
}
