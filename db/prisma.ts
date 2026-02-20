import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
// ✅ เปลี่ยนกลับมาใช้ตัวมาตรฐานครับ (v7 จะฉีดโค้ดเข้าตัวนี้เอง)
import { PrismaClient } from "@prisma/client";
import ws from "ws";
import dotenv from "dotenv";

dotenv.config();

// ตั้งค่า WebSocket
neonConfig.webSocketConstructor = ws;
const connectionString = process.env.DATABASE_URL;

const pool = new Pool({ connectionString });

// v7 มักจะเข้มงวดเรื่อง Type ใช้ as any ไปก่อนเพื่อความลื่นไหล
const adapter = new PrismaNeon(pool as any);

// สร้าง Client โดยส่ง adapter เข้าไป
export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        compute(product) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product) {
          return product.rating.toString();
        },
      },
    },
  },
});
