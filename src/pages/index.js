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

export default function index() {
  return (
    <main className="w-full min-h-[100dvh] p-0 m-0">
      <HeaderTop />
      <Navbar />
      <HeroSlider />
      <CategorySlider />
      <RecentProducts />
      <ProductsByCategory />
      <Footer />
      <FooterBottom />
    </main>
  );
}
