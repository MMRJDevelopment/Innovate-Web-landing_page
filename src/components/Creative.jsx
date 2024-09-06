import React from "react";
import Container from "./layout/Container";
import Step from "./layout/Step";
import { Flex } from "./layout/Button";

const Creative = () => {
  return (
    <Container className="mt-[80px] sm:mt-0 md:mt-0 mb-[100px]  ">
      <div className="sm:px-[10px]">
        <div className="flex flex-col items-center justify-center ">
          <img src="/ring.png" />
          <h2 className="font-open font-extrabold text-[#192239] py-4 sm:text-[38px] sm:text-center">
            Our creative process.
          </h2>
          <p className="font-open font-normal text-lg text-[#6C7D93] line-[30px] w-[412px] sm:w-full text-center mb-[52px]">
            We provide digital experience services to startups and small
            businesses.
          </p>
        </div>
        <div className="sm:flex-col flex  md:flex-col md:flex md:items-center md:justify-center">
          <Step
            subTitle="Step-1"
            title="Global SEO Research"
            description="Practical tools and features make it easier to build and manage your site."
          />
          <img
            src="/marvin-meyer-SYTO3xs06fU-unsplash.jpg"
            className="w-[570px] h-[324px] rounded-2xl ml-[133px] md:ml-0 md:my-3  sm:my-3 sm:ml-0 bg-cover bg-center "
          />
        </div>
        <div className="sm:flex-col flex  md:flex-col md:flex md:items-center md:justify-center">
          <img
            src="/jason-goodman-bzqU01v-G54-unsplash.jpg"
            className="w-[570px] h-[324px] rounded-2xl mr-[133px] md:mr-0 md:mb-3 sm:mb-3  bg-cover"
          />
          <Step
            subTitle="Step-1"
            title="Global SEO Research"
            description="Practical tools and features make it easier to build and manage your site."
          />
        </div>
        <div className="sm:flex-col flex  md:flex-col md:flex md:items-center md:justify-center md:my-3 sm:my-3">
          <Step
            subTitle="Step-1"
            title="Global SEO Research"
            description="Practical tools and features make it easier to build and manage your site."
          />
          <img
            src="/cowomen-3ALW9V3jNkc-unsplash.jpg"
            className="w-[570px] h-[324px] rounded-2xl ml-[133px] md:ml-0 sm:ml-0 md:mt-3 sm:mt-3 bg-cover"
          />
        </div>
      </div>
    </Container>
  );
};

export default Creative;
