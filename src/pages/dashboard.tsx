import dynamic from "next/dynamic";
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray["500"],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray["600"],
    },
    axisTicks: {
      color: theme.colors.gray["600"],
    },
    categories: [
      "2021-09-20T10:00:00.000Z",
      "2021-09-21T10:00:00.000Z",
      "2021-09-22T10:00:00.000Z",
      "2021-09-23T10:00:00.000Z",
      "2021-09-24T10:00:00.000Z",
      "2021-09-25T10:00:00.000Z",
      "2021-09-26T10:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [
  {
    name: "series-1",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
];

import { ApexOptions } from "apexcharts";

export default function Dashboard() {
  return (
    <Flex h="100vh" direction="column">
      <Header />
      <Flex w="100%" maxW={1480} mx="auto" my="6" px="6">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px">
          <Box p={{ base: 6, lg: 8 }} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart type="area" options={options} series={series} height={160} />
          </Box>
          <Box p={{ base: 6, lg: 8 }} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart type="area" options={options} series={series} height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
