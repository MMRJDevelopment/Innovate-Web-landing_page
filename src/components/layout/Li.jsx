import React from 'react'
import { Flex } from './Button';
import { FaChevronDown } from "react-icons/fa";
const Li = ({ title }) => {
  return (
    <Flex className="gap-[11px] ">
      <li className="font-open font-semibold text-[#192239] hover:text-[#FF7628] text-lg duration-300	">
        {title}
      </li>
      <FaChevronDown className="text-primary text-[10px] " />
    </Flex>
  );
};

export default Li
