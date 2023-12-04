import {
  FormControl,
  Input as ChakraInput,
  FormLabel,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, ...rest },
  ref
) => {
  return (
    <FormControl>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        variant="filled"
        focusBorderColor="pink.500"
        bgColor="gray.900"
        size="lg"
        _hover={{
          bg: "gray.900",
        }}
        ref={ref}
        {...rest}
      />
    </FormControl>
  );
}

export const Input = forwardRef(InputBase);
