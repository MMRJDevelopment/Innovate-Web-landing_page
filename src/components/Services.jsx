import React from "react";
import Container from "./layout/Container";
import Service from "./layout/Service";

const Services = () => {
  return (
    <Container className="flex flex-col items-center justify-center mt-[60px] mb-[100px]  sm:mb-[30px] md:mb-[10px]  ">
      <div className="sm:px-[10px] ">
        <div className="flex items-center justify-center">
          <img src="/ring.png" />
        </div>
        <h2 className="font-extrabold font-open sm:text-[36px] md:text-[36px] sm:text-center text-[#192239] mt-4">
          Our Services
        </h2>
        <h4 className="w-[332px] sm:w-full font-pap text-[#6C7D93] mt-[15px] mb-[52px] text-center">
          We have been providing great flooring solutions service.
        </h4>
      </div>
      <div className="flex flex-row sm:flex-col md:flex-wrap md:w-full items-center justify-between md:justify-center sm:justify-center gap-[30px] md:gap-[10px] md:px-[10px]">
        <Service
          background="bg-[#EBF7E9]"
          image="results 1.png"
          title="MARKETING STRATEGY"
          description="Social Media has changed the way we interact & do business while creating"
          buttonText="Read more"
        />
        <Service
          background="bg-[#D8EAFF]"
          image="social-media 1.png"
          title="Social Marketing"
          description="Social Media has changed the way we interact & do business while creating"
          buttonText="Read more"
        />
        <Service
          background="bg-[#FBF1EC]"
          image="social-marketing 1.png"
          title="Content Marketing"
          description="Social Media has changed the way we interact & do business while creating"
          buttonText="Read more"
        />
      </div>
    </Container>
  );
};

export default Services;
