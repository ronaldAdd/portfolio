import {
  Flex,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  Icon,
  useColorModeValue,
  createIcon,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  HStack,
} from "@chakra-ui/react";
import Simple from "./Simple";
import SimpleSidebar from "./SimpleSidebar";
import SplitWithImage from "./SplitWithImage";
import TabMenu from "./TabMenu";
export default function CardWithIllustration() {
  return (
    <Flex
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <HStack
        boxShadow={"2xl"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        p={10}
        spacing={8}
        align={"center"}
      >
        {/* <Icon as={NotificationIcon} w={24} h={24} /> */}
        <Image
          borderRadius="full"
          boxSize="150px"
          src={`data:image/jpeg;base64,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`}
          alt="Dan Abramov"
        />
        <Stack align={"center"} spacing={2}>
          <Heading
            textTransform={"uppercase"}
            fontSize={"3xl"}
            color={useColorModeValue("gray.800", "gray.200")}
          >
            RONALD ADRIANSYAH
          </Heading>
          <Text fontSize={"lg"} color={"gray.500"}>
            FULL STACK DEVELOPER
          </Text>
        </Stack>
        <Stack spacing={4} direction={{ base: "column", md: "row" }} w={"full"}>
          {/* <SplitWithImage /> */}
          <TabMenu />
        </Stack>
      </HStack>
    </Flex>
  );
}

const NotificationIcon = createIcon({
  displayName: "Notification",
  viewBox: "0 0 128 128",
  path: (
    <g id="Notification">
      <rect
        className="cls-1"
        x="1"
        y="45"
        fill={"#fbcc88"}
        width="108"
        height="82"
      />
      <circle className="cls-2" fill={"#8cdd79"} cx="105" cy="86" r="22" />
      <rect
        className="cls-3"
        fill={"#f6b756"}
        x="1"
        y="122"
        width="108"
        height="5"
      />
      <path
        className="cls-4"
        fill={"#7ece67"}
        d="M105,108A22,22,0,0,1,83.09,84a22,22,0,0,0,43.82,0A22,22,0,0,1,105,108Z"
      />
      <path
        fill={"#f6b756"}
        className="cls-3"
        d="M109,107.63v4A22,22,0,0,1,83.09,88,22,22,0,0,0,109,107.63Z"
      />
      <path
        className="cls-5"
        fill={"#d6ac90"}
        d="M93,30l16,15L65.91,84.9a16,16,0,0,1-21.82,0L1,45,17,30Z"
      />
      <path
        className="cls-6"
        fill={"#cba07a"}
        d="M109,45,65.91,84.9a16,16,0,0,1-21.82,0L1,45l2.68-2.52c43.4,40.19,41.54,39.08,45.46,40.6A16,16,0,0,0,65.91,79.9l40.41-37.42Z"
      />
      <path
        className="cls-7"
        fill={"#dde1e8"}
        d="M93,1V59.82L65.91,84.9a16,16,0,0,1-16.77,3.18C45.42,86.64,47,87.6,17,59.82V1Z"
      />
      <path
        className="cls-8"
        fill={"#c7cdd8"}
        d="M74,56c-3.56-5.94-3-10.65-3-17.55a16.43,16.43,0,0,0-12.34-16,5,5,0,1,0-7.32,0A16,16,0,0,0,39,38c0,7.13.59,12-3,18a3,3,0,0,0,0,6H50.41a5,5,0,1,0,9.18,0H74a3,3,0,0,0,0-6ZM53.2,21.37a3,3,0,1,1,3.6,0,1,1,0,0,0-.42.7,11.48,11.48,0,0,0-2.77,0A1,1,0,0,0,53.2,21.37Z"
      />
      <path
        className="cls-3"
        fill={"#f6b756"}
        d="M46.09,86.73,3,127H1v-1c6-5.62-1.26,1.17,43.7-40.78A1,1,0,0,1,46.09,86.73Z"
      />
      <path
        className="cls-3"
        fill={"#f6b756"}
        d="M109,126v1h-2L63.91,86.73a1,1,0,0,1,1.39-1.49C111,127.85,103.11,120.51,109,126Z"
      />
      <path
        className="cls-8"
        fill={"#c7cdd8"}
        d="M93,54.81v5L65.91,84.9a16,16,0,0,1-16.77,3.18C45.42,86.64,47,87.6,17,59.82v-5L44.09,79.9a16,16,0,0,0,21.82,0Z"
      />
      <path
        className="cls-9"
        fill={"#fff"}
        d="M101,95c-.59,0-.08.34-8.72-8.3a1,1,0,0,1,1.44-1.44L101,92.56l15.28-15.28a1,1,0,0,1,1.44,1.44C100.21,96.23,101.6,95,101,95Z"
      />
      <path
        className="cls-3"
        fill={"#f6b756"}
        d="M56.8,18.38a3,3,0,1,0-3.6,0A1,1,0,0,1,52,20,5,5,0,1,1,58,20,1,1,0,0,1,56.8,18.38Z"
      />
      <path
        className="cls-1"
        fill={"#fbcc88"}
        d="M71,42.17V35.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,39,35c0,7.33.58,12-3,18H74A21.06,21.06,0,0,1,71,42.17Z"
      />
      <path
        className="cls-3"
        fill={"#f6b756"}
        d="M74,53H36a21.36,21.36,0,0,0,1.86-4H72.14A21.36,21.36,0,0,0,74,53Z"
      />
      <path className="cls-3" fill={"#f6b756"} d="M59.59,59a5,5,0,1,1-9.18,0" />
      <path
        className="cls-1"
        fill={"#fbcc88"}
        d="M74,59H36a3,3,0,0,1,0-6H74a3,3,0,0,1,0,6Z"
      />
    </g>
  ),
});
