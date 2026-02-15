import ProductList from "@/components/shared/product/product-list";
import { getLastestProducts } from "@/lib/actions/product.actions";

const Homepage = async () => {
  const latestProducts = await getLastestProducts();

  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" />
    </>
  );
};

export default Homepage;
