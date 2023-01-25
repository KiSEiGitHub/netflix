import { colors } from "./colors";
import { mode } from "@chakra-ui/theme-tools";

const { dark, light } = colors;

export const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("#fff", "#000")(props),
    },
  }),
};