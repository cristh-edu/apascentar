import Box from "@src/components/Box/Box";
import Menu from "./patterns/Menu/Menu";
import Footer from "./patterns/Footer/Footer";
import { useTheme } from "@src/theme/ThemeProvider";
import React from "react";

interface DefaultScreenProps {
  children: React.ReactNode;
}

export function DefaultScreen({ children }: DefaultScreenProps) {
  const theme = useTheme();

  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.neutral.x900,
        flex: 1,
        alignItems: "center",
      }}
    >
      <Menu />
      {children}
      <Footer />
    </Box>
  );
}
