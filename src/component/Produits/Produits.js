import React, { useState } from "react";
import "./Produits.sass";
import img from "./fellah.jpg";

const productsData = [
  {
    id: 1,
    title: "steak de poulet",
    image: img,
    category: "poulet",
    ingrédient: "gg",
  },
  {
    id: 2,
    title: "steak de boeuf",
    image: img,
    category: "boeuf",
    ingrédient: "gd",
  },
  {
    id: 3,
    title: "escalope de veau",
    image: img,
    category: "veau",
    ingrédient: "gg",
  },
  {
    id: 4,
    title: "brochette de poulet",
    image: img,
    category: "poulet",
    ingrédient: "gg",
  },
  {
    id: 5,
    title: "steak haché de boeuf",
    image: img,
    category: "boeuf",
    ingrédient: "gg",
  },
  {
    id: 6,
    title: "côte de veau",
    image: img,
    category: "veau",
    ingrédient: "gag",
  },
];

export default function Produits() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = productsData
    .filter(
      (product) =>
        selectedCategory === "all" || product.category === selectedCategory
    )
    .map((product) => (
      <div key={product.id} className="product">
        <h4>{product.title}</h4>
        <img src={product.image} alt={product.title} />
        <span>ingrédients :</span>
        <p>{product.ingrédient}</p>
      </div>
    ));

  return (
    <div id="menu">
      <div id="mainMenu">
        <h1 id="prodTit">Nos Produits</h1>
        <div id="btnMenu">
          <button
            className={`choix ${selectedCategory === "all" ? "active" : ""}`}
            onClick={() => setSelectedCategory("all")}
          >
            tous
          </button>
          <button
            className={`choix ${selectedCategory === "veau" ? "active" : ""}`}
            onClick={() => setSelectedCategory("veau")}
          >
            veau
          </button>
          <button
            className={`choix ${selectedCategory === "poulet" ? "active" : ""}`}
            onClick={() => setSelectedCategory("poulet")}
          >
            poulet
          </button>
          <button
            className={`choix ${selectedCategory === "boeuf" ? "active" : ""}`}
            onClick={() => setSelectedCategory("boeuf")}
          >
            boeuf
          </button>
        </div>
        <div id="lesProd">{products}</div>
      </div>
    </div>
  );
}
