import prisma from '../lib/prisma'
import { toCategories } from './mappers/category.mapper';

export async function categories() {
    const result = await prisma.category.findMany();

    return toCategories(result);
}