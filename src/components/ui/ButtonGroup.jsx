import React from "react";
import {FiMail} from "react-icons/fi";
import {FaLinkedin} from "react-icons/fa";
import {AiOutlineGithub, AiOutlineWhatsApp} from "react-icons/ai";
import {VscFilePdf} from "react-icons/vsc";
import {HStack, IconButton, Tooltip, Link} from "@chakra-ui/react";
const ButtonGroup = () => {
  return (
    <>
      <HStack spacing={4}>
        <Tooltip fontSize="sm" label="Mail">
          <Link isExternal href="mailto:tahielpeed@gmail.com">
            <IconButton icon={<FiMail />} rounded="100%" size="lg" variant="solid" />
          </Link>
        </Tooltip>
        <Link isExternal href="https://www.linkedin.com/in/tahiel-pedevilla-de-donato">
          <Tooltip fontSize="sm" label="LinkedIn">
            <IconButton icon={<FaLinkedin />} rounded="100%" size="lg" variant="solid" />
          </Tooltip>
        </Link>
        <Link isExternal href="https://github.com/tahielpedevilla">
          <Tooltip fontSize="sm" label="GitHub">
            <IconButton icon={<AiOutlineGithub />} rounded="100%" size="lg" variant="solid" />
          </Tooltip>
        </Link>
        <Link isExternal href="https://wa.me/+5492664405142">
          <Tooltip fontSize="sm" label="WhatsApp">
            <IconButton icon={<AiOutlineWhatsApp />} rounded="100%" size="lg" variant="solid" />
          </Tooltip>
        </Link>
        <Link isExternal href="https://drive.google.com/file/d/1awqcMegaNXtzHIhpe8ThK3b-1KABJKNF/view?usp=sharing">
          <Tooltip fontSize="sm" label="CV .pdf">
            <IconButton icon={<VscFilePdf />} rounded="100%" size="lg" variant="solid" />
          </Tooltip>
        </Link>
      </HStack>
    </>
  );
};

export default ButtonGroup;
