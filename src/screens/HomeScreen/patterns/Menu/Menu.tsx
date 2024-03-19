import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/Icon/Icon";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";
import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

export default function Menu() {
  const theme = useTheme();
  const baseSize = "40px";

  const { y: scrollY } = useWindowScroll(); // Obtenha a posição de rolagem vertical da janela
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    setIsScroll(scrollY > 0);
  }, [scrollY]);

  return (
    <Box
      className={isScroll ? "teste" : ""}
      styleSheet={{
        width: "100%",
        position: "fixed",
        backgroundColor: isScroll ? theme.colors.neutral.x999 : "transparent",
        left: 0,
        right: 0,
        top: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: "16px",
        paddingHorizontal: "20px",
        color: theme.colors.neutral.x000,
        zIndex: 99,
      }}
    >
      <Button.Base
        styleSheet={{
          width: baseSize,
          height: baseSize,
          backgroundColor: theme.colors.primary.x500,
          borderRadius: "100%",
          alignItems: "center",
          justifyContent: "center",
          hover: {
            backgroundColor: theme.colors.primary.x400,
          },
          focus: {
            backgroundColor: theme.colors.primary.x600,
          },
        }}
      >
        <Text>MS</Text>
      </Button.Base>

      <Button.Base
        styleSheet={{
          width: baseSize,
          height: baseSize,
          backgroundColor: theme.colors.neutral.x500,
          borderRadius: "100%",
          alignItems: "center",
          justifyContent: "center",
          hover: {
            backgroundColor: theme.colors.neutral.x400,
          },
          focus: {
            backgroundColor: theme.colors.neutral.x600,
          },
        }}
      >
        <Icon name="menu" />
      </Button.Base>
    </Box>
  );
}
