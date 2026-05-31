import { useState } from "react";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("Coffee");

  const menuItems = {
    Coffee: [
      { name: "Cappuccino", price: "₹120" },
      { name: "Latte", price: "₹140" },
      { name: "Espresso", price: "₹110" },
      { name: "Mocha", price: "₹150" }
    ],

    Tea: [
      { name: "Masala Tea", price: "₹40" },
      { name: "Green Tea", price: "₹60" },
      { name: "Lemon Tea", price: "₹50" },
      { name: "Ginger Tea", price: "₹45" }
    ],

    "Veg Snacks": [
      { name: "Veg Sandwich", price: "₹90" },
      { name: "French Fries", price: "₹80" },
      { name: "Veg Burger", price: "₹120" },
      { name: "Paneer Roll", price: "₹140" }
    ],

    "Non Veg Snacks": [
      { name: "Chicken Burger", price: "₹160" },
      { name: "Chicken Roll", price: "₹170" },
      { name: "Chicken Sandwich", price: "₹150" },
      { name: "Chicken Nuggets", price: "₹180" }
    ],

    Drinks: [
      { name: "Cold Coffee", price: "₹160" },
      { name: "Mango Shake", price: "₹120" },
      { name: "Chocolate Shake", price: "₹140" },
      { name: "Fresh Lime Soda", price: "₹80" }
    ]
  };

  return (
    <div className="container">
      <h1>Our Menu</h1>

      {/* Filters */}
      <div className="filters">
        {Object.keys(menuItems).map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Items */}
      <div className="menu-grid">
        {menuItems[selectedCategory].map((item, index) => (
          <div key={index} className="card">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;