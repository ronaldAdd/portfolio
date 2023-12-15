import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Checkbox,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const options = [
  {
    id: 1,
    desc: "1 lorem ipsum",
    image: "https://cf.shopee.co.id/file/416525819cb0629242f30282a1e836c5",
  },
  {
    id: 2,
    desc: "Lorem, ipsum dolor.",
    image: "https://cf.shopee.co.id/file/416525819cb0629242f30282a1e836c5",
  },
  {
    id: 3,
    desc: "Monthly Updates",
    image: "https://cf.shopee.co.id/file/416525819cb0629242f30282a1e836c5",
  },
];
interface PackageTierProps {
  title: string;
  options: Array<{ id: number, desc: string }>;
  typePlan: string;
  checked?: boolean;
}
const PackageTier = ({
  title,
  options,
  typePlan,
  checked = false,
}: PackageTierProps) => {
  const colorTextLight = checked ? "white" : "purple.600";
  const bgColorLight = checked ? "purple.400" : "gray.300";

  const colorTextDark = checked ? "white" : "purple.500";
  const bgColorDark = checked ? "purple.400" : "gray.300";

  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: "flex-start",
        md: "space-around",
      }}
      direction={{
        base: "column",
        md: "row",
      }}
      alignItems={{ md: "center" }}
    >
      <Checkbox size="lg" value="naruto" colorScheme="orange"></Checkbox>
      <Image
        boxSize="200px"
        src="https://cf.shopee.co.id/file/416525819cb0629242f30282a1e836c5"
        alt="Dan Abramov"
      />
      <Stack shouldWrapChildren direction="row">
        <NumberInput size="lg" maxW={32} defaultValue={1} min={1} max={10}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Stack>
      <Heading size={"md"}>{title}</Heading>
      <List spacing={3} textAlign="start">
        {options.map((desc, id) => (
          <ListItem key={desc.id}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading size={"xl"}>{typePlan}</Heading>
      <Stack>
        <Button
          size="md"
          color={useColorModeValue(colorTextLight, colorTextDark)}
          bgColor={useColorModeValue(bgColorLight, bgColorDark)}
        >
          Remove
        </Button>
      </Stack>
    </Stack>
  );
};
const ThreeTierPricingHorizontal = () => {
  return (
    <Box py={6} px={5} min={"100vh"}>
      <Stack spacing={4} width={"100%"} direction={"column"}>
        <Stack
          p={5}
          alignItems={"center"}
          justifyContent={{
            base: "flex-start",
            md: "space-around",
          }}
          direction={{
            base: "column",
            md: "row",
          }}
        >
          <Stack
            width={{
              base: "100%",
              md: "40%",
            }}
            textAlign={"center"}
          >
            <Heading size={"lg"}>
              The Right Plan for <Text color="purple.400">Your Business</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: "100%",
              md: "60%",
            }}
          >
            <Text textAlign={"center"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              quod in iure vero. Facilis magnam, sed officiis commodi labore
              odit.
            </Text>
          </Stack>
        </Stack>
        <Divider />
        <PackageTier title={"Starter"} typePlan="Free" options={options} />
        <Divider />
        <PackageTier
          title={"Lorem Plus"}
          checked={true}
          typePlan="$32.00"
          options={options}
        />
        <Divider />
        <PackageTier title={"Lorem Pro"} typePlan="$50.00" options={options} />
      </Stack>
    </Box>
  );
};

export default ThreeTierPricingHorizontal;
