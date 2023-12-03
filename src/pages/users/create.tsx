import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import Link from "next/link";

export default function CreateUser() {
  return (
    <Flex h="100vh" direction="column">
      <Header />
      <Flex w="100%" maxW={1480} mx="auto" my="6" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p={{ base: 6, lg: 8 }}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Criar usuário
            </Heading>
          </Flex>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid
              minChildWidth="240px"
              spacing={{ base: 6, lg: 8 }}
              w="100%"
            >
              <Input name="name" label="Nome completo" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>
            <SimpleGrid
              minChildWidth="240px"
              spacing={{ base: 6, lg: 8 }}
              w="100%"
            >
              <Input name="password" type="password" label="Senha" />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmar senha"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
