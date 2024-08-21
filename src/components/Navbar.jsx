import React from "react";
import Container from "../components/layout/Container";
import { Button } from "./layout/Button";
import logo from "/logo.png";
import Li from "./layout/Li";
const Navbar = () => {
  return (
    <Container className="flex flex-row items-center justify-between h-auto py-[14px]">
      <img src={logo} alt="Logo" />
      <ul className="flex gap-10">
        <Li title="Home" />
        <Li title="About" />
        <Li title="Service" />
        <Li title="Portfolio" />
        <Li title="Price" />
        <Li title="Blog" />
      </ul>
      <Button className="px-7 py-[14px] rounded-full font-semibold text-lg">
       
        Contact Us
      </Button>
    </Container>
  );
};

export default Navbar;
