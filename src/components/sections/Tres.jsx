import React from "react";
import {Button, Text, Link, Stack, VStack} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import {scroller} from "react-scroll";

const scrollType = {
  duration: 500,
  delay: 50,
  smooth: true,
};

const Tres = () => {
  return (
    <>
      <Stack bg="#717171" h="100vh">
        <VStack align="center" h="100%" justify="center" pt="60px">
          <Text
            color="white"
            fontSize={{base: "md", lg: "xl"}}
            marginX={{base: "50px", md: "150px", lg: "200px"}}
            textAlign="center"
          >
            Actualmente trabajando en{" "}
            <Link isExternal href="https://houston.com.ar/">
              Houston
            </Link>{" "}
            BASE CREATIVA como Web Developer.
            <br />
            Tengo experiencia con: Html, CSS, JavaScript, React, PHP, MySql, Git y GitHub.
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
            scroller.scrollTo("cuatro", scrollType);
          }}
        >
          <ChevronDownIcon color="#fff" fontSize="60" />
        </Button>
      </Stack>
    </>
  );
};

export default Tres;
