"use server";

import { CartItem } from "@/types";
import { cookies } from "next/headers";
import { formatError } from "../utils";

export async function addItemToCart(data: CartItem) {
  try {
    // Check for cart cookie
    const sessionCartId = (await cookies()).get("sessionCar");

    return {
      success: true,
      message: "Item added to cart",
    };
  } catch {
    return {
      success: false,
      message: "Item added to cart",
    };
  }
}
