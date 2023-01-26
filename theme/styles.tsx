import { mode } from "@chakra-ui/theme-tools";
import { colors } from "./colors";

const { dark, light } = colors;

export const styles = {
   global: (props: any) => ({
      body: {
         bg: mode("#fff", dark.primary)(props),
         "-webkit-font-smoothing": "antialiased",
      },
   }),
};
