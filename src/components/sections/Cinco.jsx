import React from "react";
import {VStack, Heading, Flex, Stack, Button} from "@chakra-ui/react";
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
      <Stack bg="#717171" h="100vh">
        <Flex align="center" h="100%" justify="center">
          <VStack spacing={4}>
            <Heading
              color="white"
              fontSize={{base: "2xl", md: "2xl", lg: "3xl"}}
              marginX={{base: "50px", md: "150px", lg: "200px"}}
              mt={20}
              textAlign="center"
            >
              ¿Querés contactarme?
            </Heading>
            <ButtonGroup />
          </VStack>
        </Flex>
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
            scroller.scrollToTop(scrollType);
          }}
        >
          <ChevronUpIcon color="#fff" fontSize="60" />
        </Button>
      </Stack>
    </>
  );
};

export default Cinco;
