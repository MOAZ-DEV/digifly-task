import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  let lang: string = 'en';
  const
    handleReversedLangProp = (data: string) => {
      lang = data
    }
  return (
    <Html>
      <Head />
      <body>
        <Main />
      </body>
      <NextScript />
    </Html>
  );
}
