import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
function CardProject(props) {
  console.log(props.data, "PROPS");

  return (
    <Card maxW="sm" bg={"white"}>
      <CardBody>
        {/* <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        /> */}
        <Stack mt="6" spacing="3">
          <Heading size="md">{props.data?.title}</Heading>
          <Text>{props.data?.desc}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default CardProject;
