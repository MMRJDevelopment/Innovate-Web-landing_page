import React from "react";
import Container from "./layout/Container";
import Step from "./layout/Step";
import { Flex } from "./layout/Button";

const Creative = () => {
  return (
    <Container className="mt-[80px] mb-[100px]">
      <div className="flex flex-col items-center justify-center">
        <img src="/ring.png" />
        <h2 className="font-open font-extrabold text-[#192239] py-4 ">
          Our creative process.
        </h2>
        <p className="font-open font-normal text-lg text-[#6C7D93] line-[30px] w-[412px] text-center mb-[52px]">
          We provide digital experience services to startups and small
          businesses.
        </p>
      </div>
      <Flex>
        <Step
          subTitle="Step-1"
          title="Global SEO Research"
          description="Practical tools and features make it easier to build and manage your site."
        />
        <img
          src=""
          className="w-[570px] h-[324px] rounded-2xl ml-[133px] bg-black"
        />
      </Flex>
      <Flex>
        <img
          src=""
          className="w-[570px] h-[324px] rounded-2xl mr-[133px] bg-black"
        />
        <Step
          subTitle="Step-1"
          title="Global SEO Research"
          description="Practical tools and features make it easier to build and manage your site."
        />
      </Flex>
      <Flex>
        <Step
          subTitle="Step-1"
          title="Global SEO Research"
          description="Practical tools and features make it easier to build and manage your site."
        />
        <img
          src=""
          className="w-[570px] h-[324px] rounded-2xl ml-[133px] bg-black"
        />
      </Flex>
    </Container>
  );
};

export default Creative;
