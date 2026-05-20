import { useState } from 'react';
import { Menu } from 'lucide-react';
import { navItems } from '../content';
import RouteLink from './RouteLink';

function Navbar({ currentPath }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <RouteLink className="brand" to="/" onNavigate={closeMenu} aria-label="Freegenero home">
        <span className="brand-mark">F</span>
        <span>Freegenero</span>
      </RouteLink>
      <nav className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`} aria-label="Primary navigation">
        {navItems.map((item) => (
          <RouteLink
            key={item.to}
            className={currentPath === item.to ? 'active' : ''}
            to={item.to}
            onNavigate={closeMenu}
          >
            {item.label}
          </RouteLink>
        ))}
      </nav>
      <div className="nav-actions">
        <RouteLink className="nav-login" to="/contact" onNavigate={closeMenu}>
          For schools
        </RouteLink>
        <RouteLink className="button button-small button-primary" to="/courses" onNavigate={closeMenu}>
          Start exploring
        </RouteLink>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
