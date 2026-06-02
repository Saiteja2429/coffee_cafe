import { useState, useEffect } from "react";

const tablesData = [
  { id: 1, name: "Table 1 - Window Side", capacity: "2 People", description: "Scenic highway views through full-length glass windows.", image: "/images/unsplash_1544787219-7f47ccb76574.jpg" },
  { id: 2, name: "Table 2 - Cozy Corner", capacity: "2 People", description: "Tucked away in a quiet corner, perfect for a peaceful cup of coffee.", image: "/images/unsplash_1554118811-1e0d58224f24.jpg" },
  { id: 3, name: "Table 3 - Garden View", capacity: "4 People", description: "Overlooks our lush green outdoor cafe landscaping.", image: "/images/unsplash_1495474472287-4d71bcdd2085.jpg" },
  { id: 4, name: "Table 4 - Family Booth", capacity: "6 People", description: "Spacious semi-private booth designed for comfortable family meals.", image: "/images/unsplash_1517248135467-4c7edcad34c4.jpg" },
  { id: 5, name: "Table 5 - Bar Counter", capacity: "1 Person", description: "High-stool seating for quick espresso shots and snack breaks.", image: "/images/unsplash_1514933651103-005eec06c04b.jpg" },
  { id: 6, name: "Table 6 - Executive Suite", capacity: "4 People", description: "Comfortable padded armchairs with an integrated charging dock.", image: "/images/unsplash_1590846406792-0adc7f938f1d.jpg" },
  { id: 7, name: "Table 7 - Lounge Sofa", capacity: "4 People", description: "Plush leather sofa seating for relaxed, leisurely group chats.", image: "/images/unsplash_1520250497591-112f2f40a3f4.jpg" },
  { id: 8, name: "Table 8 - Terrace Deck", capacity: "6 People", description: "Open-air rooftop seating to enjoy a fresh breeze.", image: "/images/unsplash_1533777857889-4be7c70b33f7.jpg" },
  { id: 9, name: "Table 9 - Rooftop Cabana", capacity: "6 People", description: "An exclusive rooftop canopy surrounded by ambient warm lighting and fresh air.", image: "/images/unsplash_1543007630-9710e4a00a20.jpg" }
];

function BookTable() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTableId, setSelectedTableId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [selectedTableId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate booking API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const selectedTable = tablesData.find((t) => t.id === selectedTableId);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (isSubmitted && selectedTable) {
    return (
      <div className="container">
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h2>Table Reserved Successfully!</h2>
          <p>Thank you, <strong>{formData.name}</strong>. Your reservation is confirmed.</p>
          
          <div className="booked-card-preview">
            <img src={selectedTable.image} alt={selectedTable.name} />
            <div>
              <h4>{selectedTable.name}</h4>
              <span>Capacity: {selectedTable.capacity}</span>
            </div>
          </div>

          <div className="booking-summary">
            <p>📅 <strong>Date:</strong> {formData.date}</p>
            <p>⏰ <strong>Time:</strong> {formData.time}</p>
            <p>👥 <strong>Guests:</strong> {formData.guests} People</p>
          </div>
          <button onClick={() => {
            setFormData({
              name: "",
              phone: "",
              date: "",
              time: "",
              guests: "2",
              notes: ""
            });
            setSelectedTableId(null);
            setIsSubmitted(false);
          }} className="cta-button">
            Book Another Table
          </button>
        </div>
      </div>
    );
  }

  // View 1: Select a Table Card
  if (selectedTableId === null) {
    return (
      <div className="container">
        <h1 className="bold-black-heading">Choose Your Table</h1>
        <p className="booking-desc">Select one of our 8 premium styled tables to book your spot today.</p>
        
        <div className="tables-grid">
          {tablesData.map((table) => (
            <div key={table.id} className="table-card">
              <img src={table.image} alt={table.name} className="table-card-img" />
              <div className="table-card-info">
                <span className="table-card-badge">{table.capacity}</span>
                <h3>{table.name}</h3>
                <p>{table.description}</p>
                <button 
                  onClick={() => setSelectedTableId(table.id)} 
                  className="cta-button table-card-btn"
                >
                  Reserve Table
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // View 2: Complete the Booking Form
  return (
    <div className="container">
      {isSubmitting && <div className="top-loading-bar"></div>}
      
      <button onClick={() => setSelectedTableId(null)} className="back-btn">
        ← Back to Table Selection
      </button>

      <h1 className="bold-black-heading">Confirm Reservation</h1>
      
      <div className="selected-table-banner">
        <img src={selectedTable.image} alt={selectedTable.name} className="selected-table-banner-img" />
        <div className="selected-table-banner-info">
          <h2>{selectedTable.name}</h2>
          <span className="selected-table-capacity">Capacity: {selectedTable.capacity}</span>
          <p>{selectedTable.description}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Select Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Select Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of Guests</label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
          >
            <option value="2">2 People</option>
            <option value="4">4 People</option>
            <option value="6">6 People</option>
            <option value="8">8 People</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="notes">Special Requests (Optional)</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="E.g., High chair needed, window seat, celebrating an occasion..."
            rows="3"
          ></textarea>
        </div>

        <button type="submit" className="cta-button form-submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "Processing Reservation..." : "Confirm Reservation"}
        </button>
      </form>
    </div>
  );
}

export default BookTable;
