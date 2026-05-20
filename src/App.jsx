import { useEffect, useMemo, useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import News from './pages/News';
import './App.css';

const routes = {
  '/': Home,
  '/courses': Courses,
  '/about': AboutUs,
  '/news': News,
  '/gallery': Gallery,
  '/career': Career,
  '/contact': Contact,
};

const normalizeRoute = (route) => {
  if (!route || route === '#') return '/';

  const cleanRoute = route.replace(/^#/, '').replace(/\/$/, '');
  return cleanRoute === '' ? '/' : cleanRoute;
};

const getHashRoute = () => normalizeRoute(window.location.hash || '#/');

function App() {
  const [currentPath, setCurrentPath] = useState(getHashRoute);

  useEffect(() => {
    if (!window.location.hash) {
      const pathRoute = normalizeRoute(window.location.pathname);
      const initialRoute = routes[pathRoute] ? pathRoute : '/';
      window.history.replaceState(null, '', `#${initialRoute}`);
      setCurrentPath(initialRoute);
    }

    const handleHashChange = () => {
      const nextPath = getHashRoute();
      setCurrentPath(routes[nextPath] ? nextPath : '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const Page = useMemo(() => routes[currentPath] || Home, [currentPath]);

  return (
    <main className="site-shell">
      <Navbar currentPath={routes[currentPath] ? currentPath : '/'} />
      <Page />
      <Footer />
    </main>
  );
}

export default App;
