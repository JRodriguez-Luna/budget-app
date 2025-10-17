import { PrismaClient } from '@prisma/client';

// Prevent multiple instances of PrismaClient in development
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development'
      ? ['query', 'error', 'warn']
      : ['error'],
  });

// In development, attach PrismaClient to the global object
// so it isn’t recreated on every module reload
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
