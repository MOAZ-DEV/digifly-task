import type { AppProps } from "next/app";
import '../styling/index.scss'
import { Provider } from "react-redux";
import store from "../state-management/store";

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>;
}
