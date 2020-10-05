import React, { useRef } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./index.scss";
import Icon from "../Icon";

export default function () {
  const navbarRef = useRef();
  return (
    <Navbar
      ref={navbarRef}
      expand="md"
      fixed="top"
      // className="solid"
      className="px-4 px-sm-4"
      collapseOnSelect
      onToggle={(expanded) => {
        if (navbarRef.current && navbarRef.current) {
          let navbar = navbarRef.current;
          if (expanded) {
            navbar.classList.add("solid");
          } else {
            navbar.classList.remove("solid");
          }
        }
      }}
    >
      <Navbar.Brand href="#home">MA</Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        children={<Icon icon="fa-align-right" className="navbar-menu-icon" />}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-md-auto text-left mt-3 mt-md-0">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
