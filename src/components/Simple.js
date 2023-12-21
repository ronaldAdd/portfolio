import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Center,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import CardProject from "./CardProject";
//"https://thumbs.dreamstime.com/b/cartoon-avatar-man-front-view-graphic-brown-hair-wearing-eyeglasses-over-isolated-background-illustration-73243082.jpg"
const data1 = [
  {
    title: "Sketches",
    desc: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
  },
  {
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
  },
  {
    title: "Product Design",
    desc: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
  },
  {
    title: "App Design",
    desc: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
  },
  {
    title: "Motion Graphics",
    desc: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
  },
  {
    title: "Responsive Design",
    desc: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
  },
];
export default function Simple(props) {
  return (
    <Container maxW={"7xl"} bg={"whitesmoke"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            borderRadius="full"
            src={props.user.avatar.largeUrl}
            fit={"cover"}
            align={"center"}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              CREATIVE PORTFOLIO
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              Hi,iam {props.user.firstName} {props.user.lastName}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                {props.user.profile}
              </Text>
            </VStack>
            <Box>
              {/* <CardProject /> */}
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>REACT JS</ListItem>
                  <ListItem>CHAKRA UI</ListItem>
                  <ListItem>FIREBASE</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>FUNCTIONS - GCP</ListItem>
                  <ListItem>SENTRY</ListItem>
                  <ListItem>TYPESENSE</ListItem>
                </List>
              </SimpleGrid>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>1-7 business days</Text>
          </Stack>
        </Stack>
      </SimpleGrid>

      <Center>
        <Text fontSize="4xl" Bold>
          SERVICE
        </Text>
      </Center>

      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={{ base: 8, md: 10 }}>
        <Stack spacing={{ base: 6, md: 10 }}>
          <CardProject data={data1[0]} />
        </Stack>

        <Stack spacing={{ base: 6, md: 10 }}>
          <CardProject data={data1[1]} />
        </Stack>

        <Stack spacing={{ base: 6, md: 10 }}>
          <CardProject data={data1[2]} />
          {/* <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>1-7 business days</Text>
          </Stack> */}
        </Stack>

        <Stack spacing={{ base: 6, md: 10 }}>
          <CardProject data={data1[3]} />
        </Stack>

        <Stack spacing={{ base: 6, md: 10 }}>
          <CardProject data={data1[4]} />
        </Stack>

        <Stack spacing={{ base: 6, md: 10 }}>
          <CardProject data={data1[5]} />
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
