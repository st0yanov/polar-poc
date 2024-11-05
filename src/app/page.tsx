import { Pricing } from "@/components/Pricing";

export default function Home() {
  const productPriceId = process.env.POLAR_PRODUCT_PRICE_ID!;
  const successUrl = process.env.POLAR_SUCCESS_URL!;

  return (
    <div>
      <h1>Polar Embedded Checkout Demo</h1>
      <Pricing productPriceId={productPriceId} successUrl={successUrl} />
    </div>
  );
}
