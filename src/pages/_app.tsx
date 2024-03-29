import VerticalPositionProvider from "../contexts/VerticalPositionProvider";

import "./../styles/index.scss";
import type { AppProps } from "next/app";
import Layout from "../components/shared/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <VerticalPositionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </VerticalPositionProvider>
  );
}
