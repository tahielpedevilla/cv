import React from "react";
import {FiMail} from "react-icons/fi";
import {FaLinkedin} from "react-icons/fa";
import {AiOutlineGithub, AiOutlineWhatsApp} from "react-icons/ai";
import {MdFileDownload} from "react-icons/md";
import {HStack, IconButton, Tooltip, Link} from "@chakra-ui/react";

const ButtonGroup = () => {
  return (
    <>
      <HStack spacing={4}>
        <Tooltip fontSize="sm" label="E-mail">
          <Link isExternal href="mailto:tahielpeed@gmail.com">
            <IconButton borderRadius="full" icon={<FiMail />} size="md" variant="solid" />
          </Link>
        </Tooltip>
        <Link isExternal href="https://www.linkedin.com/in/tahiel-pedevilla-de-donato">
          <Tooltip fontSize="sm" label="LinkedIn">
            <IconButton borderRadius="full" icon={<FaLinkedin />} size="md" variant="solid" />
          </Tooltip>
        </Link>
        <Link isExternal href="https://github.com/tahielpedevilla">
          <Tooltip fontSize="sm" label="GitHub">
            <IconButton borderRadius="full" icon={<AiOutlineGithub />} size="md" variant="solid" />
          </Tooltip>
        </Link>
        <Link isExternal href="https://wa.me/+5492664405142">
          <Tooltip fontSize="sm" label="WhatsApp">
            <IconButton borderRadius="full" icon={<AiOutlineWhatsApp />} size="md" variant="solid" />
          </Tooltip>
        </Link>
        <Link
          isExternal
          href="https://drive.google.com/file/d/15cLpnfCoODMFeM44tSl3Yl8EZQM56Mzh/view?usp=sharing"
          target="_blank"
        >
          <Tooltip fontSize="sm" label="Descargar CV">
            <IconButton borderRadius="full" icon={<MdFileDownload />} size="md" variant="solid" />
          </Tooltip>
        </Link>
      </HStack>
    </>
  );
};

export default ButtonGroup;
