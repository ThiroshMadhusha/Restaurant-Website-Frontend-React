import React from "react";
import "./chose-us.css";
import { Container, Row, Col } from "reactstrap";

import pastaImg from "../../assets/images/pasta.png";

import { FaShippingFast } from "react-icons/fa";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { GrInsecure } from "react-icons/gr";
import { Ri24HoursFill } from "react-icons/ri";

const ChoseUs = () => {
  return (
    <section className="section">
      <Container>
        <Row>
          <Col className="" lg="6">
            <img src={pastaImg} alt="" />
          </Col>
          <Col lg="6">
            <div className="choose__content">
              <h4>Who We Are</h4>
              <h2>Take a Look At The Benefits We Offer You</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore, qui. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Tempore, qui. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Tempore, qui. Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Tempore, qui.
              </p>
            </div>
            <div className="features mt-4">
              <div className="featurel d-flex align-items-center gap-5">
                <div className="single__feature">
                  <span>
                    <i>
                      <FaShippingFast className="ri-truck-line" />
                    </i>
                  </span>
                  <h6>Free Delivery Home</h6>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
                <div className="single__feature">
                  <span className="feature__icon-two">
                    <i>
                      <AiOutlineDollarCircle className="ri-truck-line" />
                    </i>
                  </span>
                  <h6>Return & Refund</h6>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="featurel mt-3 d-flex align-items-center gap-5">
              <div className="single__feature">
                <span className="feature__icon-three">
                  <i>
                    <GrInsecure className="ri-truck-line" />
                  </i>
                </span>
                <h6>Secure Payment</h6>
                <p>Lorem ipsum dolor sit ametr.</p>
              </div>
              <div className="single__feature">
                <span className="feature__icon-four">
                  <i>
                    <Ri24HoursFill className="ri-truck-line" />
                  </i>
                </span>
                <h6>24/7 Hours Support</h6>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChoseUs;
