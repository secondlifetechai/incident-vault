import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-use-before-define
  var prisma: PrismaClient | undefined;
}

let prisma: any;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}
export default prisma;
