"use server";

import { polar } from "@/utils/polar-utils";

export async function createCheckoutSession(
  productPriceId: string,
  successUrl: string,
) {
  const response = await polar.checkouts.custom.create({
    productPriceId,
    successUrl,
    embedOrigin: process.env.APP_BASE_URL!,
  });

  return response.url;
}
