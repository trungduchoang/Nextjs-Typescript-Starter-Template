import React from "react";
import { Provider } from "react-redux";
import { useInitStore } from "@/configs/Redux/store";

export default function App({ Component, pageProps }) {
  const store = useInitStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
