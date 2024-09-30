import { initialState } from "@/redux/store/category/categories";
import { wrapperForPersistStore } from "@/redux/store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ReactElement, ReactNode, useState } from "react";
import { NextPage } from "next";
import myAppContext from "@/components/context/context";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const { store } = wrapperForPersistStore.useWrappedStore(initialState);
  const persistor = persistStore(store);
  const getLayout = Component.getLayout ?? ((page: any) => page);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [asidePostDrpToggle, setAsidePostDrpToggle] = useState(false);
  const [asideFinancialDrpToggle, setAsideFinancialDrpToggle] = useState(false)
  const [asideCellarDrpToggle, setAsideCellarDrpToggle] = useState(false);
  const [asideToggle, setAsideToggle] = useState(false);
  const [navbarW, setNavbarW] = useState(false);
  const [drpDwnIsOpen, setDrpDwnIsOpen] = useState(false);
  const [storeUserLinkDlgShow, setStoreUserLinkDlgShow] = useState(false);
  const [navbarShow, setNavbarShow] = useState(false);
  return (
    <myAppContext.Provider
    value={{
      drpDwnIsOpen,
      setDrpDwnIsOpen,
      storeUserLinkDlgShow,
      setStoreUserLinkDlgShow,
      navbarShow,
      setNavbarShow,
      navbarW,
      setNavbarW,
      asideToggle,
      setAsideToggle,
      asideCellarDrpToggle,
      setAsideCellarDrpToggle,
      asideFinancialDrpToggle,
      setAsideFinancialDrpToggle,
      asidePostDrpToggle,
      setAsidePostDrpToggle,
      passwordVisibility,
      setPasswordVisibility
    }}>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      {getLayout(<Component {...pageProps} />)}
      {/* </PersistGate> */}
    </Provider>
    </myAppContext.Provider>);

}
App.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
