import { Box, Image } from "@chakra-ui/react";
import React from "react";
import StateCard from "./StateCard";

function Sate() {
  const stat = [
    {
      lable: "Earning",
      num: "198",
      per: "37",
      img: "https://ik.imagekit.io/ntmgxa7c6/earning-removebg-preview%20(1).png?updatedAt=1697285765917",
      status:"increase"
    },
    {
      lable: "Orders",
      num: "2.4",
      per: "2",
      img: "https://ik.imagekit.io/ntmgxa7c6/form-removebg-preview.png?updatedAt=1697286162658",
      status:"decrease"
    },
    {
      lable: "Balance",
      num: "2.4",
      per: "2",
      img: "https://ik.imagekit.io/ntmgxa7c6/bag-removebg-preview.png?updatedAt=1697286163595",
      status:"decrease"
    },
    {
      lable: "Total Sales",
      num: "98",
      per: "11%",
      img: "https://ik.imagekit.io/ntmgxa7c6/Assignment4-removebg-preview.png?updatedAt=1697286163686",
      status:"increase"
    },
  ];

  return (
    <Box width={"100%"} display={{ md: 'flex' }} justifyContent="center" gap={{ base: 2, sm: 2, md: 6, lg: 2 }} flexWrap={"wrap"} >
  {stat.map((item, index) => (
    <StateCard key={index} {...item} />
  ))}
</Box>
  );
}

export default Sate;
