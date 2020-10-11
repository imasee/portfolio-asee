import React, { useRef, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./index.scss";
import Icon from "../Icon";
import throttle from "lodash.throttle";
import NavLink from "./NavLink";

export default function () {
  const [expanded, setExpanded] = useState(false);
  const [navBackground, setNavBackground] = useState("transparent");
  const navRef = React.useRef();
  navRef.current = navBackground;

  // handle scroll to set app bar background on scroll
  const handleScroll = () => {
    const show = window.scrollY > 66;
    if (show) {
      if (!expanded) {
        setNavBackground("solid");
      }
    } else {
      if (expanded) {
        setNavBackground("solid");
      } else {
        setNavBackground("transparent");
      }
    }
  };

  const throttledHandleWindowScroll = useRef(throttle(handleScroll, 500))
    .current;

  React.useEffect(() => {
    if (throttledHandleWindowScroll) {
      window.addEventListener("scroll", throttledHandleWindowScroll);
    }
    return () => {
      if (throttledHandleWindowScroll) {
        window.removeEventListener("scroll", throttledHandleWindowScroll);
      }
    };
  }, [throttledHandleWindowScroll]);

  let navbarClassList = [expanded ? "solid" : "", navBackground];
  return (
    <Navbar
      // ref={navbarRef}
      expand="md"
      fixed="top"
      className={`px-4 px-sm-4 ${navbarClassList.join(" ")}`}
      collapseOnSelect
      onToggle={(expanded) => {
        if (expanded) {
          setExpanded(true);
        } else {
          setExpanded(false);
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
          <NavLink
            link="About"
            icon="fa-user"
            className="my-2 my-md-0"
          />
          <NavLink
            link="Skills"
            icon="fa-cogs"
            className="my-2 my-md-0"
          />

          <NavLink
            link="Resume"
            icon="fa-file"
            className="my-2 my-md-0"
          />
          <NavLink
            link="Project"
            icon="fa-project-diagram"
            className="my-2 my-md-0"
          />
          <NavLink
            link="Contact"
            icon="fa-address-card"
            className="my-2 my-md-0"
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
