import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';


const app = express();
const port = process.env.PORT || 3001;

// Replace with your actual Square API access token
const squareAccessToken = 'EAAAFAt7UNm6TDc-ebCs8X8fza8k9Y64d67sL5Z4LFbAzCPSkhdo5bMZ4PABJH4M';

app.use(cors());

app.get('/menu-items', async (req, res) => {
  try {
    // Fetch menu items
    const itemsResponse = await fetch('https://connect.squareup.com/v2/catalog/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${squareAccessToken}`,
      },
      body: JSON.stringify({
        object_types: ['ITEM'],
      }),
    });

    // Fetch images
    const imagesResponse = await fetch('https://connect.squareup.com/v2/catalog/list?types=IMAGE', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${squareAccessToken}`,
      },
    });

    const itemsData = await itemsResponse.json();
    const imagesData = await imagesResponse.json();

    if (itemsData.errors) {
      console.error('Error fetching menu items:', itemsData.errors);
      res.status(500).json({ error: 'Failed to fetch menu items' });
      return;
    }

    if (imagesData.errors) {
      console.error('Error fetching images:', imagesData.errors);
      res.status(500).json({ error: 'Failed to fetch images' });
      return;
    }

    // Create a map of image_id to image_url
    const imageMap = {};
    imagesData.objects.forEach((image) => {
      imageMap[image.id] = image.image_data.url;
    });

    // Extract menu items from the response
    const menuItems = itemsData.objects.map((obj) => {
      return {
        id: uuidv4(), // Generate a unique ID for each menu item
        name: obj.item_data.name,
        description: obj.item_data.description,
        price: obj.item_data.variations[0].item_variation_data.price_money.amount / 100,
        category: obj.item_data.category_id,
        image_url: imageMap[obj.item_data.image_id], // Add image_url property
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
