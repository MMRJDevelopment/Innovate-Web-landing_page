import React from 'react'
import { Button } from './Button';

const Service = ({ image, background, title, button, description }) => {
  return (
    <div
      className={`${background} w-[370px] py-[52px] items-center justify-center flex flex-col rounded-xl`}
    >
      <img
        src={image}
        alt=""
        className="w-[64px] h-[64px] mb-[20px] mt-[28px]"
      />
      <h5 className="font-open text-[30px] font-semibold text-[#202427]  text-center">
        {title}
      </h5>
      <p className="font-pap font-normal text-lg text-#6C7D93] w-[257px] py-5">
        {description}
      </p>
      <Button className="inline-block font-open font-bold text-base bg-[#FF7628] text-[#202427]  z-[-0]">
        {button}
      </Button>
    </div>
  );
};

export default Service
