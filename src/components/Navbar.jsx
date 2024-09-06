import React, { useState } from "react";
import Container from "../components/layout/Container";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";


import { Button, Flex } from "./layout/Button";
import logo from "/logo.png";
import Li from "./layout/Li";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const handelClick = () => {
    setShow(!show);
    console.log("show")
  };

  return (
    <Container className=" h-auto py-[14px] md:w-auto sm:py-0 sm:w-full sm:p-[10px] md:px-[10px]  ">
      <Flex className="flex flex-row items-center justify-between  ">
        <img src={logo} alt="Logo" />
        <div onClick={handelClick} className=" xl:hidden lg:hidden">
          {show == true ? <IoClose /> : <HiOutlineBars3BottomRight />}
        </div>
        <div
          className={`  absolute top-0 right-0 xl:static lg:static sm:mt-[70px]   md:mt-20   ${
            show
              ? " bg-[#FF7628] px-10 py-4 duration-700 w-full text-white z-50 "
              : " sm:right-[-110px] sm:hidden md:hidden"
          }`}
        >
          <ul className="flex md:block sm:block gap-10 sm:text-white ">
            <Li title="Home" />
            <Li title="About" />
            <Li href="service" title="Service" />
            <Li title="Portfolio" />
            <Li title="Price" />
            <Li title="Blog" />
          </ul>
        </div>

        <Button className=" bg-[#FF7628] px-7 py-[14px] rounded-full font-semibold text-lg sm:hidden md:mx-[4px] md:py-[12px] text-white">
          Contact Us
        </Button>
      </Flex>
    </Container>
  );
};

export default Navbar;
