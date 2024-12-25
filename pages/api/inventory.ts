import { NextApiRequest, NextApiResponse } from 'next';

interface InventoryItem {
  productName: string;
  categoryName: string;
  quantity: number;
}

let inventory: InventoryItem[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  
  if (req.method === 'GET') {
        return res.status(200).json({name: 'John Doe'});
  }

  if (req.method === 'POST') {
    const { productName, categoryName, quantity } = req.body;

    if (!productName || !categoryName || typeof quantity !== 'number') {
      return res.status(400).json({ message: 'Invalid input' });
    }

    const newItem: InventoryItem = { productName, categoryName, quantity };
    inventory.push(newItem);

    return res.status(201).json(newItem);
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}