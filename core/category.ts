import { categories }  from "@/db/category";

export type Category = {
    id: number;
    name: string;
}

let __categories: Category[] = [];

export async function getCategories() {
    __categories = __categories.length > 0 ? __categories : await categories();

    return __categories;
}

