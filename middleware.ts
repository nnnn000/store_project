// middleware.ts
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { NextResponse } from "next/server";

// 1. ดึงฟังก์ชัน auth ออกมาจาก NextAuth
const { auth } = NextAuth(authConfig);

// 2. ต้องมั่นใจว่ามีการ export default ฟังก์ชันที่รับ 'req' เข้าไป
export default auth((req) => {
  const { nextUrl, cookies } = req;

  // สร้าง Response พื้นฐานขึ้นมา
  const res = NextResponse.next();

  // --- Logic การจัดการคุกกี้ตะกร้าสินค้า ---
  if (!cookies.get("sessionCartId")) {
    const sessionCartId = crypto.randomUUID();

    // ตั้งค่าคุกกี้ลงใน Response object
    res.cookies.set("sessionCartId", sessionCartId, {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
    });
  }

  // ส่ง Response ที่เราปรับแต่งแล้วกลับไป
  return res;
});

// 3. กำหนด Matcher ให้ชัดเจน
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
