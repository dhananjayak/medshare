import { NextApiRequest, NextApiResponse } from 'next';
import { getCategories } from '@/core/category';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const categories = await getCategories();
        return res.status(200).json(categories);
    }
}