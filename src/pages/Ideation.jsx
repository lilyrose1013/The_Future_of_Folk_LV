import poster from '../images/poster.png';

export default function Contact() {
  return (
    <div className="contact-page page">
      <header className="page-header">
        <h1>Ideation, Brainstorming, Sketches</h1>
      </header>
      <div className="page-content">
        <div className="poster-container">
          <img src={poster} alt="Project Poster" className="poster-image" />
        </div>
      </div>
    </div>
  );
}
