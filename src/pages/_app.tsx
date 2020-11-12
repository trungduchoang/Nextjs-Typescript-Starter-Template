// libs
import React from "react";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
// components
import AppLayout from "@/views/layout/AppLayout";
// configs
import HTMLHead from "@/configs/HTMLHead";
import { useInitStore } from "@/configs/Redux";
import { interceptRequest } from "@/configs/Axios";
// others
import { generateInitialState } from "@/utils";
import "swiper/swiper.scss";
import "@/styles/classless.css";

const App = ({ Component, pageProps }: AppProps) => {
  const initialState = generateInitialState.call(pageProps);
  const store = useInitStore(initialState);

  interceptRequest();

  return (
    <>
      <HTMLHead />
      <Provider store={store}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Provider>
    </>
  );
};

export default App;
