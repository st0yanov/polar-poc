"use client";

import { createCheckoutSession } from "@/actions/create-checkout-session";
import { PolarEmbedCheckout } from "@polar-sh/checkout/embed";
import { useState, useEffect } from "react";

export const Pricing = ({
  productPriceId,
  successUrl,
}: {
  productPriceId: string;
  successUrl: string;
}) => {
  const [checkoutUrl, setCheckoutUrl] = useState<string>("");

  useEffect(() => {
    createCheckoutSession(productPriceId, successUrl)
      .then((url) => setCheckoutUrl(url))
      .then(() => PolarEmbedCheckout.init());
  }, [productPriceId, successUrl]);

  return (
    <div>
      <button
        data-polar-checkout={checkoutUrl}
        data-polar-checkout-theme="light"
        className="inline-block rounded bg-blue-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
      >
        Checkout
      </button>
    </div>
  );
};
