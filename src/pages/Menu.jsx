import { useState, useEffect } from "react";

const menuItems = {
  Coffee: [
    { name: "Filter Coffee", price: "₹30", image: "/images/unsplash_1514432324607-a09d9b4aefdd.jpg" },
    { name: "Espresso", price: "₹50", image: "/images/unsplash_1510591509098-f4fdc6d0ff04.jpg" },
    { name: "Cappuccino", price: "₹80", image: "/images/unsplash_1534778101976-62847782c213.jpg" },
    { name: "Latte", price: "₹90", image: "/images/unsplash_1541167760496-1628856ab772.jpg" },
    { name: "Mocha", price: "₹100", image: "/images/unsplash_1578314675249-a6910f80cc4e.jpg" },
    { name: "Cold Coffee", price: "₹80", image: "/images/unsplash_1461023058943-07fcbe16d735.jpg" },
    { name: "Black Coffee", price: "₹40", image: "/images/unsplash_1509042239860-f550ce710b93.jpg" }
  ],

  Tea: [
    { name: "Regular Tea", price: "₹15", image: "/images/unsplash_1576092768241-dec231879fc3.jpg" },
    { name: "Masala Tea", price: "₹20", image: "/images/unsplash_1561336313-0bd5e0b27ec8.jpg" },
    { name: "Ginger Tea", price: "₹20", image: "/images/unsplash_1597481499750-3e6b22637e12.jpg" },
    { name: "Lemon Tea", price: "₹20", image: "/images/unsplash_1556881286-fc6915169721.jpg" },
    { name: "Green Tea", price: "₹30", image: "/images/unsplash_1627435601361-ec25f5b1d0e5.jpg" },
    { name: "Black Tea", price: "₹20", image: "/images/unsplash_1597481499750-3e6b22637e12.jpg" },
    { name: "Elaichi Tea", price: "₹20", image: "/images/unsplash_1544787219-7f47ccb76574.jpg" }
  ],

  "Veg Snacks": [
    { name: "Samosa", price: "₹20", image: "/images/unsplash_1589301760014-d929f3979dbc.jpg" },
    { name: "Veg Puff", price: "₹25", image: "/images/unsplash_1608686207856-001b95cf60ca.jpg" },
    { name: "French Fries", price: "₹70", image: "/images/unsplash_1573080496219-bb080dd4f877.jpg" },
    { name: "Veg Sandwich", price: "₹60", image: "/images/unsplash_1539252554453-80ab65ce3586.jpg" },
    { name: "Grilled Veg Sandwich", price: "₹80", image: "/images/unsplash_1525351484163-7529414344d8.jpg" },
    { name: "Veg Burger", price: "₹80", image: "/images/unsplash_1585238342024-78d387f4a707.jpg" },
    { name: "Paneer Burger", price: "₹100", image: "/images/unsplash_1568901346375-23c9450c58cd.jpg" },
    { name: "Veg Momos", price: "₹70", image: "/images/unsplash_1563245372-f21724e3856d.jpg" },
    { name: "Spring Rolls", price: "₹80", image: "/images/unsplash_1544025162-d76694265947.jpg" },
    { name: "Garlic Bread", price: "₹70", image: "/images/unsplash_1619535860434-ba1d8fa12536.jpg" }
  ],

  "Non Veg Snacks": [
    { name: "Egg Puff", price: "₹35", image: "/images/unsplash_1555507036-ab1f4038808a.jpg" },
    { name: "Egg Sandwich", price: "₹70", image: "/images/unsplash_1525351484163-7529414344d8.jpg" },
    { name: "Omelette", price: "₹50", image: "/images/unsplash_1510627498534-cf7e9002facc.jpg" },
    { name: "Chicken Sandwich", price: "₹120", image: "/images/unsplash_1627308595229-7830a5c91f9f.jpg" },
    { name: "Chicken Burger", price: "₹130", image: "/images/unsplash_1610614819513-58e34989848b.jpg" },
    { name: "Chicken Nuggets (6 pcs)", price: "₹120", image: "/images/unsplash_1562967914-608f82629710.jpg" },
    { name: "Chicken Popcorn", price: "₹130", image: "/images/unsplash_1569058242253-92a9c755a0ec.jpg" },
    { name: "Chicken Momos", price: "₹120", image: "/images/unsplash_1534422298391-e4f8c172dddb.jpg" },
    { name: "Chicken Roll", price: "₹120", image: "/images/unsplash_1608897013039-887f21d8c804.jpg" }
  ],

  Drinks: [
    { name: "Coca-Cola (250ml)", price: "₹30", image: "/images/unsplash_1622483767028-3f66f32aef97.jpg" },
    { name: "Sprite (250ml)", price: "₹30", image: "/images/unsplash_1551024709-8f23befc6f87.jpg" },
    { name: "Thums Up (250ml)", price: "₹30", image: "/images/unsplash_1629203851122-3726ecdf080e.jpg" },
    { name: "Fanta (250ml)", price: "₹30", image: "/images/unsplash_1613478223719-2ab802602423.jpg" },
    { name: "Limca (250ml)", price: "₹30", image: "/images/unsplash_1513558161293-cdaf765ed2fd.jpg" },
    { name: "Maaza (250ml)", price: "₹30", image: "/images/unsplash_1601004890684-d8cbf643f5f2.jpg" },
    { name: "Slice (250ml)", price: "₹30", image: "/images/unsplash_1534308983496-4fabb1a015ee.jpg" },
    { name: "Water Bottle (1L)", price: "₹20", image: "/images/unsplash_1602143407151-7111542de6e8.jpg" }
  ]
};

