import { useState, useEffect } from "react";
import MyCard from "./MyCard";
import Carouse from "./Carosel";
import "./comp.css";
import img1 from "../../img/20240201_173600.jpg";
import img2 from "../../img/20240201_173607.jpg";
import img3 from "../../img/20240201_173611.jpg";
import img4 from "../../img/20240201_173615.jpg";

const DUMMY_DATA = [
  {
    image: img1,
    title: "RICE",
    description: "",
    button: "view",
  },
  {
    image: img2,
    title: "Oil",
    description: "",
    button: "view",
  },
  {
    image: img3,
    title: "Wheat",
    description: "",
    button: "view",
  },
  {
    image: img4,
    title: "pulses",
    description: "",
    button: "view",
  },
  {
    image: img3,
    title: "Millet",
    description: "",
    button: "view",
  },
  {
    image: img3,
    title: "seeds",
    description: "",
    button: "view",
  },
  {
    image: img3,
    title: "Masala powder",
    description: "",
    button: "view",
  },

  {
    image: img3,
    title: "",
    description: "",
    button: "view",
  },
  {
    image: img3,
    title: "c",
    description: "",
    button: "view",
  },
  {
    image: img3,
    title: "c",
    description: "",
    button: "view",
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
            <MyCard
              key={index}
              myImage={data.image}
              myTitle={data.title}
              myDescription={data.description}
              buttonText={data.button}
            />
          ))}
        </div>
      </section>
    </>
  );
}
