import Head from "next/head";
import { TemplateConfigProvider } from "./TemplateConfigContext";
import type { TemplateConfig } from "./withTemplateConfig";

interface TemplatePageHOCProps {
  title?: string;
}
export default function templatePageHOC(
  Component: (props: any) => JSX.Element,
  templatePageHOCProps: TemplatePageHOCProps = {}
) {
  return function WrappedComponent(props: { templateConfig: TemplateConfig }) {
    return (
      <>
        <Head>
          <title>
            {templatePageHOCProps?.title
              ? `${templatePageHOCProps.title} | ${props.templateConfig.site.title}`
              : props.templateConfig.site.title}
          </title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <TemplateConfigProvider value={props.templateConfig}>
          <Component {...props} />
        </TemplateConfigProvider>
      </>
    );
  };
}
