import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/Icon/Icon";
import Logo from "@src/components/Icon/svgs/logo";
import Image from "@src/components/Image/Image";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";
import React from "react";

interface ContainerSectionProps {
  children: React.ReactNode;
  align: "left" | "right";
  url: string;
  image: string;
}

interface ContainerTextProps {
  title: string;
  subtitle?: string;
  resume?: string;
  tags?: string[];
  url: string;
}

export function ContainerSection({
  children,
  align,
  url,
  image,
}: ContainerSectionProps) {
  return (
    <Box
      styleSheet={{
        position: "relative",
        padding: { xs: "40px", lg: "60px" },
        display: "grid",
        gridTemplateAreas: {
          xs: "'children'\n'image'",
          md: align == "left" ? "'children image'" : "'image children'",
        },
        justifyItens: "center",
        flexDirection: "row",
        gridGap: "35px",
      }}
    >
      <Box
        tag="svg"
        viewBox="0 0 2028 2027"
        styleSheet={{
          height: { xs: "300px", md: "400px" },
          width: { xs: "300px", md: "400px" },
          [align]: { xs: "-100px", md: "-125px" },
          top: { xs: "-100px", md: "-125px" },
          opacity: "0.05",
          fill: "currentColor",
          position: "absolute",
          zIndex: -1,
        }}
      >
        <Logo />
      </Box>
      {children}
      {/* Image */}
      {image && (
        <Button.Base
          href={url}
          styleSheet={{ gridArea: "image", hover: { opacity: 0.8 } }}
        >
          <Image
            styleSheet={{ width: "100%", borderRadius: "12px" }}
            src={image}
            alt="Image Description"
          />
        </Button.Base>
      )}
    </Box>
  );
}

export function ContainerText({
  title,
  subtitle,
  resume,
  tags,
  url,
}: ContainerTextProps) {
  const theme = useTheme();

  return (
    <Box>
      {/* Title */}
      <Link
        href={url}
        variant="heading2"
        styleSheet={{ display: "inline" }}
        colorVariantEnabled={false}
      >
        <Box
          tag="span"
          styleSheet={{
            display: "inline",
            borderRadius: "4px",
            color: theme.colors.primary.x500,
            hover: { color: theme.colors.primary.x400 },
          }}
        >
          {title}
        </Box>
      </Link>
      {subtitle && <Text variant="heading5">{subtitle}</Text>}

      {/* Tags */}
      {tags.length > 0 && (
        <Box
          styleSheet={{
            flexDirection: "row",
            marginTop: "5px",
            gap: "4px",
          }}
        >
          {tags?.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              variant="body4"
              styleSheet={{
                color: theme.colors.neutral.x200,
                backgroundColor: theme.colors.neutral.x700,
                borderRadius: "1000px",
                padding: "6px 8px",
                hover: {
                  color: theme.colors.primary.x900,
                  backgroundColor: theme.colors.primary.x200,
                },
              }}
              colorVariantEnabled={false}
            >
              #{tag}
            </Link>
          ))}
        </Box>
      )}

      <Text variant="body3" styleSheet={{ marginVertical: "15px" }}>
        {resume}
      </Text>
      <Box styleSheet={{ justifyContent: "space-between" }}>
        <Box styleSheet={{ flex: 1, justifyContent: "space-between" }}>
          <Button colorVariant="primary" size="lg" href="/newsletter">
            Saiba Mais
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
