import { useState } from 'react';
import { Facebook, Instagram, Menu } from 'lucide-react';
import { navItems } from '../content';
import RouteLink from './RouteLink';

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/freegenero',
    icon: Instagram,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/freegenero',
    icon: Facebook,
  },
];

function TikTokIcon({ size = 18 }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.6 4.5c.7 2 2.1 3.3 4.1 3.6v3.2a7.6 7.6 0 0 1-4.1-1.2v5.7c0 3.1-2.2 5.2-5.4 5.2-3 0-5.1-2-5.1-4.8 0-2.9 2.2-4.9 5.2-4.9.4 0 .8 0 1.1.1v3.2c-.3-.1-.7-.2-1.1-.2-1.2 0-2.1.7-2.1 1.8 0 1 .8 1.7 1.9 1.7 1.3 0 2.1-.8 2.1-2.4v-11h3.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

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
        <div className="social-links" aria-label="Freegenero social media">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                aria-label={item.label}
                className="social-button"
                href={item.href}
                key={item.label}
                rel="noreferrer"
                target="_blank"
                title={item.label}
              >
                <Icon size={18} />
              </a>
            );
          })}
          <a
            aria-label="TikTok"
            className="social-button"
            href="https://www.tiktok.com/@freegenero"
            rel="noreferrer"
            target="_blank"
            title="TikTok"
          >
            <TikTokIcon />
          </a>
        </div>
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
