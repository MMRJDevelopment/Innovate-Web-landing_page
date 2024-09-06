import React from 'react'
import Container from './layout/Container'

const Who = () => {
  return (
    <Container className=" pt-[100px] sm:pt-[0px] pb-[80px] sm:pb-10 ">
      <div className="flex sm:flex-col md:flex-col items-center justify-between sm:px-[10px]">
        <div className=" relative  sm:pb-[220px] md:pb-[120px]">
          <img
            src="/alexande.jpg"
            className=" bg-cover bg-center border-4 border-white drop-shadow-xl w-[440px] h-[467px] ml-[91px] sm:ml-0 md:ml-40  rounded-[80px] sm:rounded-[60px] sm:w-[360px] sm:h-[367px]  "
            alt=""
          />
          <img
            src="/bannerimg.jpg"
            className="border-4 border-white drop-shadow-xl w-[296px] h-[279px] absolute top-[260px] left-0 md:left-10 bottom-0 bg-red-400 rounded-[50px] sm:left-[24px]   "
            alt=""
          />
          <img
            src="/element.png"
            alt=""
            className=" absolute top-[80px]  left-0 z-[-10] sm:hidden md:hidden"
          />
        </div>
        <div>
          <div className="sm:flex sm:items-center sm:justify-center">
            <img src="/ring.png" />
          </div>
          <h2 className="font-open font-extrabold text-[#192239] py-4 sm:text-[36px] sm:text-center">
            Who We Are
          </h2>
          <h4 className="w-[442px] font-pap font-normal text-[#6C7D93] sm:text-base sm:w-full sm:text-center">
            We are a Dhaka based Digital Communication Agency committed to
            creating an actionable strategy, online marketing & technology
            solution for our partners. As a multidisciplinary company, we
            operate as a unified,{" "}
          </h4>
          <p className="text-[12px] text-[#6C7D93] font-pap font-normal mt-1 sm:text-center sm:py-2">
            Join the 10.000+ Companys Trusting{" "}
          </p>
          <img src="partner logo.png" className="ml-[-30px] sm:ml-[0px] " />
        </div>
      </div>
    </Container>
  );
}

export default Who
