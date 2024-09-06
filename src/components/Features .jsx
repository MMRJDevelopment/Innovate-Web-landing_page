import React from "react";
import Container from "./layout/Container";
import { styles } from "../../style";
import { Flex } from "../components/layout/Button";
const Features = () => {
  return (
    <Container className="pt-[140px] sm:pt-0 md:pt-0 pb-[57px]  ">
      <div className="sm:px-[10px] flex flex-row sm:flex-col md:flex-col  sm:relative md:relative">
        <div className="w-2/5 sm:w-full md:w-full md:flex md:items-center md:justify-center md:gap-6 ">
          <div>
            <img src="/Logo .png" alt="" />
          </div>
          <p className="font-nun font-normal text-lg text-[#6C7D93] line-[180%] w-[449px] md:w-full sm:w-full mt-11 md:mt-0 ">
            Install any demo or template with a single click. You can mix and
            match all the demos & templates. Every demo can be turned into one
            or multi-page.
          </p>
          <p className="font-nun font-normal text-lg text-[#6C7D93]  w-[449px] sm:w-full mt-[149px] sm:absolute left-0 bottom-[-50px] md:absolute md:bottom-0 md:left-0">
            @2024 Innovate.All rights reserved.
          </p>
        </div>

        <div className="w-3/5 pl-[93px] sm:pl-0 sm:w-full md:w-full md:pl-0 md:pt-6">
          <Flex className="items-center justify-between sm:gap-4 sm:flex-wrap sm:mt-4 ">
            <div>
              <h5 className="font-open font-semibold text-2xl text-[#413F45]">
                Features
              </h5>
              <div className="flex flex-col mt-[18px]  sm:mt-[10px]">
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
            <div className="mt-[-142px] sm:mt-[-132px]">
              <h5 className="font-open font-semibold text-2xl text-[#413F45] mt-[18px]">
                Products
              </h5>
              <div className="flex flex-col ">
                <p className={styles.fText}>Task Management</p>
                <p className={styles.fText}>Company growth</p>
                <p className={styles.fText}>Time tracking</p>
              </div>
            </div>
            <div className="mt-[-142px] sm:mt-[-100px] sm:ml-[200px]">
              <h5 className="font-open font-semibold text-2xl text-[#413F45] mt-[18px]">
                Support
              </h5>
              <div className="flex flex-col ">
                <p className={styles.fText}>Customer service</p>
                <p className={styles.fText}>Accessibility</p>
                <p className={styles.fText}>Contact us</p>
              </div>
            </div>
          </Flex>
          <div className="flex sm:flex-col sm:items-start sm:gap-2 sm:mt-[-70px] items-end justify-end gap-[60px]">
            <p className="font-nun font-normal text-lg text-[#6C7D93] sm:mt-0  mt-[30px] ">
              Privacy policy
            </p>
            <p className="font-nun font-normal text-lg text-[#6C7D93] sm:mt-2  mt-[30px] ">
              Terms & condition
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Features;
