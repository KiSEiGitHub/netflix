import { colors } from "./colors";
import { mode } from "@chakra-ui/theme-tools";

const { dark, light } = colors;

export const components = {
   Heading: {
      baseStyle: {
         fontWeight: 500,
      },
      variants: {
         Title: (props: any) => ({
            color: mode("#000", dark.text.title)(props),
            fontSize: '1.7em'
         }),
      },
   },

   Link: {
      baseStyle: {
         fontWeight: 400,
      },
      variants: {
         Nav: (props: any) => ({
            color: mode(
               dark.text.para.secondary,
               dark.text.para.secondary
            )(props),
            fontSize: "0.8em",
            _hover: {
               color: mode(dark.text.para.trois, dark.text.para.trois),
               textDecoration: "none",
            },
         }),
      },
   },
};
