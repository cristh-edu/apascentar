import Box from "@src/components/Box/Box";
import type { Article } from "@src/services/articles/ArticlesService";
import templatePageHOC from "@src/services/template/templatePageHOC";
import { useTheme } from "@src/theme/ThemeProvider";
import Slider from "./patterns/Slider/Slider";
import Container from "./patterns/Container/Container";
import Footer from "./patterns/Footer/Footer";
import Menu from "./patterns/Menu/Menu";

interface HomeScreenProps {
  articles: Article[];
}
function HomeScreen(props: HomeScreenProps) {
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
      <Slider />
      <Container>
        {/* <Container.Header /> */}
        <Container.Articles articles={props.articles} />
      </Container>
      <Footer />
    </Box>
  );
}

export default templatePageHOC(HomeScreen, {
  title: "Home",
});
