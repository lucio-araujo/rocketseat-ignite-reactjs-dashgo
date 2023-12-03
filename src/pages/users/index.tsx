import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiAddLine, RiEditLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";

export default function UserList() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex h="100vh" direction="column">
      <Header />
      <Flex w="100%" maxW={1480} mx="auto" my="6" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Lúcio Araújo</Text>
                    <Text fontSize="sm" color="gray.300">
                      lucio.ribeiroaraujo@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>03 de dezembro, 2023</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiEditLine} fontSize="16" />}
                    iconSpacing={!isWideVersion ? 0 : 2}
                  >
                    {isWideVersion && "Editar"}
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Lúcio Araújo</Text>
                    <Text fontSize="sm" color="gray.300">
                      lucio.ribeiroaraujo@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>03 de dezembro, 2023</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiEditLine} fontSize="16" />}
                    iconSpacing={!isWideVersion ? 0 : 2}
                  >
                    {isWideVersion && "Editar"}
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Lúcio Araújo</Text>
                    <Text fontSize="sm" color="gray.300">
                      lucio.ribeiroaraujo@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>03 de dezembro, 2023</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiEditLine} fontSize="16" />}
                    iconSpacing={!isWideVersion ? 0 : 2}
                  >
                    {isWideVersion && "Editar"}
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Flex>
  );
}
