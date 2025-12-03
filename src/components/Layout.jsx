import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="app">
      <Nav />
      <main className="main-content" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
