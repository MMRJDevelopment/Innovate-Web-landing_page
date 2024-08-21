import React from "react";
import Container from "./layout/Container";
import ring from "/ring.png";
import { styles } from "../../style";
import { Button } from "./layout/Button";

const Banner = () => {
  return (
    <div className="relative mt-[126px] pb-[207px]">
      <div>
        <img
          src="/texchrer.png"
          className="absolute top-[-220px] left-0 z-[-10]"
        />
        <img
          src="/cratoon.png"
          className=" absolute top-[-50px] left-[85px] z-[-10]"
        />
        <img
          src="/twitter.png"
          className=" absolute bottom-[-50px] left-[70px] z-[-10]"
        />
        <img
          src="/instagram.png"
          className="  absolute top-[430px]  left-[950px] z-[-10]"
        />
        <img src="/face-what.png" className="absolute top-[-220px] right-10" />
      </div>
      <Container>
        <img src={ring} />
        <h1 className={styles.bannerhText}>
          We Are Digital <span className=" text-[#FF7628]  ">Marketing</span>{" "}
          Agency
        </h1>
        <h3 className="font-pap font-normal text-[#6C7D93] w-[571px] mt-5 ">
          Use customer data to build great and solid product experiences that
          convert. Digital marketing’s development has changed the way brands
          and businesses use technology for marketing.{" "}
        </h3>
        <Button className={styles.bannerButton}>Get Free Quoto</Button>
      </Container>
      <div>
        <img
          src=""
          className=" border-8 border-black rounded-[60px] w-[450px] h-[424px] absolute top-[200px] right-[350px]"
          alt=""
        />
        <img
          src=""
          className=" border-8 border-black rounded-[60px] w-[450px] h-[424px] absolute top-0 pt-10 right-[100px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
