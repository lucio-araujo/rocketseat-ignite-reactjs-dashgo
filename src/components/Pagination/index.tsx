import { Box, HStack, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  currentPage: number;
  perPage?: number;
  total: number;
  siblingPages?: number;
}

export function Pagination({
  currentPage,
  perPage = 10,
  siblingPages = 1,
  total,
}: PaginationProps) {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  const lastPage = Math.floor(total / perPage);

  const previousPages =
    currentPage > 1
      ? [...Array(siblingPages)]
          .map((_, index, arr) => currentPage - arr.length + index)
          .filter((page) => page > 0)
      : [];

  const nextPages =
    currentPage < lastPage
      ? [...Array(siblingPages)]
          .map((_, index) => currentPage + index + 1)
          .filter((page) => page <= lastPage)
      : [];

  return (
    <Stack
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
      direction={isWideVersion ? "row" : "column"}
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        {currentPage - siblingPages > 1 && <PaginationItem number={1} />}

        {currentPage - siblingPages > 2 && (
          <Text w={4} color="gray.300" align="center">
            ...
          </Text>
        )}

        {previousPages.map((page) => (
          <PaginationItem key={page} number={page} />
        ))}

        <PaginationItem isCurrent number={currentPage} />

        {nextPages.map((page) => (
          <PaginationItem key={page} number={page} />
        ))}

        {currentPage + siblingPages < lastPage - 1 && (
          <Text w={4} color="gray.300" align="center">
            ...
          </Text>
        )}

        {currentPage + siblingPages < lastPage && (
          <PaginationItem number={lastPage} />
        )}
      </HStack>
    </Stack>
  );
}
