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

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const CreateUserFormSchema = yup.object({
  name: yup
    .string()
    .required("Nome é obrigatório.")
    .min(6, "Nome deve ter pelo menos 6 caracteres."),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido."),
  password: yup
    .string()
    .required("Senha obrigatória.")
    .min(6, "Senha deve ter pelo menos 6 caracteres."),
  password_confirmation: yup
    .string()
    .required("Confirmação da senha é obrigatória.")
    .oneOf([yup.ref("password")], "Confirmação da senha não confere."),
});

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm<CreateUserFormData>({
    resolver: yupResolver(CreateUserFormSchema),
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    formData
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(formData);
  };

  return (
    <Flex h="100vh" direction="column">
      <Header />
      <Flex w="100%" maxW={1480} mx="auto" my="6" px="6">
        <Sidebar />
        <Box
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={{ base: 6, lg: 8 }}
          onSubmit={handleSubmit(handleCreateUser)}
        >
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
              <Input
                label="Nome completo"
                error={formState.errors.name}
                {...register("name")}
              />
              <Input
                type="email"
                label="E-mail"
                error={formState.errors.email}
                {...register("email")}
              />
            </SimpleGrid>
            <SimpleGrid
              minChildWidth="240px"
              spacing={{ base: 6, lg: 8 }}
              w="100%"
            >
              <Input
                type="password"
                label="Senha"
                error={formState.errors.password}
                {...register("password")}
              />
              <Input
                type="password"
                label="Confirmar senha"
                error={formState.errors.password_confirmation}
                {...register("password_confirmation")}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
              <Button
                type="submit"
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >
                Salvar
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
