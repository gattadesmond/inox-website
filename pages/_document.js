import Document, { Html, Head, Main, NextScript } from 'next/document'

class SojuWebsite extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="dark bg-black dark:bg-black">
        <Head />
        <body className="bg-black dark:bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default SojuWebsite