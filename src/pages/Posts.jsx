import finalImage from '../images/final.png';

export default function Posts() {
  return (
    <div className="posts-page page">
      <header className="page-header">
        <h1>Overview</h1>
      </header>
      <div className="page-content">
        <img src={finalImage} alt="Final Overview" className="overview-image" />
      </div>
    </div>
  );
}
