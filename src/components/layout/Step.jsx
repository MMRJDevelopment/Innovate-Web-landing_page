import React from 'react'


const Step = ({ subTitle, title, description, image }) => {
  return (
    <>
      <div className="pt-6 pb-5 pl-6 pr-[85px] bg-[#EBF7E9] rounded-xl">
        <h5 className="text-lg text-[#202427] font-open font-bold pb-[22px]">
          {subTitle}
        </h5>
        <h6 className="text-[30px] text-[#202427] font-open font-semibold pb-5">
          {title}
        </h6>
        <p className="font-robo font-normal text-lg text-[#6C7D93] line-[30px] w-[356px]">
          {description}
        </p>
      </div>
    </>
  );
};

export default Step
