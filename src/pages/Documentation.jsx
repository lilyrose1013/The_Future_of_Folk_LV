import image1 from '../Documentation Images/1.png';
import image2 from '../Documentation Images/2.png';
import image3 from '../Documentation Images/3.png';
import image4 from '../Documentation Images/4.png';
import image5 from '../Documentation Images/5.png';

export default function Docs() {
  return (
    <div className="docs-page page">
      <header className="page-header">
        <h1>Documentation</h1>
      </header>
      <div className="page-content">
        <div className="documentation-gallery">
          <img src={image1} alt="Documentation 1" className="doc-image" />
          <img src={image2} alt="Documentation 2" className="doc-image" />
          <img src={image3} alt="Documentation 3" className="doc-image" />
          <img src={image4} alt="Documentation 4" className="doc-image" />
          <img src={image5} alt="Documentation 5" className="doc-image" />
        </div>
      </div>
    </div>
  );
}
