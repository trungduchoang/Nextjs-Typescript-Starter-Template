// libs
import React from "react";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
// components
import DocumentHead from "@/libs/DocumentHead";
import AppLayout from "@/views/layout/AppLayout";
// others
import { useInitStore } from "@/configs/Redux/store";
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
