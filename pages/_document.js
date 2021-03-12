import Document, { Html, Head, Main, NextScript } from "next/document";

class SojuWebsite extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="">
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
            integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
            crossOrigin="anonymous"
          />

          <link
            href="/css/bootstrap.min.css"
            rel="stylesheet"
            type="text/css"
          />

          <link href="/css/animate.css" rel="stylesheet" type="text/css" />

          <link href="/css/base.css" rel="stylesheet" type="text/css" />

          <link href="/css/shortcodes.css" rel="stylesheet" type="text/css" />

          <link href="/css/style.css" rel="stylesheet" type="text/css" />

          <link href="/css/responsive.css" rel="stylesheet" type="text/css" />
        </Head>
        <body className="">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default SojuWebsite;
