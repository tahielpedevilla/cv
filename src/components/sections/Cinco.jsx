import React from "react";
import {VStack, Heading, Flex, Button} from "@chakra-ui/react";
import {animateScroll as scroller} from "react-scroll";
import {ChevronUpIcon} from "@chakra-ui/icons";

import ButtonGroup from "../ui/ButtonGroup";

const scrollType = {
  duration: 2000,
  delay: 50,
  smooth: true,
};

const Cinco = () => {
  return (
    <>
      <Flex alignItems="center" bg="#2a4365" h="100vh" id="contact" justify="center">
        <VStack spacing={4}>
          <Heading as="h4" color="white" marginX={{base: "50px", md: "150px", lg: "200px"}} mt={20} textAlign="center">
            ¿Querés contactarme?👋
          </Heading>
          <ButtonGroup />
          <Button
            bottom={{base: "100px", md: "70px", lg: "50px"}}
            colorScheme="white"
            position="absolute"
            rounded="full"
            size="lg"
            variant="link"
            onClick={() => {
              scroller.scrollToTop(scrollType);
            }}
          >
            <ChevronUpIcon fontSize="60" />
          </Button>
        </VStack>
      </Flex>
    </>
  );
};

export default Cinco;
