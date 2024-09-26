import { initialState } from "@/redux/store/category/categories";
import { wrapperForPersistStore } from "@/redux/store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
export default function App({ Component, pageProps }: AppProps) {
  const { store } = wrapperForPersistStore.useWrappedStore(initialState);
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <Component {...pageProps} />
      {/* </PersistGate> */}
    </Provider>);

}
