// import React from "react";
 const Button = ({ className, children, title }) => {
   return (
     <button className={`${className} bg-[#FF7628] font-open text-white`}>
       {children}
       {title}
     </button>
   );
 };

 const Flex = ({ className, children }) => {
  return <div className={`${className} flex flex-row items-center justify-center`}>{children}</div>;
};

export { Button, Flex };