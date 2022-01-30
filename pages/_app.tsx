import "../styles/globals.css";
import "../Assets/css/style.css";
import type { AppProps } from "next/app";
import LayoutComponent from "../components/layout";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </Provider>
  );
}

export default MyApp;
