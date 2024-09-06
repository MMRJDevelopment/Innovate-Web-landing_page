import React from "react";
import Container from "./layout/Container";
import { styles } from "../../style";
import { Flex } from "./layout/Button";

const Work = () => {
  return (
    <Container className="pt-[80px] sm:pt-0 md:pt-0 pb-[100px] sm:pb-[40px] md:pb-[50px] ">
      <div className="sm:px-[10px] md:px-[10px]">
        <div className="flex flex-col items-center justify-center">
          <img src="/ring.png" />
          <h2 className="font-open font-extrabold text-[#192239] py-4 sm:text-[36px] ">
            Work Showcase
          </h2>
        </div>
        <div className="pt-[47px] pb-[52px] sm:py-5 sm:flex-wrap md:flex-wrap sm:w-full sm:flex sm:items-center sm:justify-center  md:w-full md:flex md:items-center md:justify-center ">
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
        <div className="sm:items-center sm:justify-center ">
          <Flex className="sm:flex-col md:flex-wrap ">
            <img
              src="/alexander-andrews-eNoeWZkO7Zc-unsplash.jpg"
              className="w-[276px] h-[344px] mr-[30px] sm:mr-0 rounded-3xl sm:w-full bg-cover bg-center "
              alt=""
            />
            <img
              src="/andy-holmes-BIdxEi7cWLM-unsplash.jpg"
              className="w-[561px] h-[344px] mr-[30px] sm:my-[10px] md:my-4 sm:mr-0 rounded-3xl sm:w-full"
              alt=""
            />
            <img
              src="/phil-hearing--Vaz-kNJgAA-unsplash.jpg"
              className="w-[270px] h-[344px] rounded-3xl sm:w-full"
              alt=""
            />
          </Flex>
          <Flex className="mt-[30px] sm:flex-col md:flex-wrap ">
            <img
              src="/radek-skrzypczak-q-XadRozNLI-unsplash.jpg"
              className="w-[413px] h-[432px] mr-[30px] sm:mr-0 rounded-3xl sm:w-full"
              alt=""
            />
            <img
              src="/vladimir-fedotov-L6t7yoSYP_0-unsplash.jpg"
              className="w-[327px] h-[432px] mr-[30px] my-[10px] sm:mr-0 md:my-4 rounded-3xl sm:w-full"
              alt=""
            />
            <img
              src="/eren-yildiz-o4m8Ew0J7aA-unsplash.jpg  "
              className="w-[370px] h-[432px] rounded-3xl sm:w-full bg-cover bg-center "
              alt=""
            />
          </Flex>
        </div>
      </div>
    </Container>
  );
};

export default Work;
