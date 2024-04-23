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
import {
  getCategories,
  getProducts,
  getProductsByCategory,
} from "@/lib/products-api";

export default function index({ products, categories, jewelryProducts }) {
  console.log(jewelryProducts);
  return (
    <main className="w-full min-h-[100dvh] p-0 m-0">
      <HeaderTop />
      <Navbar />
      <HeroSlider />
      {/* <CategorySlider /> */}
      <RecentProducts products={products} />
      <ProductsByCategory />
      <Footer />
      <FooterBottom />
    </main>
  );
}

export async function getServerSideProps() {
  const products = await getProducts();

  const categories = await getCategories();

  const jewelryProducts = await getProductsByCategory("jewelery");

  return {
    props: {
      products,
      categories,
      jewelryProducts,
    },
  };
}
