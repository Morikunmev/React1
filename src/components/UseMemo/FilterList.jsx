import { useState, useMemo } from "react";

export const FilterList = () => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const items = [
    { id: 1, name: "iPhone", price: 999, category: "Electronics" },
    { id: 2, name: "MacBook", price: 1299, category: "Electronics" },
    { id: 3, name: "Coffee Maker", price: 99, category: "Kitchen" },
    { id: 4, name: "Running Shoes", price: 129, category: "Sports" },
    { id: 5, name: "Headphones", price: 199, category: "Electronics" },
    { id: 6, name: "Blender", price: 79, category: "Kitchen" },
  ];

  const filteredAndSortedItems = useMemo(() => {
    console.log("Recalculando filtrado y ordenamiento...");

    // Primero filtramos
    const filtered = items.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
    );

    // Luego ordenamos
    return filtered.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "price") {
        return a.price - b.price;
      }
      return 0;
    });
  }, [search, sortBy]); // Solo recalcula cuando search o sortBy cambian

  return (
    <div>
      <h2>1. Lista Filtrable y Ordenable</h2>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por nombre o categoría..."
        />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Ordenar por Nombre</option>
          <option value="price">Ordenar por Precio</option>
        </select>
      </div>
      <ul>
        {filteredAndSortedItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} ({item.category})
          </li>
        ))}
      </ul>
    </div>
  );
};
