import { Link } from 'react-router-dom';
import kihnu from '../images/Kihnu.jpg';
import kloga from '../images/kloga.jpg';
import otp from '../images/otp.jpg';
import paistu from '../images/paistu.jpg';
import vormsi from '../images/vormsi.jpg';

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>The Future of Estonian Folk </h1>
        <h2>Process website of building Future Folk Clothiing</h2>
        <p className="hero-tagline">
        </p>
      </section>
      <section className="image-links">
        <h2>Explore Estonian Culture</h2>
        <div className="image-grid">
          <Link to="/posts" className="image-link">
            <img src={kihnu} alt="Kihnu" />
            <span className="image-label">Overview</span>
          </Link>
          <Link to="/about" className="image-link">
            <img src={kloga} alt="Kloga" />
            <span className="image-label">About</span>
          </Link>
          <Link to="/documentation" className="image-link">
            <img src={otp} alt="OTP" />
            <span className="image-label">Documentation</span>
          </Link>
          <Link to="/ideation" className="image-link">
            <img src={paistu} alt="Paistu" />
            <span className="image-label">Ideation</span>
          </Link>
          <Link to="/sources" className="image-link">
            <img src={vormsi} alt="Vormsi" />
            <span className="image-label">Sources</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
