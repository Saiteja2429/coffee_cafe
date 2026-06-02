import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="home-container animate-fade-in-up">
      {/* Hero Section */}
      <section className="hero-banner">
        <div className="hero-grid">
          <div className="hero-text">
            <span className="hero-badge">Now Open on the Highway</span>
            <h1 className="hero-title">
              Welcome to <br />
              <span>Amaravati Cafe</span>
            </h1>
            <p className="hero-subtitle">
              Experience traditional South Indian filter coffee, crispy regional snacks, and premium quick service tailored for highway travelers.
            </p>
            <div className="cta-group">
              <Link to="/menu" className="cta-button">
                Explore Our Menu
              </Link>
              <Link to="/book" className="cta-button secondary">
                Book a Table
              </Link>
            </div>
          </div>
          <div className="hero-media">
            <div className="hero-image-stack">
              <img
                src="/images/unsplash_1554118811-1e0d58224f24.jpg"
                alt="Cafe Interior"
                className="hero-stack-img main"
              />
              <img
                src="/images/unsplash_1589301760014-d929f3979dbc.jpg"
                alt="Traditional Snacks"
                className="hero-stack-img secondary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-num">15k+</span>
            <span className="stat-label">Happy Travelers</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">100%</span>
            <span className="stat-label">Fresh & Hot</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">4.8★</span>
            <span className="stat-label">Google Rating</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">24/7</span>
            <span className="stat-label">Highway Service</span>
          </div>
        </div>
      </section>

      {/* Culinary Specialties Section (Upgraded) */}
      <section className="specialties-section">
        <h2 className="section-title">Our Culinary Specialties</h2>
        <p className="section-desc">Handcrafted items prepared daily with premium ingredients to fuel your journey.</p>
        
        <div className="specialties-grid">
          <div className="specialty-card">
            <img 
              src="/images/unsplash_1507133750040-4a8f57021571.jpg" 
              alt="Artisanal Coffee" 
              className="specialty-img" 
            />
            <h3>Artisanal Coffee</h3>
            <p>Traditional filter coffee and signature espresso brews prepared by master baristas.</p>
          </div>
          
          <div className="specialty-card">
            <img 
              src="/images/unsplash_1539252554453-80ab65ce3586.jpg" 
              alt="Crispy Snacks" 
              className="specialty-img" 
            />
            <h3>Fresh Snacks</h3>
            <p>Crispy samosas, warm puffs, and local savories prepared fresh hourly.</p>
          </div>
          
          <div className="specialty-card">
            <img 
              src="/images/unsplash_1513558161293-cdaf765ed2fd.jpg" 
              alt="Refreshing Coolers" 
              className="specialty-img" 
            />
            <h3>Refreshing Drinks</h3>
            <p>Chilled coolers, iced coffees, and traditional mocktails to beat the travel heat.</p>
          </div>
        </div>
      </section>

      {/* Signature Dishes Section */}
      <section className="signature-section">
        <h2 className="section-title">Chef's Signature Specials</h2>
        <p className="section-desc">Must-try highway delicacies loved by all travelers passing by.</p>
        
        <div className="sig-grid">
          <div className="sig-card">
            <div className="sig-img-container">
              <img 
                src="/images/unsplash_1514432324607-a09d9b4aefdd.jpg" 
                alt="Special Filter Coffee" 
                className="sig-img"
              />
              <span className="sig-price-tag">₹45</span>
            </div>
            <div className="sig-info">
              <span className="sig-badge">Best Seller</span>
              <h3>Special Filter Coffee</h3>
              <p>Authentic decoction brewed with premium chicory blend, served frothy in traditional brass cups.</p>
            </div>
          </div>

          <div className="sig-card">
            <div className="sig-img-container">
              <img 
                src="/images/unsplash_1668236543090-82eba5ee5976.jpg" 
                alt="Ghee Podi Dosa" 
                className="sig-img"
              />
              <span className="sig-price-tag">₹110</span>
            </div>
            <div className="sig-info">
              <span className="sig-badge">Crispy & Spicy</span>
              <h3>Ghee Podi Dosa</h3>
              <p>Thin crepe roasted with premium pure ghee, sprinkled with homemade spicy lentil powder (podi).</p>
            </div>
          </div>

          <div className="sig-card">
            <div className="sig-img-container">
              <img 
                src="/images/unsplash_1572490122747-3968b75cc699.jpg" 
                alt="Mango Lassi Cooler" 
                className="sig-img"
              />
              <span className="sig-price-tag">₹85</span>
            </div>
            <div className="sig-info">
              <span className="sig-badge">Chilled</span>
              <h3>Royal Mango Lassi</h3>
              <p>Thick, sweet yogurt beverage blended with premium alphonso mango pulp and saffron notes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Traveler Testimonials */}
      <section className="testimonials-section">
        <h2 className="section-title">What Highway Travelers Say</h2>
        <p className="section-desc">Real reviews from commuters and families who stopped by during their journeys.</p>
        
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              "The filter coffee here is an absolute lifesaver during long drives. The flavor is incredibly authentic, and the ambiance is perfect to relax and recharge."
            </p>
            <div className="testimonial-author">
              <img 
                src="/images/unsplash_1507003211169-0a1dd7228f2d.jpg" 
                alt="Vijay K." 
                className="testimonial-avatar" 
              />
              <div className="testimonial-author-info">
                <span className="testimonial-name">Vijay K.</span>
                <span className="testimonial-role">Tech Lead (Frequent Driver)</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              "We ordered the Ghee Podi Dosa and the mango lassi. Everything was served piping hot and incredibly fast. Very clean washrooms too, a must-visit for families!"
            </p>
            <div className="testimonial-author">
              <img 
                src="/images/unsplash_1494790108377-be9c29b29330.jpg" 
                alt="Anjali S." 
                className="testimonial-avatar" 
              />
              <div className="testimonial-author-info">
                <span className="testimonial-name">Anjali S.</span>
                <span className="testimonial-role">Food & Travel Blogger</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              "Excellent service, quick takeaway options, and ample parking space. Stopping here has become a ritual for our weekend group rides. 10/10 recommended!"
            </p>
            <div className="testimonial-author">
              <img 
                src="/images/unsplash_1500648767791-00dcc994a43e.jpg" 
                alt="Rohan M." 
                className="testimonial-avatar" 
              />
              <div className="testimonial-author-info">
                <span className="testimonial-name">Rohan M.</span>
                <span className="testimonial-role">Weekend Biker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section (Hours, Address, Call) */}
      <section className="info-section">
        <div className="info-grid">
          <div className="info-block">
            <div className="info-icon">🕒</div>
            <h3>Opening Hours</h3>
            <p>Open Daily<br />5:00 AM - 11:00 PM</p>
          </div>
          <div className="info-block">
            <div className="info-icon">📍</div>
            <h3>Our Location</h3>
            <p>NH-16 Highway, Vijayawada-Guntur Route, Amaravati Region</p>
          </div>
          <div className="info-block">
            <div className="info-icon">📞</div>
            <h3>Call / Reservation</h3>
            <p>+91 98765 43210<br />support@amaravaticafe.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
