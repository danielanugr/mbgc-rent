import { z } from 'zod';
import { insertProductSchema } from '@/lib/validator';
import { Decimal } from '@prisma/client/runtime/library';

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: Decimal;
  createdAt: Date;
};
