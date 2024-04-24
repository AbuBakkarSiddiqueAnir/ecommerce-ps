import {
  CategorySlider,
  Footer,
  FooterBottom,
  HeaderTop,
  HeroSlider,
  Navbar,
  ProductsByCategory,
  RecentProducts,
} from "@/components";
import Divider from "@/components/ui/divider";
import { getCategories, getProducts } from "@/lib/products-api";
import { store } from "@/store";
import { Provider } from "react-redux";

export default function index({ products, categories }) {
  return (
    <main className="w-full min-h-[100dvh] p-0 m-0">
      <HeaderTop options={categories} />
      <Navbar />
      <HeroSlider />
      <CategorySlider />
      <Divider cls=" w-[92%] mx-auto my-12 " />
      <RecentProducts products={products} />
      <Provider store={store}>
        <ProductsByCategory categories={categories} />
      </Provider>
      <Footer />
      <FooterBottom />
    </main>
  );
}

export async function getServerSideProps() {
  const products = await getProducts();

  const categories = await getCategories();

  return {
    props: {
      products,
      categories,
    },
  };
}
