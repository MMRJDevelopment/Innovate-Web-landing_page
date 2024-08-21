import React from "react";
import Container from "./layout/Container";
import Service from "./layout/Service";

const Services = () => {
  return (
    <Container className="flex flex-col items-center justify-center mt-[60px] mb-[100px] ">
      <div>
        <img src="/ring.png" />
        <h2 className="font-extrabold font-open text-[#192239] mt-4">
          Our Services
        </h2>
        <h4 className="w-[332px] font-pap text-[#6C7D93] mt-[15px] mb-[52px] text-center">
          We have been providing great flooring solutions service.
        </h4>
      </div>
      <div className="flex flex-row items-center  justify-between gap-[30px]">
        <Service
          background="bg-[#EBF7E9]"
          image="results 1.png"
          title="MARKETING STRATEGY"
          description="Social Media has changed the way we interact & do business while creating"
          button="Read more"
        />
        <Service
          background="bg-[#D8EAFF]"
          image="social-media 1.png"
          title="Social Marketing"
          description="Social Media has changed the way we interact & do business while creating"
          button="Read more"
        />
        <Service
          background="bg-[#FBF1EC]"
          image="social-marketing 1.png"
          title="Content Marketing"
          description="Social Media has changed the way we interact & do business while creating"
          button="Read more"
        />
      </div>
    </Container>
  );
};

export default Services;
