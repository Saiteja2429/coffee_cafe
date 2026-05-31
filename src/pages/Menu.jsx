function Menu() {
  const items = [
    { name: "Cappuccino", price: "₹120" },
    { name: "Latte", price: "₹140" },
    { name: "Cold Coffee", price: "₹160" },
    { name: "Veg Sandwich", price: "₹90" }
  ];

  return (
    <div className="container">
      <h1>Menu</h1>

      {items.map((item, index) => (
        <div key={index} className="card">
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Menu;
