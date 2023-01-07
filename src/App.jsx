import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import coming from './components/Coming'
import Coming from "./components/Coming";
import Timer from "./components/Timer";

function App() {
  return (
    <Stack
      p={"5"}
      background="url(https://i.postimg.cc/2SY5DYVR/background.png), url('./images/bgImage.jpg')"
      w={"100%"}
      height="100vh"
      boxSizing={'border-box'}
      backgroundPosition="center"
      backgroundSize={'cover'}
      backgroundRepeat="repeat"

    >
      <Flex as={'section'}>
      <Text
        bgClip='text'
        bgGradient='linear(to-l, #FF5733, #FFFF00)'
        fontSize={{ base: '21px', md: '30px', lg: '36px' }}
        fontWeight='extrabold'
      >
        VoiceOut2Me
      </Text>
      </Flex>
      <Timer />
      <Coming />


    </Stack>
  );
}

export default App;
