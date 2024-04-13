import type { AppProps } from "next/app";
import GlobalStyles from "@/src/styles/GlobalsStyle";
import theme from "@/src/styles/theme";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "@/src/contexts/AuthContext";
import { FolderListProvider } from "@/src/contexts/CardListContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <FolderListProvider>
            <Component {...pageProps} />
          </FolderListProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}
