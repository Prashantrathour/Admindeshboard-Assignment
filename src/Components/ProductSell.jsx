import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
} from "@chakra-ui/react";
import { Search2Icon, SearchIcon } from "@chakra-ui/icons";

import React from "react";
import ProductsellCard from "./ProductsellCard";

function ProductSell() {
  return (
    <Box>
      <ProductBox />
    </Box>
  );
}

export default ProductSell;

const ProductBox = () => {
  return (
    <Box border="1px" borderColor="gray.200" p={4} m={4} bg={"white"}>
      <Flex justify="space-between" align="center">
        <Box>
          <Heading as="h2" size="md">
            Product Sell
          </Heading>
        </Box>
        <Flex align="center" maxW={"350px"}>
          <Box pr={2}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Search2Icon color="gray.300" />
              </InputLeftElement>
              <Input type="search" placeholder="Search" />
            </InputGroup>
          </Box>
          <Select variant="unstyle" size="sm">
            <option value="tag1">Last 30 Days</option>
            <option value="tag2">Last 20 Days</option>
            <option value="tag3">Last 10 Days</option>
          </Select>
        </Flex>
      </Flex>
      <ProductsellCard/>
    </Box>
  );
};
