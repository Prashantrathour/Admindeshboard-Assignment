import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { Box, Flex, Text } from "@chakra-ui/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Overview Monthly Earnings",
    },
  },
  layout: {
    // padding: {
    //   left: 10,
    //   right: 10,
    // },
  },
  indexAxis: "x",
  borderRadius: 10,
  scales: {
    x: {
      display: true,
    },
    y: {
      display: false,
    },
  },
};


export const options2 = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Customers",
    },
    
  
  }
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => 100),
      backgroundColor: ["white", "white", "white", "skyblue", "white", "white"],
    },
  ],
};

const data2 = {
 
  datasets: [
    {
     
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "white",
      ],
      hoverOffset: 4,
    },
  ],
};

const MidSection = () => {
  return (
    <Box w="100%" p={4}>
      <Flex
        width={"100%"}
        direction={["column", "column", "column", "row"]}
        justify="center"
        align="center"
        justifyContent={"space-between"}
        gap={"20px"}
      >
        <Box
          width={{ base: "100%", md: "100%" }}
          p={{ base: 0, md: 2 }}
          h="300px"
          boxShadow={"lg"}
          bg="white"
        >
          <Bar options={options} data={data} />
        </Box>
        <Box width={["100%","100%","80%","30%"]} p={{ base: 0, md: 2 }} h="300px" boxShadow={"lg"} bg="white">
          <Doughnut options={options2} data={data2} />
          <Box
            position={"relative"}
            top={"-55%"}
         
            textAlign={"center"}
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            flexDirection={"column"}
          >
            <Text fontSize={"2xl"} fontWeight={"bold"}>85%</Text>
            <Text fontSize={"sm"}>Total New </Text>
            <Text >Customers</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default MidSection;
