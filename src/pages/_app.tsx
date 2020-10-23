// libs
import React from "@/components/CommonFooter/components/BranchInfo/node_modules/react";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
// components
import DocumentHead from "@/components/DocumentHead";
import AppLayout from "../components/AppLayout";
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
