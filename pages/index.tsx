import ArticlesService from "@src/services/articles/ArticlesService";
import { withTemplateConfig } from "@src/services/template/withTemplateConfig";

export { default } from "@src/screens/HomeScreen/HomeScreen";

export async function getStaticProps() {
  const articles = await ArticlesService().getAll();
  return { props: await withTemplateConfig({ articles }) };
}
