import React from "react";
import {Button, Text, Stack, VStack} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import {scroller} from "react-scroll";

const scrollType = {
  duration: 500,
  delay: 50,
  smooth: true,
};

const Dos = () => {
  return (
    <>
      <Stack bg="#000" h="100vh">
        <VStack align="center" h="100%" justify="center" pt="60px">
          <Text
            color="white"
            fontSize={{base: "md", lg: "xl"}}
            marginX={{base: "50px", md: "150px", lg: "200px"}}
            textAlign="center"
          >
            Apasionado por la innovación y la tecnología, estoy dispuesto a codear por los objetivos de tu empresa o
            proyecto.
          </Text>
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
            scroller.scrollTo("tres", scrollType);
          }}
        >
          <ChevronDownIcon color="#fff" fontSize="60" />
        </Button>
      </Stack>
    </>
  );
};

export default Dos;
