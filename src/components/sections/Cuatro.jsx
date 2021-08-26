import {ChevronDownIcon} from "@chakra-ui/icons";
import {Button, Flex, Heading, VStack} from "@chakra-ui/react";
import React from "react";
import {scroller} from "react-scroll";

const scrollType = {
  duration: 500,
  delay: 50,
  smooth: true,
};

const Cuatro = () => {
  return (
    <>
      <VStack align="center" bg="#b794f4" h="100vh" justify="center">
        <Flex>
          <Heading as="h4" color="white" marginX={{base: "50px", md: "150px", lg: "200px"}} textAlign="center">
            Siempre buscando nuevos desafíos y en constante aprendizaje.
          </Heading>
        </Flex>
        <Button
          rounded="full"
          size="lg"
          top={{base: "100px", md: "150px", lg: "200px"}}
          variant="link"
          onClick={() => {
            scroller.scrollTo("cinco", scrollType);
          }}
        >
          <ChevronDownIcon fontSize="60" />
        </Button>
      </VStack>
    </>
  );
};

export default Cuatro;
