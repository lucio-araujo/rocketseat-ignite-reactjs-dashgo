import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export function Header() {
  const { onOpen } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
       {!isWideVersion && (
        <IconButton
          variant="unstyled"
          aria-label="Open navigation"
          onClick={onOpen}
          icon={<Icon as={RiMenuLine} />}
          fontSize="26"
          mr="2"
          display="flex"
          alignItems="center"
        ></IconButton>
      )}
      <Logo />
      <SearchBox />
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
