import Box from "@src/components/Box/Box";
import type { Article } from "@src/services/articles/ArticlesService";
import templatePageHOC from "@src/services/template/templatePageHOC";
import { useTheme } from "@src/theme/ThemeProvider";
import { DefaultScreen } from "../DefaultScreen/DefaultScreen";
import Text from "@src/components/Text/Text";
import Logo from "@src/components/Icon/svgs/logo";

interface HomeScreenProps {
  article?: Article;
}
function HomeScreen({ article }: HomeScreenProps) {
  const theme = useTheme();
  return (
    <DefaultScreen>
      <Box
        styleSheet={{
          backgroundColor: theme.colors.neutral.x800,
          color: theme.colors.neutral.x050,
          marginTop: "9vh",
          width: { xs: "95vw", md: "90vw" },
          borderRadius: "8px",
          zIndex: 1,
          justifyContent: "center",
          minHeight: "60vh",
          overflow: "clip",
        }}
      >
        {!article && (
          <>
            <Text
              tag="h1"
              variant="heading1"
              styleSheet={{ textAlign: "center" }}
            >
              Página não encontrada
            </Text>
          </>
        )}

        <Box
          tag="svg"
          viewBox="0 0 2028 2027"
          styleSheet={{
            height: { xs: "300px", md: "400px" },
            width: { xs: "300px", md: "400px" },
            right: { xs: "-80px", md: "-80px" },
            top: { xs: "-40px", md: "-80px" },
            opacity: "0.05",
            fill: "currentColor",
            position: "absolute",
            zIndex: -10,
          }}
        >
          <Logo />
        </Box>
      </Box>
    </DefaultScreen>
  );
}

export default templatePageHOC(HomeScreen, {
  title: "Home",
});
