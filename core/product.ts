import crypto from 'crypto';
import { Category } from "./category";
import * as productDb from '@/db/product';
import { findCategoryByName } from '@/db/category';

export type Product = {
    id: string;
    name: string;
    description: string;
    hash: string;
    category: Category;
}

async function add(name: string, description: string, categoryName: string) {
    // check if product already exists in Product Table
    // if it does not exist, add it to the Product Table
    const category = await findCategoryByName(categoryName);

    const hash = generateHash(name);


    const result = await productDb.add(name, description, hash, category?.id || 0);

}

function generateHash(name: string): string {
    // replace all spaces with underscores
    const normalizeName = name.replace(/\s/g, '_');
    // compute the SHA256 of the product name
    return crypto.createHash('sha256').update(normalizeName).digest('hex');
}