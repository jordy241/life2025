import type { Item } from '../types/Item';

interface Props {
  items: Item[];
}

export const InventoryTab = ({ items }: Props) => {
  return (
    <>
      <h2>🎒 Inventory</h2>
      {items.length === 0 ? (
        <p>Your inventory is empty.</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item.id}><strong>{item.name}</strong> – {item.description}</li>
          ))}
        </ul>
      )}
    </>
  );
};
