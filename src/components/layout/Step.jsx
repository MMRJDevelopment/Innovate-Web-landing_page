import React from 'react'


const Step = ({ subTitle, title, description}) => {
  return (
    <>
      <div className="pt-6 my-4 pb-5 pl-6 pr-[85px]  sm:pt-4 sm:pb-3 sm:pl-4 sm:pr-0 bg-[#EBF7E9] rounded-xl h-auto">
        <h5 className="text-lg text-[#202427] font-open font-bold pb-[22px] sm:w-full">
          {subTitle}
        </h5>
        <h6 className="text-[30px] text-[#202427] font-open font-semibold pb-5 sm:w-full">
          {title}
        </h6>
        <p className="font-robo font-normal text-lg text-[#6C7D93] line-[30px] w-[356px] sm:w-full">
          {description}
        </p>
      </div>
    </>
  );
};

export default Step
