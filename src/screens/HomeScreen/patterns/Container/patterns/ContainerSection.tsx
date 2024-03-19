import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

interface ContainerSectionProps {
  title: string;
  subtitle?: string;
  resume?: string;
  url: string;
  date: string;
  tags: string[];
  image: string;
}
export function ContainerSection({
  title,
  subtitle,
  resume,
  date,
  tags,
  url,
  image,
}: ContainerSectionProps) {
  const theme = useTheme();
  // const articleDate = new Date(date)
  //   .toLocaleDateString("pt-BR", {
  //     year: "numeric",
  //     month: "short",
  //     day: "numeric",
  //   })
  //   .replace(".", "")
  //   .replace(/de /g, "");
  return (
    <Box
      styleSheet={{
        position: "relative",
        padding: "80px",
        display: "grid",
        gridTemplateColumns: image
          ? { sm: "1fr", md: "1fr", lg: "1fr 1fr" }
          : "1fr",
        justifyItens: "center",
        flexDirection: "row",
        gridGap: "35px",
      }}
    >
      <Box>
        {/* Date */}
        {/* <Text
        variant="body4"
        styleSheet={{
          fontWeight: "bold",
          marginBottom: "32px",
          marginLeft: "4px",
        }}
      >
        {articleDate}
      </Text> */}
        {/* Title */}
        <Link
          href={url}
          variant="heading2"
          styleSheet={{
            display: "inline",
          }}
          colorVariantEnabled={false}
        >
          <Box
            tag="span"
            styleSheet={{
              display: "inline",
              borderRadius: "4px",
              color: theme.colors.primary.x500,
              hover: {
                color: theme.colors.primary.x400,
              },
            }}
          >
            {title}
          </Box>
        </Link>
        {subtitle ? (
          <Text variant="body1" styleSheet={{}}>
            {subtitle}
          </Text>
        ) : (
          <></>
        )}

        {/* Tags */}
        <Box
          styleSheet={{
            flexDirection: "row",
            marginBottom: "20px",
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

        <Text
          variant="body3"
          styleSheet={{
            marginBottom: "20px",
          }}
        >
          {resume}
        </Text>
      </Box>

      {/* Image */}
      {image && (
        <Button.Base
          href={url}
          styleSheet={{
            hover: {
              opacity: 0.8,
            },
          }}
        >
          <Image
            styleSheet={{
              width: "100%",
              borderRadius: "12px",
            }}
            src={image}
            alt="Image Description"
          />
        </Button.Base>
      )}
    </Box>
  );
}

function ContainerSectionSideTimeline() {
  const theme = useTheme();

  return (
    <Box
      styleSheet={{
        position: "absolute",
        top: 0,
        bottom: 0,
        color: theme.colors.neutral.x200,
        marginLeft: "-16px",
      }}
    >
      <Icon
        size="sm"
        name="clock_fill"
        styleSheet={{
          transform: {
            xs: "translateX(-50%) scale(.9)",
            sm: "translateX(-50%)",
          },
          position: "absolute",
          top: "0",
          left: "0",
        }}
      />
      <Box
        styleSheet={{
          top: "16px",
          bottom: "0",
          margin: "auto",
          position: "absolute",
          width: "1px",
          backgroundColor: "currentColor",
        }}
      />
    </Box>
  );
}
