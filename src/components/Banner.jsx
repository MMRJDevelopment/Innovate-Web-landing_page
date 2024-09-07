import React, { useRef } from "react";
import { motion } from "framer-motion";

import Container from "./layout/Container";
import ring from "/ring.png";
import { styles } from "../../style";
import { Button } from "./layout/Button";

const Banner = () => {
  return (
    <div className="relative pt-[126px] sm:pt-0   sm:mt-10 md:pt-10 pb-[207px] sm:pb-[570px] md:pb-[750px] bg-custom-gradient-100/[.06]  ">
      <div>
        <img
          src="/texchrer.png"
          className="absolute top-[-220px] left-0 z-[-10] sm:hidden md:hidden lg:hidden "
        />

        <motion.div
          animate={{ x: [-20, 0, -10, -20], y: [-100, 0, 50, -100] }}
          transition={{
            repeat: Infinity,
            duration: 20,
          }}
        >
          <img
            src="/cratoon.png"
            className=" absolute top-[-50px]  left-[85px] z-[-10] lg:hidden sm:hidden md:hidden overflow-x-hidden "
          />
        </motion.div>
        <motion.div
          animate={{ x: [-100, 0, -10, -50], y: [600, 600, 500, 400] }}
          transition={{
            repeat: Infinity,
            duration: 20,
          }}
        >
          <img
            src="/twitter.png"
            className=" absolute bottom-[-50px] lg:bottom-0 left-[70px] z-[-10] md:hidden sm:hidden "
          />
        </motion.div>
        <motion.div
          animate={{ x: [-100, 0, -20, -100], y: [50, 0, 50, 0] }}
          transition={{
            repeat: Infinity,
            duration: 20,
          }}
        >
          <img
            src="/instagram.png"
            className="  absolute top-[430px]  left-[950px] z-[-10] lg:hidden md:hidden sm:hidden"
          />
        </motion.div>
        <motion.div
          animate={{ x: [-100, 0, -20, -100], y: [50, 0, 50, 0] }}
          transition={{
            repeat: Infinity,
            duration: 20,
          }}
        >
          <img
            src="/face-what.png"
            className="absolute top-[-220px] right-10 lg:hidden md:hidden sm:hidden"
          />
        </motion.div>
      </div>
      <Container>
        <div className="sm:px-[10px] md:px-[16px]">
          <img src={ring} className="sm:hidden md:hidden " />
          <h1 className="font-extrabold font-open text-[#192239] leading-tight mt-[12px] mb-[20px] w-[686px] sm:text-[36px] md:text-[60px] sm:w-full md:w-full ">
            We Are Digital <span className=" text-[#FF7628]  ">Marketing</span>{" "}
            Agency
          </h1>
          <h3 className="font-pap font-normal text-[#6C7D93] w-[571px] sm:w-full  md:w-full mt-5  sm:text-base ">
            Use customer data to build great and solid product experiences that
            convert. Digital marketing’s development has changed the way brands
            and businesses use technology for marketing.{" "}
          </h3>
          <button className=" bg-[#FF7628] font-bold text-xl sm:text-sm md:text-base text-white px-[40px] py-[20px] sm:px-4 md:px-5  sm:py-3 md:py-4 inline-block rounded-full mt-[32px] ">
            Get Free Quoto
          </button>
        </div>
      </Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <img
          src="/bannerimgtow.jpg"
          className=" drop-shadow-md border-8 border-white rounded-[60px] w-[450px] h-[424px] lg:w-[400px] lg:h-[374px] absolute top-[350px] right-[350px] lg:right-[250px] lg:top-[300px] sm:h-[300px] sm:w-[300px] sm:top-[650px] sm:left-1 md:top-[700px] md:left-1"
          alt=""
        />
        <img
          src="/bannerimone.jpg"
          className=" drop-shadow-md

 bg-cover border-8 border-white rounded-[60px] w-[450px] h-[424px] absolute top-[100px] right-[100px] lg:w-[400px] lg:h-[374px] sm:h-[300px] sm:w-[300px] sm:top-[400px] sm:right-0 md:top-[400px] md:right-0"
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Banner;
