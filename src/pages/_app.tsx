import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/main/Layout";
import { CustomThemeProvider } from "@/utils/CustomTheme";
import { FoodContextProvider } from "@/context/FoodContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CustomThemeProvider>
      <FoodContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FoodContextProvider>
    </CustomThemeProvider>
  );
};
export default App;
