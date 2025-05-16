import { useState } from 'react';
import { items } from '../data/items';
import { shops } from '../data/shops';
import type { Item } from '../types/Item';
import type { Shop } from '../types/Shop';

interface Props {
  buyItem: (item: Item) => void;
  money: number;
}

export const ShopTab = ({ buyItem, money }: Props) => {
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);

  if (!selectedShop) {
    return (
      <>
        <h2>🛍️ Choose a Shop</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
          {shops.map(shop => (
            <div
              key={shop.id}
              style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }}
              onClick={() => setSelectedShop(shop)}
            >
              <h3>{shop.name}</h3>
              <p>{shop.description}</p>
            </div>
          ))}
        </div>
      </>
    );
  }

  // Show shop inventory
  const shopItems = items.filter(item => selectedShop.allowedCategories.includes(item.category));

  return (
    <>
      <button onClick={() => setSelectedShop(null)}>← Back to Shops</button>
      <h2>{selectedShop.name}</h2>
      <p>{selectedShop.description}</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
        {shopItems.map(item => (
          <div key={item.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            <strong>{item.name}</strong>
            <p>{item.description}</p>
            <p>💰 ${item.price}</p>
            <button
              onClick={() => buyItem(item)}
              disabled={money < item.price}
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
