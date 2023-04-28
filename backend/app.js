import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;

// Replace with your actual Square API access token
const squareAccessToken = 'EAAAEFfkAgW4pkB8g-ZPcauYlvUHWXulU-Q3pdgcSoj_z0xa1q1sho5drf9IuNyC';

app.use(cors());

app.get('/menu-items', async (req, res) => {
  try {
    const response = await fetch('https://connect.squareup.com/v2/catalog/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${squareAccessToken}`
      },
      body: JSON.stringify({
        object_types: ['ITEM']
      })
    });

    const data = await response.json();

    if (data.errors) {
      console.error('Error fetching menu items:', data.errors);
      res.status(500).json({ error: 'Failed to fetch menu items' });
      return;
    }

    // Extract menu items from the response
    const menuItems = data.objects.map(obj => {
      return {
        id: obj.id,
        name: obj.item_data.name,
        description: obj.item_data.description,
        price: obj.item_data.variations[0].item_variation_data.price_money.amount / 100,
        category: obj.item_data.category_id,
      };
    });

    res.json(menuItems);
  } catch (error) {
    console.error('Error fetching menu items:', error);
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
