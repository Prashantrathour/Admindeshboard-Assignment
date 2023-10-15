import {
  Box,
  Text,
  Flex,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import React from "react";

function ProductsellCard() {
  const carddata = [
    {
      img: "https://th.bing.com/th/id/R.f6699aab0050da7a7abcb82f2a4f2f60?rik=k6re4AcotEP4Vg&riu=http%3a%2f%2fblogs.acu.edu%2f1410_PSYC49301%2ffiles%2f2013%2f10%2fbeauty-nature-here-free-free.jpg&ehk=VZWl5jqLmT3L9qTve1xvbqwN6C0JML4V5ZyXtRa5a%2bE%3d&risl=&pid=ImgRaw&r=0",stock:30
    },
    {
      img: "https://th.bing.com/th/id/OIP.5ZNbEWlRd6IeI24AIVZftAHaE8?pid=ImgDet&rs=1",stock:40
    },
    {
      img: "https://th.bing.com/th/id/R.3d88a927f8529dcba03364b09d98adbe?rik=JYmQaMVSULpYQg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images.jpg&ehk=BNPsuSOUR7ATZ3EpRwxx1xFl7LUbO3tYlu1wFLCBrCE%3d&risl=&pid=ImgRaw&r=0",stock:50
    },
    {
      img: "https://th.bing.com/th/id/R.3d88a927f8529dcba03364b09d98adbe?rik=JYmQaMVSULpYQg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images.jpg&ehk=BNPsuSOUR7ATZ3EpRwxx1xFl7LUbO3tYlu1wFLCBrCE%3d&risl=&pid=ImgRaw&r=0",stock:50
    },
    {
      img: "https://th.bing.com/th/id/R.3d88a927f8529dcba03364b09d98adbe?rik=JYmQaMVSULpYQg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images.jpg&ehk=BNPsuSOUR7ATZ3EpRwxx1xFl7LUbO3tYlu1wFLCBrCE%3d&risl=&pid=ImgRaw&r=0",stock:50
    },
    {
      img: "https://th.bing.com/th/id/R.5241bcf6f69be1f732501000e558c2ea?rik=th0d5ohfueo8sw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fsoSaTJM.jpg&ehk=nUl6MV1yd74%2fP%2fWBLP%2b5aM%2fDbbp7HkpX1PCLIEK%2feVo%3d&risl=&pid=ImgRaw&r=0",stock:79
    },
  ];
  return (
    <Box width="100%" overflowX="auto">
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Product name</Th>
            <Th isNumeric>Stock</Th>
            <Th isNumeric>Price</Th>
            <Th isNumeric>Total Sales</Th>
          </Tr>
        </Thead>
        <Tbody>
          {carddata.map((item,i) => (
            <TableRow key={i} {...item} i={i} />
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

const TableRow = ({ img,stock,i }) => {
  return (
    <Tr>
      <Td>
        <Flex align="center">
          <Box flex="0 0 100px" pr="10px" gap="10">
            <Image
              src={img}
              h="40px"
              w="100px"
              objectFit="cover"
              borderRadius="md"
            />
          </Box>
          <Box pr="10px" overflow={"hidden"}>
            <Text fontSize="xl" fontWeight="bold">
              Product {i}
            </Text>
            <Text
              overflowWrap={"break-word"}
              width={"200px"}
              p="2px"
              fontSize={"10px"}
              as={"p"}
            >
              The ProTech Fitness Tracker{" "}
            </Text>
          </Box>
        </Flex>
      </Td>
      <Td isNumeric>{stock} in stock</Td>
      <Td isNumeric>${Number(`${Math.random()*100}`).toFixed(1)}</Td>
      <Td isNumeric>{Number(`${Math.random()*1000}`).toFixed(0)}</Td>
    </Tr>
  );
};

export default ProductsellCard;
