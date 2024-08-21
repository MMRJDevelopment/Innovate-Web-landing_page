import React from "react";
import Container from "./layout/Container";
import { styles } from "../../style";
import { Flex } from "./layout/Button";

const Work = () => {
  return (
    <Container className="pt-[80px] pb-[100px]">
      <div className="flex flex-col items-center justify-center">
        <img src="/ring.png" />
        <h2 className="font-open font-extrabold text-[#192239] py-4 ">
          Work Showcase
        </h2>
      </div>
      <div className="pt-[47px] pb-[52px] ">
        <a href="" className={styles.workA}>
          All
        </a>
        <a href="" className={styles.workA}>
          Digital Mkt
        </a>
        <a href="" className={styles.workA}>
          Branding
        </a>
        <a href="" className={styles.workA}>
          Content Mkt
        </a>
        <a href="" className={styles.workA}>
          Social Media Mkt
        </a>
      </div>
      <div>
        <Flex>
          <img
            src=""
            className="w-[276px] h-[344px] mr-[30px] rounded-3xl"
            alt=""
          />
          <img
            src=""
            className="w-[561px] h-[344px] mr-[30px] rounded-3xl"
            alt=""
          />
          <img src="" className="w-[270px] h-[344px] rounded-3xl" alt="" />
        </Flex>
        <Flex className="mt-[30px]">
          <img
            src=""
            className="w-[413px] h-[432px] mr-[30px] rounded-3xl"
            alt=""
          />
          <img
            src=""
            className="w-[327px] h-[432px] mr-[30px] rounded-3xl"
            alt=""
          />
          <img src="" className="w-[370px] h-[432px] rounded-3xl" alt="" />
        </Flex>
      </div>
    </Container>
  );
};

export default Work;
