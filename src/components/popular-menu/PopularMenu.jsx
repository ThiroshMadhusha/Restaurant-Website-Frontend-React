import React from "react";
import "./menu.css";

import { Container, Row, Col } from "reactstrap";
import { popularMenuFood, pupularMenuFood } from "../../assets/data/products";
import ProductCard from '../product_card/ProductCard'




const PopularMenu = () => {
  return (
    <section className="pt-0 section">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>Popular Food Menu</h2>
          </Col>

          {popularMenuFood.map((item) => (
            <Col lg="3" key={item.id}>
                  <ProductCard item={item}/>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PopularMenu;
