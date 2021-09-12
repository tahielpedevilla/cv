import React from "react";
import {Button, Flex, Heading, VStack} from "@chakra-ui/react";
import {scroller} from "react-scroll";
import {ChevronDownIcon} from "@chakra-ui/icons";

const scrollType = {
  duration: 500,
  delay: 50,
  smooth: true,
};

const Tres = () => {
  return (
    <>
      <VStack align="center" bg="#319795" h="100vh" justify="center">
        <Flex>
          <Heading as="h4" color="white" marginX={{base: "50px", md: "150px", lg: "200px"}} textAlign="center">
            Desarrollador web Front-End con conocimientos en: Html, CSS, JavaScript, React, Angular y Git.
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
            scroller.scrollTo("cuatro", scrollType);
          }}
        >
          <ChevronDownIcon color="#fff" fontSize="60" />
        </Button>
      </VStack>
    </>
  );
};

export default Tres;
