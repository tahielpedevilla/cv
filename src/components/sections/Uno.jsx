import {Button, Flex, Heading, VStack} from "@chakra-ui/react";
import React from "react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import {scroller} from "react-scroll";

const scrollType = {
  duration: 500,
  delay: 50,
  smooth: true,
};

const Uno = () => {
  return (
    <>
      <VStack align="center" bg="#1a365d" h="100vh" justify="center">
        <Flex>
          <Heading
            color="white"
            fontSize={{base: "4xl", md: "6xl", lg: "8xl"}}
            m="20px"
            marginX={{base: "50px", md: "80px", lg: "80px"}}
            textAlign="center"
          >
            ¡Hola, soy Tahiel!👋
          </Heading>
        </Flex>
        <Button
          colorScheme="white"
          rounded="full"
          size="lg"
          top={{base: "100px", md: "150px", lg: "200px"}}
          variant="link"
          onClick={() => {
            scroller.scrollTo("dos", scrollType);
          }}
        >
          <ChevronDownIcon fontSize="60" />
        </Button>
      </VStack>
    </>
  );
};

export default Uno;
