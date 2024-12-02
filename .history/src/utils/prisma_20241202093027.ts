import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query', 'info', 'warn', 'error'], // Optional: Enable logs for debugging
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
