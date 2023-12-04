import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { useForm, SubmitHandler } from "react-hook-form";

import Head from "next/head";

type FormSigInData = {
  email: string;
  password: string;
};

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm<FormSigInData>();

  // const {errors} = formState;

  const handleSignIn: SubmitHandler<FormSigInData> = async (formData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(formData);
  };

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
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing={4}>
            <Input type="email" label="E-mail" {...register("email")} />
            <Input type="password" label="Senha" {...register("password")} />
          </Stack>
          <Button
            type="submit"
            colorScheme="pink"
            mt={6}
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Enviar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
