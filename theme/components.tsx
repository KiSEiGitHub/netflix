import { colors } from "./colors";
import { mode } from "@chakra-ui/theme-tools";

const { dark } = colors;

export const components = {
   Heading: {
      baseStyle: {
         fontWeight: 600,
      },
      variants: {
         Title: (props: any) => ({
            color: mode(
               dark.text.para.secondary,
               dark.text.para.secondary
            )(props),
            transition: "0.3s",
            _hover: {
               color: mode(dark.text.title, dark.text.title)(props),
            },
         }),

         Netflix: (props: any) => ({
            color: mode(dark.text.para.primary, dark.text.para.primary)(props),
            fontSize: "4em",
         }),
      },
   },

   Text: {
      variants: {
         Para: (props: any) => ({
            color: mode(
               dark.text.para.secondary,
               dark.text.para.secondary
            )(props),
            lineHeight: 6,
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
