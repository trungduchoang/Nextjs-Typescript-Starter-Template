// libs
import React from "react";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
// components
import DocumentHead from "@/components/DocumentHead";
import AppLayout from "./AppLayout";
// others
import { useInitStore } from "@/configs/Redux/store";
import "@/components/Slider/slide.scss";
import "@/components/Menu/Menu.scss";
import "@/styles/main.css";

const App = ({ Component, pageProps }: AppProps) => {
  const store = useInitStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <AppLayout>
        <>
          <DocumentHead />
          <Component {...pageProps} />
        </>
      </AppLayout>
    </Provider>
  );
};

export default App;
