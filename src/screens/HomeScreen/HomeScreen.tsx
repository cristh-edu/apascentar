import Box from "@src/components/Box/Box";
import type { Article } from "@src/services/articles/ArticlesService";
import templatePageHOC from "@src/services/template/templatePageHOC";
import { useTheme } from "@src/theme/ThemeProvider";
import Slider from "./patterns/Slider/Slider";
import Container from "@src/screens/DefaultScreen/patterns/Container/Container";
import Footer from "@src/screens/DefaultScreen/patterns/Footer/Footer";
import Menu from "@src/screens/DefaultScreen/patterns/Menu/Menu";
import { DefaultScreen } from "../DefaultScreen/DefaultScreen";

interface HomeScreenProps {
  articles: Article[];
}
function HomeScreen(props: HomeScreenProps) {
  return (
    <DefaultScreen>
      <Slider />
      <Container>
        {/* <Container.Header /> */}
        <Container.Articles articles={props.articles} />
      </Container>
    </DefaultScreen>
  );
}

export default templatePageHOC(HomeScreen, {
  title: "Home",
});
