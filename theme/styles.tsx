import { mode } from "@chakra-ui/theme-tools";
import { colors } from "./colors";

const { dark } = colors;

export const styles = {
   global: (props: any) => ({
      body: {
         bg: mode(dark.primary, dark.primary)(props),
      },
   }),
};
