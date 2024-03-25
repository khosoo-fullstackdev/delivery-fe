import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CustomThemeProvider } from "@/utils/CustomTheme";
import Layout from "@/components/main/Layout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CustomThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CustomThemeProvider>
  );
};
export default App;
