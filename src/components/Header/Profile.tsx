import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lúcio Araújo</Text>
          <Text color="gray.300" fontSize="small">
            lucio.ribeiroaraujo@outlook.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Lúcio Araújo"
        src="https://github.com/lucio-araujo.png"
      />
    </Flex>
  );
}
