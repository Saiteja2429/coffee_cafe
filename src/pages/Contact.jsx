import { useState, useEffect } from "react";

function Contact() {
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
    <div className="container">
      <h1 className="bold-black-heading">Contact Us</h1>

      <p>📞 +91 1234567890</p>
      <p>📧 amaravaticafe@gmail.com</p>
      <p>📍 Vijayawada Highway, Andhra Pradesh</p>
    </div>
  );
}

export default Contact;
