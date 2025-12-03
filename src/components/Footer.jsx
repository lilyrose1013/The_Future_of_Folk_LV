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
          <h3>Folk Lab</h3>
          <p>Exploring the intersection of traditional folk practices and modern innovation. Building bridges between past and present through community, creativity, and cultural preservation.</p>
        </div>
        
        <div className="footer-section footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/docs">Documentation</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section footer-community">
          <h4>Community</h4>
          <ul>
            <li><a href="#">Join Our Newsletter</a></li>
            <li><a href="#">Discussion Forum</a></li>
            <li><a href="#">Events & Workshops</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Contributors</a></li>
          </ul>
        </div>
        
        <div className="footer-section footer-social">
          <h4>Connect With Us</h4>
          <ul className="social-links">
            <li><a href="#" aria-label="Twitter">Twitter</a></li>
            <li><a href="#" aria-label="Instagram">Instagram</a></li>
            <li><a href="#" aria-label="GitHub">GitHub</a></li>
            <li><a href="#" aria-label="YouTube">YouTube</a></li>
          </ul>
          <div className="newsletter-signup">
            <p>Stay updated with our latest stories</p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Your email" 
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                required
              />
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-legal">
          <p>&copy; {currentYear} Folk Lab. All rights reserved.</p>
          <div className="footer-legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="separator">•</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
