import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

import Head from "next/head";

export default function SignIn() {
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
            <Input name="email" type="email" label="E-mail" />
            <Input name="password" type="password" label="Senha" />
          </Stack>
          <Button type="submit" colorScheme="pink" mt={6} size="lg">
            Enviar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
