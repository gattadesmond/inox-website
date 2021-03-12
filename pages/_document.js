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

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Saira:wght@700&display=swap"
            rel="stylesheet"
          />

          <link rel="stylesheet" href="/css/libraries.css"></link>
        </Head>
        <body className="">
          <div className="wrapper">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}

export default SojuWebsite;
