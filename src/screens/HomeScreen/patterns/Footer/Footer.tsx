import Box from "@src/components/Box/Box";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";
import { useTemplateConfig } from "@src/services/template/TemplateConfigContext";
import Icon from "@src/components/Icon/Icon";
import LogoRight from "@src/components/Icon/svgs/logoRight";

export default function Footer() {
  const theme = useTheme();
  const templateConfig = useTemplateConfig();

  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x999,
        color: theme.colors.neutral.x000,
        width: "100%",
        marginTop: "35px",
      }}
    >
      <Box
        styleSheet={{
          borderBottom: `1px solid ${theme.colors.neutral.x700}`,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Personal />
        <iframe
          style={{ width: "100%", height: "100%" }}
          src={templateConfig?.personal?.mapa}
          loading="lazy"
        ></iframe>
      </Box>
      <Link
        href="#"
        styleSheet={{
          color: theme.colors.neutral.x200,
          padding: "5px",
          textAlign: "center",
        }}
        variant="body2"
      >
        Feito por Synodos
      </Link>
    </Box>
  );
}

const Personal = () => {
  const theme = useTheme();
  const templateConfig = useTemplateConfig();

  return (
    <Box styleSheet={{ padding: { xs: "30px 30px", md: "30px 80px" } }}>
      <Box styleSheet={{ gap: "10px" }}>
        <Box
          tag="svg"
          // viewBox={windowsize[0] >= 768 ? "0 0 294 58" : "0 0 2028 2650"}
          viewBox="0 0 294 58"
          styleSheet={{
            maxWidth: "300px",
            width: "100%",
            fill: theme.colors.neutral.x100,
          }}
        >
          {/* {windowsize[0] >= 768 ? <LogoRight /> : <LogoDown />} */}
          <LogoRight />
        </Box>
        <Text
          tag="h3"
          variant="body2"
          styleSheet={{ color: theme.colors.primary.x400, width: "100%" }}
        >
          {templateConfig?.personal?.endereço}
        </Text>
        {/* Icones Redes Sociais */}
        <Box
          styleSheet={{
            flexDirection: "row",
            gap: "10px",
          }}
        >
          {Object.keys(templateConfig.personal.socialNetworks).map((key) => {
            const socialNetwork = templateConfig.personal.socialNetworks[key];
            if (socialNetwork) {
              return (
                <Link
                  key={key}
                  target="_blank"
                  href={templateConfig.personal.socialNetworks[key]}
                >
                  <Icon
                    styleSheet={{ color: theme.colors.neutral.x100 }}
                    size="lg"
                    name={key as any}
                  />
                </Link>
              );
            }
            return null;
          })}
        </Box>
      </Box>
    </Box>
  );
};
