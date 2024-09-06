import React from "react";

const Container = ({ className, children }) => {
  return <div className={`${className} w-[1170px] sm:w-full md:w-full m-auto`}>{children}</div>;
};

export default Container;
