import React from "react";
import "./testimonials.css";

import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import testimonialImg from "../../assets/images/review1.png";


const Testimonials = () => {

    // Add Slider Autoplay

     const settings = {
       infinite: true,
       dots: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 3000,
     };
  return (
    <section className="section">
      <Container>
        <Row>
          <Col lg="10" className="m-auto">
            <div className="slider__wrapper d-flex align-item-center gap-5">
              <div className="slider__content w-50">
                <h2 className="mb-3">What Our Customers Are Saying..!!</h2>
                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <p className="review__content">
                        "Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Suscipit ipsum quasi fugit quo vero, eveniet
                        excepturi, consequatur quae deserunt maxime voluptatum
                        atque repellendus totam magni asperiores possimus,
                        laudantium dolorem omnis."
                      </p>
                      <h6>Customer 1</h6>
                      <p>Amazing Food</p>
                    </div>
                  </div>
                  <div>
                    <div className="single__testimonial">
                      <p className="review__content">
                        "Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Suscipit ipsum quasi fugit quo vero, eveniet
                        excepturi, consequatur quae deserunt maxime voluptatum
                        atque repellendus totam magni asperiores possimus,
                        laudantium dolorem omnis."
                      </p>
                      <h6>Customer 2</h6>
                      <p>Supper Bro</p>
                    </div>
                  </div>
                  <div>
                    <div className="single__testimonial">
                      <p className="review__content">
                        "Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Suscipit ipsum quasi fugit quo vero, eveniet
                        excepturi, consequatur quae deserunt maxime voluptatum
                        atque repellendus totam magni asperiores possimus,
                        laudantium dolorem omnis."
                      </p>
                      <h6>Customer 3</h6>
                      <p>Grate Foods Menu</p>
                    </div>
                  </div>
                  <div>
                    <div className="single__testimonial">
                      <p className="review__content">
                        "Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Suscipit ipsum quasi fugit quo vero, eveniet
                        excepturi, consequatur quae deserunt maxime voluptatum
                        atque repellendus totam magni asperiores possimus,
                        laudantium dolorem omnis."
                      </p>
                      <h6>Customer 4</h6>
                      <p>Fast Food Delivery</p>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="slider__img w-50">
                <img src={testimonialImg} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
