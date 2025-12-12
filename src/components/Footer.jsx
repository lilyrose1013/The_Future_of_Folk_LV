import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
    setIsSubmitting(false);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section footer-about">
          <h3>The Future of Estonain Folk</h3>
          <p>How can we perserve historical, indiginous practices whilstill advancing with the rest of the world norms?</p>
        </div>
        
        <div className="footer-section footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/posts">Overview</Link></li>
            <li><Link to="/documentation">Documentation</Link></li>
            <li><Link to="/ideation">Ideation</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/sources">Sources</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-legal">
          <p>&copy; {currentYear} The Future of Estonian Folk Clothing.</p>
          
          </div>
        </div>
    </footer>
  );
}
