import BasketComponent from "@/components/basket/basket";
import MainLayout from "./main-layout";
import { ReactElement } from "react";

export default function Checkout() {
  return (<BasketComponent />);
}

Checkout.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
