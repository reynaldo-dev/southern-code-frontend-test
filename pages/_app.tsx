import "@/styles/globals.css";
import { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};
interface IAppProps {
  Component: NextPageWithLayout;
  pageProps: any;
}

export default function App({ Component, pageProps }: IAppProps) {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);
  return getLayout(<Component {...pageProps} />);
}
