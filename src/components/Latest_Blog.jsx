import React from "react";
import Container from "./layout/Container";
import Blog from "./layout/Blog";
import { Flex } from "./layout/Button";

const Latest_Blog = () => {
  return (
    <Container className="mt-[80px] mb-[118px]">
      <div className="flex flex-col items-center justify-center">
        <img src="/ring.png" />
        <h2 className="font-open font-extrabold text-[#413F45] py-4 ">
          Our Latest Blog
        </h2>
        <p className="font-open font-normal text-lg text-[#6C7D93] line-[30px] w-[412px] text-center mb-[52px]">
          We provide digital experience services to startups and small
          businesses.
        </p>
      </div>
      <Flex className="items-center justify-between">
        <Blog
          image="alexande.jpg"
          title="How to Be Ahead of Stock Changes"
          subTitle="By John  - 5 Comments"
          buttonText="Read more"
        />
        <Blog
          title="Online Reputation And Management"
          subTitle="By Amin  - 10 Comments"
          buttonText="Read more"
        />
        <Blog
          titleClass="w-[272px]"
          title="Tips To Move Your Project More Forward"
          subTitle="By John  - 5 Comments"
          buttonText="Read more"
        />
      </Flex>
    </Container>
  );
};

export default Latest_Blog;
