import React from "react";
import Container from "./layout/Container";
import { Button, Flex } from "./layout/Button";

const Review = () => {
  return (
    <Container className="py-[100px] ">
      <div className="flex sm:flex-col md:flex-wrap flex-row items-center justify-between sm:px-[10px] md:px-[16px]">
        <div>
          <div className="flex sm:items-center sm:justify-center md:items-center md:justify-center">
            <img src="/ring.png" />
          </div>
          <h2 className="font-open font-extrabold text-[#192239] py-4 sm:text-[36px] sm:text-center ">
            Client Review
          </h2>
          <p className="font-pap font-normal text-lg text-[#6C7D93] line-[30px] w-[331px] sm:w-full sm:text-center mb-[52px]">
            people use digital devices instead of visiting physical shops,
            digital marketing campaigns are becoming more prevalent and
            efficient.
          </p>
          {/* <Flex>
            <Button className="" title="" />
            <Button className="" title="" />
          </Flex> */}
        </div>
        <div className="pt-[25px] pb-10 pl-10 pr-[52px] hover:bg-[#D8EAFF] rounded-2xl">
          <p className="font-pap font-normal text-lg text-[#6C7D93] line-[30px] w-[270px] sm:w-full mb-[52px]">
            Content Marketing is the other fold of online advertisement. If you
            are looking to build. digital marketing campaigns are becoming more
            prevalent and efficient.{" "}
          </p>
          <Flex className="gap-[20px]">
            <Flex className="relative">
              <img
                src="/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
                alt=""
                className="w-[94px] h-[94px] rounded-full bg-cover "
              />
              <img
                src="/samicoln.png"
                className=" absolute bottom-[-10px] right-[-10px]"
              />
            </Flex>
            <div>
              <h5 className="font-open font-semibold text-[#202427] text-[24px]">
                Eleanor Pena
              </h5>
              <p className="font-open font-semibold text-[#202427] text-lg">
                Architecture
              </p>
            </div>
          </Flex>
        </div>
        <div className="pt-[25px] pb-10 pl-10 pr-[52px] hover:bg-[#D8EAFF] rounded-2xl ">
          <p className="font-pap font-normal text-lg text-[#6C7D93] line-[30px] sm:w-full w-[270px] mb-[52px]">
            Content Marketing is the other fold of online advertisement. If you
            are looking to build. digital marketing campaigns are becoming more
            prevalent and efficient.{" "}
          </p>
          <Flex className="gap-[20px]">
            <Flex className="relative">
              <img
                src="/almos-bechtold-3402kvtHhOo-unsplash.jpg"
                alt=""
                className="w-[94px] h-[94px] rounded-full"
              />
              <img
                src="/samicoln.png"
                className=" absolute bottom-[-10px] right-[-10px]"
              />
            </Flex>
            <div>
              <h5 className="font-open font-semibold text-[#202427] text-[24px]">
                Jane Cooper
              </h5>
              <p className="font-open font-semibold text-[#202427] text-lg">
                Fashion Designer
              </p>
            </div>
          </Flex>
        </div>
      </div>
    </Container>
  );
};

export default Review;
