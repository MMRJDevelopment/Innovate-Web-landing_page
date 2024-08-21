import React from "react";
import Container from "./layout/Container";
import { Button, Flex } from "./layout/Button";

const Review = () => {
  return (
    <Container className="py-[100px] flex flex-row items-center justify-between ">
      <div>
        <img src="/ring.png" />
        <h2 className="font-open font-extrabold text-[#192239] py-4 ">
          Client Review
        </h2>
        <p className="font-pap font-normal text-lg text-[#6C7D93] line-[30px] w-[331px] mb-[52px]">
          people use digital devices instead of visiting physical shops, digital
          marketing campaigns are becoming more prevalent and efficient.
        </p>
        <Flex>
          <Button className="" title="" />
          <Button className="" title="" />
        </Flex>
      </div>
      <div className="pt-[25px] pb-10 pl-10 pr-[52px] hover:bg-[#D8EAFF] rounded-2xl">
        <p className="font-pap font-normal text-lg text-[#6C7D93] line-[30px] w-[270px] mb-[52px]">
          Content Marketing is the other fold of online advertisement. If you
          are looking to build. digital marketing campaigns are becoming more
          prevalent and efficient.{" "}
        </p>
        <Flex className="gap-[20px]">
          <Flex className="relative">
            <img src="" alt="" className="w-[94px] h-[94px] rounded-full" />
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
      <div className="pt-[25px] pb-10 pl-10 pr-[52px] hover:bg-[#D8EAFF] rounded-2xl">
        <p className="font-pap font-normal text-lg text-[#6C7D93] line-[30px] w-[270px] mb-[52px]">
          Content Marketing is the other fold of online advertisement. If you
          are looking to build. digital marketing campaigns are becoming more
          prevalent and efficient.{" "}
        </p>
        <Flex className="gap-[20px]">
          <Flex className="relative">
            <img src="" alt="" className="w-[94px] h-[94px] rounded-full" />
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
    </Container>
  );
};

export default Review;
