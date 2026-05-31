<div className="filters">
  <button
    className={selectedCategory === "Coffee" ? "filter-btn active" : "filter-btn"}
    onClick={() => setSelectedCategory("Coffee")}
  >
    ☕ Coffee
  </button>

  <button
    className={selectedCategory === "Tea" ? "filter-btn active" : "filter-btn"}
    onClick={() => setSelectedCategory("Tea")}
  >
    🍵 Tea
  </button>

  <button
    className={selectedCategory === "Veg Snacks" ? "filter-btn active" : "filter-btn"}
    onClick={() => setSelectedCategory("Veg Snacks")}
  >
    🥪 Veg Snacks
  </button>

  <button
    className={selectedCategory === "Non Veg Snacks" ? "filter-btn active" : "filter-btn"}
    onClick={() => setSelectedCategory("Non Veg Snacks")}
  >
    🍗 Non Veg
  </button>

  <button
    className={selectedCategory === "Drinks" ? "filter-btn active" : "filter-btn"}
    onClick={() => setSelectedCategory("Drinks")}
  >
    🥤 Drinks
  </button>
</div>