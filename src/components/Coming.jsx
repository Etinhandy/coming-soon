import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Subscribe from "./Subscribe";

const Coming = () => {
  return (
    <Stack w={"100%"} h={"100vh"} justify={"center"} width={"100%"}>
      <Flex
        color={"white"}
        direction={"column"}
        align="center"
        padding={"1rem"}
      >
        <Text
          fontSize={{ base: "21px", md: "30px", lg: "36px" }}
          fontWeight={"bold"}
          textAlign={{ base: "left", md: "center" }}
        >
          SOMETHING AWESOME IS COMING
        </Text>
        <small fontSize={{ base: "1.5rem", md: "2rem" }}>
          It's going to be amazing! Sign up to find out when it's ready
        </small>
      </Flex>
      <Subscribe />
    </Stack>
  );
};

export default Coming;
