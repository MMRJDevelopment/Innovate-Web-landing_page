import React from "react";
import Container from "./layout/Container";
import Blog from "./layout/Blog";
import { Flex } from "./layout/Button";

const Latest_Blog = () => {
  return (
    <Container className="mt-[80px] sm:mt-0 mb-[118px]  sm:mb-[40px] md:mb-[50px] ">
      <div className="sm:px-[10px] md:px-4">
        <div className="flex flex-col items-center justify-center">
          <img src="/ring.png" />
          <h2 className="font-open font-extrabold text-[#413F45] py-4 sm:text-[36px] ">
            Our Latest Blog
          </h2>
          <p className="font-open font-normal text-lg text-[#6C7D93] line-[30px] w-[412px] sm:w-full text-center mb-[52px]">
            We provide digital experience services to startups and small
            businesses.
          </p>
        </div>

        <Flex className="items-center sm:flex-col md:flex-wrap justify-between">
          <Blog
            image="samsung-memory-pz67hBsfbJ4-unsplash.jpg"
            title="How to Be Ahead of Stock Changes"
            subTitle="By John  - 5 Comments"
            buttonText="Read more"
          />
          <Blog
            image="kelly-sikkema-EZyux5cpTF0-unsplash.jpg"
            title="Online Reputation And Management"
            subTitle="By Amin  - 10 Comments"
            buttonText="Read more"
          />
          <Blog
            image="pawel-czerwinski-Wuu6H3mI7UA-unsplash.jpg"
            titleClass="w-[272px]"
            title="Tips To Move Your Project More Forward"
            subTitle="By John  - 5 Comments"
            buttonText="Read more"
          />
        </Flex>
      </div>
    </Container>
  );
};

export default Latest_Blog;
