import React, { useState, useRef, useEffect } from "react";
import { Box, HStack, Flex, Heading, Stack, Text } from "@chakra-ui/react";

const Timer = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("January 25 2023 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <Flex as={"section"} justifyContent={"center"} w={"100%"} h={"10rem"}>
      <HStack
        fontSize={{ base: "1rem", md: "2rem" }}
        fontFamily={"sans-serif"}
        mt={"3rem"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          boxSize={{ base: "5.3rem", md: "10rem" }}
          fontWeight={"semibold"}
          border={"2px solid white"}
          justifyContent={"center"}
          textAlign={"center"}
          fontColor={"white}
        >
          <Text> {timerDays}</Text>
          <Text>Days</Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          boxSize={{ base: "5.3rem", md: "10rem" }}
          fontWeight={"semibold"}
          border={"2px solid white"}
          justifyContent={"center"}
          textAlign={"center"}
          fontColor={"white}
        >
          <Text>{timerHours}</Text>
          <Text>Hours</Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          boxSize={{ base: "5.3rem", md: "10rem" }}
          x={"1rem"}
          fontWeight={"semibold"}
          border={"2px solid white"}
          justifyContent={"center"}
          textAlign={"center"}
          fontColor={"white}
        >
          <Text>{timerMinutes}</Text>
          <Text>Minutes</Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          boxSize={{ base: "5.3rem", md: "10rem" }}
          fontWeight={"semibold"}
          border={"2px solid white"}
          justifyContent={"center"}
          textAlign={"center"}
          fontColor={"white}
        >
          <Text>{timerSeconds}</Text>
          <Text>Seconds </Text>
        </Box>
      </HStack>
    </Flex>
  );
};

export default Timer;
