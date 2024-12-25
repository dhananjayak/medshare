import { Product } from '@/core/product';
import prisma from '../lib/prisma'

// check if product already exists in Product Table
export async function exists(hash: string) {
    const product = await prisma.product.findFirst({ where: { hash } });

    return !!product;
}

// create a new product in Product Table
export async function add(name: string, description: string, hash: string, categoryId: number): Promise<number> {

    const result = await prisma.product.create({
        data: {
            name: name,
            description: description,
            hash: hash,
            categoryId,
        }
    });

    return result.id;
}