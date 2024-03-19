import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";

export interface Article {
  metadata: {
    date: string;
    url: string;
    tags: string[];
  };
  image?: string;
  slug: string; // Como se fosse o ID do Article
  title: string;
  subtitle?: string;
  resume: string;
  content: string;
}

export default function ArticlesService() {
  return {
    async getAll(): Promise<Article[]> {
      const PATH_POSTS = path.resolve(".", "_data", "articles");
      const articleFiles = await fs.readdir(PATH_POSTS, { encoding: "utf-8" });
      const articlesPromise = articleFiles.map(async (articleFileName) => {
        const filePath = path.join(PATH_POSTS, articleFileName);
        const articleFile = await fs.readFile(filePath, { encoding: "utf-8" });
        const { data, content } = matter(articleFile);

        const article: Article = {
          metadata: {
            date: new Date(data.date).toISOString(),
            tags: data.tags,
            url: data.url,
          },
          image: data.image || "",
          title: data.title,
          subtitle: data.subtitle,
          resume: data.resume,
          slug: articleFileName.replace(".md", ""),
          content,
        };
        return article;
      });
      const articles = Promise.all(articlesPromise);
      return articles;
    },
  };
}
