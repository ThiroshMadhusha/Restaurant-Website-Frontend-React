import React, { useRef } from "react";
import "./Header.css";
import { Container } from "reactstrap";

import { RiRestaurant2Fill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About",
    url: "#",
  },
  {
    display: "Menu",
    url: "#",
  },
  {
    display: "Recipes",
    url: "#",
  },
  {
    display: "Contact",
    url: "#",
  },
];

const Header = () => {
  const menuRef = useRef();
  const menuToggle = ()=> menuRef.current.classList.toggle("active__menu");

  return (
    <div>
      <header className="header">
        <Container>
          <div className="navigation">
            <div className="logo">
              <h2 className="d-flex align-items-center gap-1">
                <span>
                  <i>
                    <RiRestaurant2Fill className="restaurant-logo" />
                  </i>
                </span>
                Sea Foods
              </h2>
            </div>

            <div className="nav__menu" ref={menuRef}>
              <div className="nav__list__wrapper d-flex align-items-center gap-5">
                <ul className="nav__list">
                  {navLinks.map((item, index) => (
                    <li className="nav__item" key={index}>
                      <a href={item.url} onClick={menuToggle}>
                        {item.display}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="menu__right">
                  <div className="custom__search">
                    <input type="text" placeholder="Search Items .." />
                    <span>
                      <i>
                        <BiSearch className="search" />
                      </i>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="cart__icon">
                <i>
                  <AiOutlineShoppingCart />
                </i>
                <span className="badge">2</span>
              </span>
            </div>

            <div className="mobile__menu">
              <span>
                <i>
                  <AiOutlineMenu className="menu" onClick={menuToggle} />
                </i>
              </span>
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
};

export default Header;
