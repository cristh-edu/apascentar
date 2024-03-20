import React from "react";
import Box from "@src/components/Box/Box";
import { useTheme } from "@src/theme/ThemeProvider";
import type { Article } from "@src/services/articles/ArticlesService";
import { ContainerSection, ContainerText } from "./patterns/ContainerSection";

interface ContainerProps {
  children: React.ReactNode;
}
export default function Container({ children }: ContainerProps) {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x800,
        color: theme.colors.neutral.x050,
        marginTop: "90vh",
        width: { xs: "95vw", md: "80vw" },
        borderRadius: "8px",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      {children}
    </Box>
  );
}

interface ContainerArticlesProps {
  articles: Article[];
}
Container.Articles = ({ articles }: ContainerArticlesProps) => {
  return (
    <Box>
      {articles.map(({ slug, title, subtitle, resume, metadata, image }, i) => {
        const { url, tags } = metadata;
        return (
          <ContainerSection
            align={i % 2 ? "left" : "right"}
            key={slug}
            url={url}
            image={image}
          >
            <Box styleSheet={{ gridArea: "children" }}>
              <ContainerText
                title={title}
                subtitle={subtitle}
                resume={resume}
                tags={tags}
                url={url}
              />
            </Box>
          </ContainerSection>
        );
      })}
    </Box>
  );
};
