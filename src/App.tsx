import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NewsTicker from './components/NewsTicker';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import HomePage from './HomePage';
import DetailPage from './DetailPage';
import BlogPostPage from './BlogPostPage';
import BlogPage from './BlogPage';
import CruiseLinePage from './CruiseLinePage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-ocean-deep selection:bg-gold selection:text-ocean-deep flex flex-col pb-10">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/:type/:id" element={<DetailPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/cruise-line/:id" element={<CruiseLinePage />} />
          </Routes>
        </div>
        <Footer />
        <NewsTicker />
        <BackToTop />
      </div>
    </Router>
  );
}
