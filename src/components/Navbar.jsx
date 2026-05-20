import { useState } from 'react';
import { Facebook, Instagram, Menu } from 'lucide-react';
import { navItems } from '../content';
import { useLanguage } from '../i18n/LanguageContext';
import whiteLogo from '../assets/white.png';
import RouteLink from './RouteLink';

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/freegenero',
    icon: Instagram,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61583660060389',
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
  const { language, setLanguage, t } = useLanguage();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <RouteLink className="brand" to="/" onNavigate={closeMenu} aria-label={t('common.brandHome')}>
        <img src={whiteLogo} alt="Freegenero logo" className="navbar-logo" />
      </RouteLink>
      <nav className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`} aria-label={t('common.primaryNavigation')}>
        {navItems.map((item) => (
          <RouteLink
            key={item.to}
            className={currentPath === item.to ? 'active' : ''}
            to={item.to}
            onNavigate={closeMenu}
          >
            {t(item.labelKey)}
          </RouteLink>
        ))}
      </nav>
      <div className="nav-actions">
        <div className="language-switcher" aria-label={t('common.languageSwitcher')} role="group">
          <button
            aria-pressed={language === 'en'}
            className={language === 'en' ? 'language-option active' : 'language-option'}
            onClick={() => setLanguage('en')}
            type="button"
          >
            EN
          </button>
          <button
            aria-pressed={language === 'ka'}
            className={language === 'ka' ? 'language-option active' : 'language-option'}
            onClick={() => setLanguage('ka')}
            type="button"
          >
            KA
          </button>
        </div>
        <div className="social-links" aria-label={t('common.socialMedia')}>
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
            href="https://www.tiktok.com/@freegenero_"
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
          aria-label={t('common.toggleNavigation')}
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
