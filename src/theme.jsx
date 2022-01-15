import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      fonts: {
        heading: "Inter, sans-serif",
        body: "Inter, sans-serif",
      },
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          bg: "transparent",
          boxShadow: "0",
          _focus: {
            boxShadow: "0",
          },
        },
      },
    },
  },
});

export default theme;