const categoryIcons = {
  All: "🍽️",
  Coffee: "☕",
  Tea: "🍵",
  "Veg Snacks": "🥪",
  "Non Veg Snacks": "🍗",
  Drinks: "🥤"
};

const categoryLabels = {
  All: "All",
  Coffee: "Coffee",
  Tea: "Tea",
  "Veg Snacks": "Veg Snacks",
  "Non Veg Snacks": "Non-Veg",
  Drinks: "Drinks"
};

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  const categories = ["All", ...Object.keys(menuItems)];

  const getNumericPrice = (priceStr) => {
    return parseFloat(priceStr.replace(/[^\d.-]/g, "")) || 0;
  };

  const getProcessedItems = () => {
    let items = [];
    if (selectedCategory === "All") {
      Object.entries(menuItems).forEach(([category, list]) => {
        list.forEach(item => {
          items.push({ ...item, category });
        });
      });
    } else {
      (menuItems[selectedCategory] || []).forEach(item => {
        items.push({ ...item, category: selectedCategory });
      });
    }

    // Filter by search
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      items = items.filter((item) =>
        item.name.toLowerCase().includes(query)
      );
    }

    // Sort items
    if (sortOrder === "lowToHigh") {
      items.sort((a, b) => getNumericPrice(a.price) - getNumericPrice(b.price));
    } else if (sortOrder === "highToLow") {
      items.sort((a, b) => getNumericPrice(b.price) - getNumericPrice(a.price));
    }

    return items;
  };

  const processedItems = getProcessedItems();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery, sortOrder]);

  const handleImageError = (e) => {
    e.target.src = "/images/unsplash_1495474472287-4d71bcdd2085.jpg";
  };

  return (
    <div className="container">
      {isLoading && <div className="top-loading-bar"></div>}
      <h1 className="bold-black-heading">Our Menu</h1>

      {/* Category Filters */}
      <div className="filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => {
              setSelectedCategory(category);
              setSearchQuery(""); // Reset search on category change
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

      {isLoading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : processedItems.length > 0 ? (
        <div className="menu-grid">
          {processedItems.map((item, idx) => {
            const isVeg = item.category !== "Non Veg Snacks";
            return (
              <div key={idx} className="card">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="card-img" 
                  onError={handleImageError}
                />
                <p className="card-price">{item.price}</p>
                <h3 className="card-title">{item.name}</h3>
                
                <div className="card-badge-container">
                  <span className={isVeg ? "veg-indicator" : "nonveg-indicator"}>
                    <span className={isVeg ? "veg-dot" : "nonveg-dot"}></span>
                  </span>
                  <span className={`badge-text-label ${isVeg ? "veg" : "nonveg"}`}>
                    {isVeg ? "Veg" : "Non-Veg"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{ margin: "60px 0", color: "#5c3e3e", fontSize: "1.1rem", fontWeight: "600" }}>
          No items found matching "{searchQuery}"
        </div>
      )}
    </div>
  );
}

export default Menu;