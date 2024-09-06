// import React from "react";
 const Button = ({ className, children, title }) => {
   return (
     <div className="relative">
       <button
         className={`${className} hover:bg-[#FF7628] font-open font-bold py-[5px] px-[16px] rounded-full text-[#202427] duration-1000	 `}
       >
         {children}
         {title}
       </button>
       <div className="bg-[#FF7628] w-[33px] h-[33px] hover:w-full absolute left-0 bottom-0 z-[-20] rounded-full" />
     </div>
   );
 };

 const Flex = ({ className, children }) => {
  return <div className={`${className} flex flex-row items-center justify-center`}>{children}</div>;
};

export { Button, Flex };