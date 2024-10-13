import { CONFIG } from 'src/config-global';
import { getProducts } from 'src/actions/product-ssr';

import { ProductShopView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Product shop - ${CONFIG.appName}` };

export default async function Page() {
  const { products } = await getProducts();
  if (!products) {
    throw new Error('No products found');
  }
  return <ProductShopView products={products} />;
}
