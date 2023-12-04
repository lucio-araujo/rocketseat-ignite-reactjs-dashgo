import { Box, HStack, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  currentPage: number;
  perPage?: number;
  total: number;
  siblingPages?: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  perPage = 10,
  siblingPages = 2,
  total,
  onPageChange,
}: PaginationProps) {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  const lastPage = Math.ceil(total / perPage);

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
        <strong>{(currentPage - 1) * perPage + 1}</strong> -{" "}
        <strong>{Math.min(currentPage * perPage, total)}</strong> de{" "}
        <strong>{total}</strong>
      </Box>
      <HStack spacing="2">
        {currentPage - siblingPages > 1 && (
          <PaginationItem number={1} onPageChange={onPageChange} />
        )}

        {currentPage - siblingPages > 2 && (
          <Text w={4} color="gray.300" align="center">
            ...
          </Text>
        )}

        {previousPages.map((page) => (
          <PaginationItem
            key={page}
            number={page}
            onPageChange={onPageChange}
          />
        ))}

        <PaginationItem
          isCurrent
          number={currentPage}
          onPageChange={onPageChange}
        />

        {nextPages.map((page) => (
          <PaginationItem
            key={page}
            number={page}
            onPageChange={onPageChange}
          />
        ))}

        {currentPage + siblingPages < lastPage - 1 && (
          <Text w={4} color="gray.300" align="center">
            ...
          </Text>
        )}

        {currentPage + siblingPages < lastPage && (
          <PaginationItem number={lastPage} onPageChange={onPageChange} />
        )}
      </HStack>
    </Stack>
  );
}
