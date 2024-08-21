import React from 'react'
import Container from './layout/Container'

const Who = () => {
  return (
    <Container className="flex flex-roew  items-center justify-between pt-[100px] pb-[80px]">
      <div className=" relative">
        <img
          src=""
          className="border-4 border-black  w-[440px] h-[467px] ml-[91px]  rounded-[80px] "
          alt=""
        />
        <img
          src=""
          className="border-4 border-black  w-[296px] h-[279px] absolute top-[260px] left-0 bottom-0 bg-red-400 rounded-[50px]"
          alt=""
        />
        <img
          src="/element.png"
          alt=""
          className=" absolute top-[80px]  left-0 z-[-10]"
        />
      </div>
      <div>
        <img src="/ring.png" />
        <h2 className="font-open font-extrabold text-[#192239] py-4 ">
          Who We Are
        </h2>
        <h4 className="w-[442px] font-pap font-normal text-[#6C7D93] ">
          We are a Dhaka based Digital Communication Agency committed to
          creating an actionable strategy, online marketing & technology
          solution for our partners. As a multidisciplinary company, we operate
          as a unified,{" "}
        </h4>
        <p className="text-[12px] text-[#6C7D93] font-pap font-normal mt-1">
          Join the 10.000+ Companys Trusting{" "}
        </p>
        <img src="partner logo.png" className="ml-[-30px]" />
      </div>
    </Container>
  );
}

export default Who
