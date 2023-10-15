import {
    Box,
    Flex,
    Image,
    Stat,
    StatArrow,
    StatGroup,
    StatHelpText,
    StatLabel,
    StatNumber,
  } from "@chakra-ui/react";
  import React from "react";
  
  function StateCard({ img, label, num, per, status }) {
    return (
      <Box
      
        bg={"white"}
        borderRadius={{ base: "10px", md: "10px" }}
        p={{ base: 2, md: 2 }}
       pt={"10px"}
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0p"
      >
        <Flex py={"20px"} direction={{ base: "column", md: "row" }} alignItems="center">
          <Box flex={{ base: "none", md: "1" }} mr={{ base: 0, md: 4 }}>
            <Image src={img} />
          </Box>
          <Box flex={{ base: "none", md: "2" }}>
            <StatGroup>
              <Stat>
                <StatLabel>{label}</StatLabel>
                <StatNumber>${num}K</StatNumber>
                <StatHelpText>
                  <StatArrow type={status} />
                  {per}% This month
                </StatHelpText>
              </Stat>
            </StatGroup>
          </Box>
        </Flex>
      </Box>
    );
  }
  
  export default StateCard;
  