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
  Card,
  CardHeader,
  CardBody,
  CardFooter,
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
  companyName,
  job,
  city,
  dateFrom,
  dateUntil,
}: PackageTierProps) => {
  const colorTextLight = checked ? "white" : "purple.600";
  const bgColorLight = checked ? "purple.400" : "gray.300";

  const colorTextDark = checked ? "white" : "purple.500";
  const bgColorDark = checked ? "purple.400" : "gray.300";

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant={"filled"}
      bg={"white"}
    >
      {/* <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      /> */}

      <Stack>
        <CardBody>
          <Heading size="md">
            {title} at {companyName}
            {","} {city}
          </Heading>
          <Stack spacing={4} direction="row" align="center">
            <Text fontSize="md" color="GrayText">
              {dateFrom}
            </Text>
            <Text fontSize="md" color="GrayText">
              -
            </Text>

            <Text fontSize="md" color="GrayText">
              {" "}
              {dateUntil ? dateUntil : "Present"}
            </Text>
          </Stack>

          <Text py="2">{job}</Text>
        </CardBody>

        <CardFooter></CardFooter>
      </Stack>
    </Card>
  );
};
const ThreeTierPricingHorizontal = (props) => {
  console.log(props.data.user.workExperiences, "WORK");

  return (
    <Box py={6} px={5} min={"100vh"}>
      <Stack spacing={4} width={"100%"} direction={"column"}>
        {Object.assign([], props.data.user.workExperiences).map(
          (item, index) => (
            <PackageTier
              title={item.title}
              companyName={item.employer}
              city={item.city}
              job={item.description}
              dateFrom={item.dateFrom}
              dateUntil={item.dateUntil}
            />
          )
        )}
      </Stack>
    </Box>
  );
};

export default ThreeTierPricingHorizontal;
