import {Button, Stack, VStack, Heading} from "@chakra-ui/react";
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
      <Stack bg="#717171" h="100vh">
        <VStack align="center" h="100%" justify="center" pt="60px">
          <Heading
            color="white"
            fontSize={{base: "2xl", md: "2xl", lg: "3xl"}}
            marginX={{base: "50px", md: "80px", lg: "80px"}}
            textAlign="center"
          >
            ¡Hola, soy Tahiel!👋
          </Heading>
        </VStack>
        <Button
          bottom={{base: "20px", md: "20px", lg: "20px"}}
          colorScheme="white"
          fontWeight="500"
          position="relative"
          rounded="full"
          size="lg"
          transition="all .15s ease"
          variant="link"
          onClick={() => {
            scroller.scrollTo("dos", scrollType);
          }}
        >
          <ChevronDownIcon color="#fff" fontSize="60" />
        </Button>
      </Stack>
    </>
  );
};

export default Uno;
