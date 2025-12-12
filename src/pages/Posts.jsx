import finalImage from '../images/final.png';
import valgustamePDF from '../Documents/Valgustame Isamaa - Copy.pdf';

export default function Posts() {
  return (
    <div className="posts-page page">
      <header className="page-header">
        <h1>Overview</h1>
      </header>
      <div className="page-content">
        <img src={finalImage} alt="Final Overview" className="overview-image" />
        <p className="image-caption" style={{fontStyle: 'italic', textAlign: 'center', marginTop: '10px', marginBottom: '30px'}}>
          ValgustameIsamaa (light up the fatherland), LED on cotton and embroidery thread vest and skirt, Lily Vosari, December 2025
        </p>
        
        <div className="pdf-section">
          <h2>Project Documentation</h2>
          <a href={valgustamePDF} download className="pdf-link" style={{display: 'inline-block', marginBottom: '20px', padding: '10px 20px', background: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px'}}>
            Download PDF
          </a>
          <div className="pdf-embed" style={{width: '100%', height: '800px', border: '1px solid #ddd'}}>
            <object 
              data={valgustamePDF}
              type="application/pdf"
              width="100%"
              height="100%"
            >
              <iframe 
                src={`${valgustamePDF}#toolbar=1&navpanes=1&scrollbar=1`}
                width="100%" 
                height="100%"
                title="Valgustame Isamaa Documentation"
              >
                <p>Your browser does not support PDFs. <a href={valgustamePDF}>Download the PDF</a> to view it.</p>
              </iframe>
            </object>
          </div>
        </div>
      </div>
    </div>
  );
}
