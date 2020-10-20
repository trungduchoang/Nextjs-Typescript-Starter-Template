// libs
import React from "react";
import { Provider } from "react-redux";
// components
import DocumentHead from "@/components/DocumentHead";
import AppLayout from "./AppLayout";
// others
import { useInitStore } from "@/configs/Redux/store";
import "@/libs/Slider/slide.scss";
import "@/styles/main.css";

const App = ({ Component, pageProps }) => {
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
