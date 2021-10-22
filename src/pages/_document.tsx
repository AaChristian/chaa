import * as config from "../providers/config";
import Document, { Html, Head, Main, NextScript } from "next/document";

const GoogleAnalytics = () => {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${config.gaId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${config.gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

export default class MyDocument extends Document {
  render() {
    console.log("config.gaId:", config.gaId);
    return (
      <Html lang="en">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {config.gaId && <GoogleAnalytics />}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
