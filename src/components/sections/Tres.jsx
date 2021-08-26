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
          rounded="full"
          size="lg"
          top={{base: "100px", md: "150px", lg: "200px"}}
          variant="link"
          onClick={() => {
            scroller.scrollTo("cuatro", scrollType);
          }}
        >
          <ChevronDownIcon fontSize="60" />
        </Button>
      </VStack>
    </>
  );
};

export default Tres;
