import { useState } from "react";

const menuItems = {
  Coffee: [
    { name: "Filter Coffee", price: "₹30" },
    { name: "Espresso", price: "₹50" },
    { name: "Cappuccino", price: "₹80" },
    { name: "Latte", price: "₹90" },
    { name: "Mocha", price: "₹100" },
    { name: "Cold Coffee", price: "₹80" },
    { name: "Black Coffee", price: "₹40" }
  ],

  Tea: [
    { name: "Regular Tea", price: "₹15" },
    { name: "Masala Tea", price: "₹20" },
    { name: "Ginger Tea", price: "₹20" },
    { name: "Lemon Tea", price: "₹20" },
    { name: "Green Tea", price: "₹30" },
    { name: "Black Tea", price: "₹20" },
    { name: "Elaichi Tea", price: "₹20" }
  ],

  "Veg Snacks": [
    { name: "Samosa", price: "₹20" },
    { name: "Veg Puff", price: "₹25" },
    { name: "French Fries", price: "₹70" },
    { name: "Veg Sandwich", price: "₹60" },
    { name: "Grilled Veg Sandwich", price: "₹80" },
    { name: "Veg Burger", price: "₹80" },
    { name: "Paneer Burger", price: "₹100" },
    { name: "Veg Momos", price: "₹70" },
    { name: "Spring Rolls", price: "₹80" },
    { name: "Garlic Bread", price: "₹70" }
  ],

  "Non Veg Snacks": [
    { name: "Egg Puff", price: "₹35" },
    { name: "Egg Sandwich", price: "₹70" },
    { name: "Omelette", price: "₹50" },
    { name: "Chicken Sandwich", price: "₹120" },
    { name: "Chicken Burger", price: "₹130" },
    { name: "Chicken Nuggets (6 pcs)", price: "₹120" },
    { name: "Chicken Popcorn", price: "₹130" },
    { name: "Chicken Momos", price: "₹120" },
    { name: "Chicken Roll", price: "₹120" }
  ],

  Drinks: [
    { name: "Coca-Cola (250ml)", price: "₹30" },
    { name: "Sprite (250ml)", price: "₹30" },
    { name: "Thums Up (250ml)", price: "₹30" },
    { name: "Fanta (250ml)", price: "₹30" },
    { name: "Limca (250ml)", price: "₹30" },
    { name: "Maaza (250ml)", price: "₹30" },
    { name: "Slice (250ml)", price: "₹30" },
    { name: "Water Bottle (1L)", price: "₹20" }
  ]
};

const categoryIcons = {
  Coffee: "☕",
  Tea: "🍵",
  "Veg Snacks": "🥪",
  "Non Veg Snacks": "🍗",
  Drinks: "🥤"
};

const categoryLabels = {
  Coffee: "Coffee",
  Tea: "Tea",
  "Veg Snacks": "Veg Snacks",
  "Non Veg Snacks": "Non Veg",
  Drinks: "Drinks"
};

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("Coffee");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  // Helper to parse price string into number
  const getNumericPrice = (priceStr) => {
    return parseFloat(priceStr.replace(/[^\d.-]/g, "")) || 0;
  };

  // Determine if item is veg or non-veg
  const isVegCategory = (category) => {
    return category !== "Non Veg Snacks";
  };

  // Process items: filter by category, then by search, then sort
  const getProcessedItems = () => {
    let items = menuItems[selectedCategory] || [];

    // Filter by search
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      items = items.filter((item) =>
        item.name.toLowerCase().includes(query)
      );
    }

    // Sort items
    if (sortOrder === "lowToHigh") {
      items = [...items].sort(
        (a, b) => getNumericPrice(a.price) - getNumericPrice(b.price)
      );
    } else if (sortOrder === "highToLow") {
      items = [...items].sort(
        (a, b) => getNumericPrice(b.price) - getNumericPrice(a.price)
      );
    }

    return items;
  };

  const processedItems = getProcessedItems();
  const isVeg = isVegCategory(selectedCategory);

  return (
    <div className="container">
      <h1>Our Menu</h1>

      {/* Category Filters */}
      <div className="filters">
        {Object.keys(menuItems).map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() => {
              setSelectedCategory(category);
              setSearchQuery(""); // Reset search on category change for better UX
            }}
          >
            {categoryIcons[category]} {categoryLabels[category]}
          </button>
        ))}
      </div>

      {/* Search and Sort Controls */}
      <div className="menu-controls">
        <input
          type="text"
          className="search-input"
          placeholder={`Search ${categoryLabels[selectedCategory].toLowerCase()}...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          className="sort-select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Sort by: Default</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Menu Grid */}
      {processedItems.length > 0 ? (
        <div className="menu-grid">
          {processedItems.map((item, index) => (
            <div key={index} className="card">
              <div>
                <div className="badge-container">
                  <span className={`badge ${isVeg ? "badge-veg" : "badge-nonveg"}`}>
                    <span className="badge-dot"></span>
                  </span>
                  <span
                    className={`badge-text ${
                      isVeg ? "badge-text-veg" : "badge-text-nonveg"
                    }`}
                  >
                    {isVeg ? "Veg" : "Non-Veg"}
                  </span>
                </div>
                <div className="card-header">
                  <h3>{item.name}</h3>
                </div>
              </div>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ margin: "40px 0", color: "#4b2e2e", fontSize: "16px" }}>
          No items found matching "{searchQuery}"
        </div>
      )}
    </div>
  );
}

export default Menu;