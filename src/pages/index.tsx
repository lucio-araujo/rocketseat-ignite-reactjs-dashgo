import {
  Button,
  Flex,
  FormControl,
  Input,
  FormLabel,
  Stack,
} from "@chakra-ui/react";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>dashgo</title>
        <meta
          name="description"
          content="A challenger project; make with love."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          as="form"
          w="100%"
          maxW={360}
          bg="gray.800"
          direction="column"
          p={8}
          borderRadius={8}
        >
          <Stack spacing={4}>
            <FormControl>
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <Input
                type="text"
                id="email"
                name="email"
                variant="filled"
                focusBorderColor="pink.500"
                bgColor="gray.900"
                size="lg"
                _hover={{
                  bg: "gray.900",
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Senha</FormLabel>
              <Input
                type="password"
                id="password"
                name="password"
                variant="filled"
                focusBorderColor="pink.500"
                bgColor="gray.900"
                size="lg"
                _hover={{
                  bg: "gray.900",
                }}
              />
            </FormControl>
          </Stack>
          <Button type="submit" colorScheme="pink" mt={6} size="lg">
            Enviar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
