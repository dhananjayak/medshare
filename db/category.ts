import prisma from '../lib/prisma'
import { toCategories } from './mappers/category.mapper';

export async function categories() {
    const result = await prisma.category.findMany();

    return toCategories(result);
}

// find category by name
export async function findCategoryByName(name: string) {
    const result = await prisma.category.findFirst({ where: { name } });

    return result;
}