import {ChevronDownIcon} from "@chakra-ui/icons";
import {Button, Flex, Heading, VStack} from "@chakra-ui/react";
import React from "react";
import {scroller} from "react-scroll";

const scrollType = {
  duration: 500,
  delay: 50,
  smooth: true,
};

const Dos = () => {
  return (
    <>
      <VStack align="center" bg="#3182ce" h="100vh" justify="center">
        <Flex>
          <Heading as="h4" color="white" marginX={{base: "50px", md: "150px", lg: "200px"}} textAlign="center">
            Apasionado por la innovación y la tecnología, estoy dispuesto a codear por los objetivos de tu empresa o
            proyecto.
          </Heading>
        </Flex>
        <Button
          colorScheme="white"
          rounded="full"
          size="lg"
          top={{base: "100px", md: "100px", lg: "180px"}}
          transition="all .5s ease"
          variant="link"
          onClick={() => {
            scroller.scrollTo("tres", scrollType);
          }}
        >
          <ChevronDownIcon color="#fff" fontSize="60" />
        </Button>
      </VStack>
    </>
  );
};

export default Dos;
