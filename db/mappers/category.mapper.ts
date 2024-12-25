import * as Db from '@prisma/client';
import { Category } from '@/core/category';

export const toCategories = (categories: Db.Category[]): Category[] =>
     categories.map(({name, id}) => ({name, id}));
