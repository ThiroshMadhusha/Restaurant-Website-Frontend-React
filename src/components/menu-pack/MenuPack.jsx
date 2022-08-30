import React, { useState, useEffect } from "react";
import "./menu-pack.css";

import { Container, Row, Col } from "reactstrap";
import ProductCard from "../product_card/ProductCard";
import {
  fastFoodProducts,
  riceMenuProducts,
  dessertProducts,
  pizzaProducts,
  coffeeProducts,
} from "../../assets/data/products";

const MenuPack = () => {
  const [filter, setFilter] = useState("RICE-MENU");
  const [products, setProducts] = useState(riceMenuProducts);

  useEffect(() => {
    if (filter === "RICE-MENU") {
      setProducts(riceMenuProducts);
    }
    if (filter === "FAST-FOOD") {
      setProducts(fastFoodProducts);
    }

    if (filter === "PIZZA") {
      setProducts(pizzaProducts);
    }

    if (filter === "DESSERT") {
      setProducts(dessertProducts);
    }

    if (filter === "COFFEE") {
      setProducts(coffeeProducts);
    }
  }, [filter]);

  return (
    <section className="section">
      <Container>
        <Row>
          <Col className="text-center mb-4" lg="12">
            <h3 className="menu__title">Our Menu Pack</h3>
          </Col>
          <Col className="text-center mb-5" lg="12">
            <button
              className={`filter-btn ${
                filter === "FAST-FOOD" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("FAST-FOOD")}
            >
              Fast Food
            </button>
            <button
              className={`filter-btn ${
                filter === "RICE-MENU" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("RICE-MENU")}
            >
              Rice Menu
            </button>
            <button
              className={`filter-btn ${
                filter === "PIZZA" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("PIZZA")}
            >
              Pizza Menu
            </button>
            <button
              className={`filter-btn ${
                filter === "DESSERT" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("DESSERT")}
            >
              Dessert Menu
            </button>
            <button
              className={`filter-btn ${
                filter === "COFFEE" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("COFFEE")}
            >
              Coffee Menu
            </button>
          </Col>

          {products.map((item) => (
            <Col lg="3" key={item.id}>
              {" "}
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MenuPack;
