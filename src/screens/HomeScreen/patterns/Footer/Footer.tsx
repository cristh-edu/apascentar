import Box from "@src/components/Box/Box";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x999,
        color: theme.colors.neutral.x000,
        width: "100%",
        marginTop: "35px",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Link
        href="#"
        styleSheet={{ color: theme.colors.neutral.x200, padding: "5px" }}
        variant="body2"
      >
        Feito por Synodos
      </Link>
    </Box>
  );
}
