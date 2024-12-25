import { Product } from '@/core/product';
import prisma from '../lib/prisma'

// check if product already exists in Product Table
export async function exists(name: string) {
    const product = await prisma.product.findFirst({ where: { name } });

    return !!product;
}
