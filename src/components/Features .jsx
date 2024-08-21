import React from "react";
import Container from "./layout/Container";
import { styles } from "../../style";

const Features = () => {
  return (
    <Container className="pt-[140px] pb-[57px] flex flex-row ">
      <div className="w-2/5 ">
        <img src="/Logo .png" alt="" />
        <p className="font-nun font-normal text-lg text-[#6C7D93] line-[180%] w-[449px] mt-11 ">
          Install any demo or template with a single click. You can mix and
          match all the demos & templates. Every demo can be turned into one or
          multi-page.
        </p>
        <p className="font-nun font-normal text-lg text-[#6C7D93]  w-[449px] mt-[149px] ">
          @2024 Innovate.All rights reserved.
        </p>
      </div>

      <div className="w-3/5 pl-[93px]">
        <div>
          <h5 className="font-open font-semibold text-2xl text-[#413F45]">
            Features
          </h5>
          <div className="flex flex-col ">
            <a href="" className={styles.fText}>  
              Home
            </a>
            <a href="" className={styles.fText}>
              About
            </a>
            <a href="" className={styles.fText}>
              Benifit
            </a>
            <a href="" className={styles.fText}>
              Pricing
            </a>
            <a href="" className={styles.fText}>
              Blog
            </a>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};

export default Features;
