import {Flex, Heading, HStack, IconButton, Link, Tooltip, VStack} from "@chakra-ui/react";
import React from "react";
import {AiOutlineGithub, AiOutlineWhatsApp} from "react-icons/ai";
import {VscFilePdf} from "react-icons/vsc";
import {FiMail} from "react-icons/fi";
import {FaLinkedin} from "react-icons/fa";
import {Element, scroller} from "react-scroll";
import {MdKeyboardArrowDown} from "react-icons/md";

const onClickDos = () => {
  scroller.scrollTo("dos", {
    duration: 1500,
    delay: 100,
    smooth: true,
  });
};
const onClickTres = () => {
  scroller.scrollTo("tres", {
    duration: 1500,
    delay: 100,
    smooth: true,
  });
};
const onClickCuatro = () => {
  scroller.scrollTo("cuatro", {
    duration: 1500,
    delay: 100,
    smooth: true,
  });
};
const onClickCinco = () => {
  scroller.scrollTo("cinco", {
    duration: 1500,
    delay: 100,
    smooth: true,
  });
};

const Home = () => {
  return (
    <>
      <Element name="uno">
        <Flex bg="blue.900" h="100vh" justify="center">
          <Flex alignItems="center">
            <HStack spacing={4}>
              <Heading fontSize="8xl" textAlign="center">
                ¡Hola! <br />
                Soy Tahiel
              </Heading>
            </HStack>
          </Flex>
          <IconButton
            icon={<MdKeyboardArrowDown size="sm" />}
            m={4}
            position="sticky"
            right="50%"
            top="30px"
            onClick={onClickDos}
          />
        </Flex>
        <Element name="dos" />
        <Flex bg="blue.500" h="100vh" justify="center">
          <Flex alignItems="center" maxW="70%">
            <HStack spacing={4}>
              <Heading as="h4" textAlign="center">
                Apasionado por la innovación y la tecnología, estoy dispuesto a codear por los objetivos de tu empresa o
                proyecto.
              </Heading>
            </HStack>
          </Flex>
          <IconButton
            icon={<MdKeyboardArrowDown size="sm" />}
            m={4}
            position="sticky"
            right="50%"
            top="30px"
            onClick={onClickTres}
          />
        </Flex>
      </Element>
      <Element name="tres">
        <Flex bg="teal.500" h="100vh" justify="center">
          <Flex alignItems="center" maxW="70%">
            <HStack spacing={4}>
              <Heading as="h4" textAlign="center">
                Desarrollador web Front-End con conocimientos en: Html, CSS, JavaScript, React, Angular y Git.
              </Heading>
            </HStack>
          </Flex>
          <IconButton
            icon={<MdKeyboardArrowDown size="sm" />}
            m={4}
            position="sticky"
            right="50%"
            top="30px"
            onClick={onClickCuatro}
          />
        </Flex>
      </Element>
      <Element name="cuatro">
        <Flex bg="purple.300" h="100vh" justify="center">
          <Flex alignItems="center" maxW="70%">
            <HStack spacing={4}>
              <Heading as="h4" textAlign="center">
                Siempre buscando nuevos desafíos y en constante aprendizaje.
              </Heading>
            </HStack>
          </Flex>
          <IconButton
            icon={<MdKeyboardArrowDown size="sm" />}
            m={4}
            position="sticky"
            right="50%"
            top="30px"
            onClick={onClickCinco}
          />
        </Flex>
      </Element>
      <Element name="cinco">
        <Flex bg="blue.800" h="100vh" justify="center">
          <Flex alignItems="center" maxW="70%">
            <VStack spacing={4}>
              <Heading as="h4" textAlign="center">
                ¿Querés contactarme?👋
              </Heading>
              <HStack spacing={4}>
                <Tooltip fontSize="sm" label="Mail">
                  <Link isExternal href="mailto:tahielpeed@gmail.com">
                    <IconButton icon={<FiMail />} rounded="100%" size="lg" />
                  </Link>
                </Tooltip>
                <Link isExternal href="https://www.linkedin.com/in/tahiel-pedevilla-de-donato">
                  <Tooltip fontSize="sm" label="LinkedIn">
                    <IconButton icon={<FaLinkedin />} rounded="100%" size="lg" />
                  </Tooltip>
                </Link>
                <Link isExternal href="https://github.com/tahielpedevilla">
                  <Tooltip fontSize="sm" label="GitHub">
                    <IconButton icon={<AiOutlineGithub />} rounded="100%" size="lg" />
                  </Tooltip>
                </Link>
                <Link isExternal href="https://wa.me/+5492664405142">
                  <Tooltip fontSize="sm" label="WhatsApp">
                    <IconButton icon={<AiOutlineWhatsApp />} rounded="100%" size="lg" />
                  </Tooltip>
                </Link>
                <Link
                  isExternal
                  href="https://drive.google.com/file/d/1awqcMegaNXtzHIhpe8ThK3b-1KABJKNF/view?usp=sharing"
                >
                  <Tooltip fontSize="sm" label="CV .pdf">
                    <IconButton icon={<VscFilePdf />} rounded="100%" size="lg" />
                  </Tooltip>
                </Link>
              </HStack>
            </VStack>
          </Flex>
        </Flex>
      </Element>
    </>
  );
};

export default Home;
