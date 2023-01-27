import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { components } from "./components";
import { styles } from "./styles";
import { config } from "./config";
import { breakpoints } from "./breakpoints";

export const theme = extendTheme({
   colors,
   components,
   styles,
   config,
   breakpoints,
});
