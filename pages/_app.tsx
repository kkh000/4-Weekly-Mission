import type { AppProps } from "next/app";
import GlobalStyles from "@/src/styles/GlobalsStyle";
import theme from "@/src/styles/theme";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
