import { getAllProduct } from "@/database/queries";
import Ads from "./Ads";
import Banner from "./Banner";
import Categories from "./Categories";
import Feature from "./Feature";
import NewArriaival from "./NewArriaival";
import Products from "./Products";

export default async function HomeArea({ lang }) {
  const products = await getAllProduct();
  // console.log(lang);
  // console.log("All products are : ", products);

  return (
    <>
      <Banner lang={lang} />
      <Feature lang={lang} />
      <Categories lang={lang} />
      <NewArriaival lang={lang} />
      <Ads />
      <Products lang={lang} />
    </>
  );
}
