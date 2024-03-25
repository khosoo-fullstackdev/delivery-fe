import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CustomThemeProvider } from "@/utils/CustomTheme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CustomThemeProvider>
      <Component {...pageProps} />
    </CustomThemeProvider>
  );
};
export default App;
