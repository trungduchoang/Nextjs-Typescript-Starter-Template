// libs
import React from "react";
import { Provider } from "react-redux";
// components
import AppLayout from "./AppLayout";
// others
import { useInitStore } from "@/configs/Redux/store";
import "@/styles/main.css";

const App = ({ Component, pageProps }) => {
  const store = useInitStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
};

export default App;
