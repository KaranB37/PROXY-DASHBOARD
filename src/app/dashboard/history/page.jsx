import { CONFIG } from 'src/config-global';

import { OverviewEcommerceView } from 'src/sections/overview/e-commerce/view/overview-ecommerce-view';

// ----------------------------------------------------------------------

export const metadata = { title: `History | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <OverviewEcommerceView title="History" />;
}
