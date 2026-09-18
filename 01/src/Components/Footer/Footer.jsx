import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Animated bubbles in background */}
      <div className="footer-bubbles">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bubble" />
        ))}
      </div>
      
      <div className="footer-content">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>BUNK BUDDIES</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 1.5rem' }}>
            Your trusted platform for finding the perfect hostel experience. 
            We connect students with quality accommodations across the country.
          </p>
        </motion.div>

        <div className="footer-links">
          <motion.div 
            className="footer-link-group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3>Explore</h3>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/login" className="nav-link">Login</Link>
          </motion.div>

          <motion.div 
            className="footer-link-group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Support</h3>
            <button type="button" className="nav-link">Help Center</button>
            <button type="button" className="nav-link">Safety Information</button>
            <button type="button" className="nav-link">Cancellation Options</button>
            <button type="button" className="nav-link">Report an Issue</button>
          </motion.div>

          <motion.div 
            className="footer-link-group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Legal</h3>
            <button type="button" className="nav-link">Privacy Policy</button>
            <button type="button" className="nav-link">Terms of Service</button>
            <button type="button" className="nav-link">Cookie Policy</button>
            <button type="button" className="nav-link">Accessibility</button>
          </motion.div>

          <motion.div 
            className="footer-link-group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Hostel Owners</h3>
            <button type="button" className="nav-link">List Your Property</button>
            <button type="button" className="nav-link">Host Resources</button>
            <button type="button" className="nav-link">Community Forum</button>
            <button type="button" className="nav-link">Hosting Tips</button>
          </motion.div>
        </div>

        <div className="footer-divider" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 style={{ marginBottom: '1rem' }}>Subscribe US</h3>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="newsletter-input" 
              required 
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </motion.div>

        <div className="social-links">
          <motion.a
            href="https://www.instagram.com/bhavishya__singh__/?hl=en"
            className="social-icon_i"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <FaInstagram size={20} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/bhavishya-singh-masand-2874b022b"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon_l"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            viewport={{ once: true }}
          >
              <FaLinkedinIn size={20} />
            </motion.a>
        </div>

        <div className="copyright">
          &copy; {new Date().getFullYear()} BUNK BUDDIES. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
