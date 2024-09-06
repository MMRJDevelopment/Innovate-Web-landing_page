import React from "react";
import { Button } from "./Button";

const Blog = ({ title, subTitle, buttonText, image, titleClass }) => {
  return (
    <div className="w-[369px] sm:w-full md:w-full pb-[30px] pl-[30px] rounded-[30px] ">
      <img src={image} alt="" className="h-atuo bg-cover rounded-t-3xl " />

      <div className="drop-shadow-lg bg-white pb-[30px] pl-[30px] rounded-b-3xl">
        <h5
          className={`${titleClass} pt-[30px] pb-4 font-work font-medium text-2xl text-[#413F45] line-[32px] w-[223px] sm:w-full md:w-full`}
        >
          {title}
        </h5>
        <h6 className="font-nun font-normal text-lg text-[#474747]">
          {subTitle}
        </h6>
        <Button>{buttonText}</Button>
      </div>
    </div>
  );
};

export default Blog;
