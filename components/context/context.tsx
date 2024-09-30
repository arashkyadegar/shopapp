import { createContext } from "react";
const myAppContext = createContext({
  drpDwnIsOpen: false,
  setDrpDwnIsOpen: (drpDwnIsOpen: boolean) => { },
  storeUserLinkDlgShow: false,
  setStoreUserLinkDlgShow: (storeUserLinkDlgShow: boolean) => { },
  navbarShow: false,
  setNavbarShow: (navbarShow: boolean) => { },
  navbarW: false,
  setNavbarW: (navbarW: boolean) => { },
  asideToggle: true,
  setAsideToggle: (asideToggle: boolean) => { },
  asideFinancialDrpToggle: false,
  setAsideFinancialDrpToggle: (asideFinancialDrpToggle: boolean) => { },
  asideCellarDrpToggle: false,
  setAsideCellarDrpToggle: (asideCellarDrpToggle: boolean) => { },
  asidePostDrpToggle: false,
  setAsidePostDrpToggle: (asidePostDrpToggle: boolean) => { },
  passwordVisibility: false,
  setPasswordVisibility: (passwordVisibility: boolean) => { }
});

export default myAppContext;
