import { navItems } from '../content';
import RouteLink from './RouteLink';

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div>
        <RouteLink className="brand footer-brand" to="/">
          <span className="brand-mark">F</span>
          <span>Freegenero</span>
        </RouteLink>
        <p>Career exploration, practical skills, and professional exposure for teenagers.</p>
      </div>
      <div className="footer-links">
        {navItems.map((item) => (
          <RouteLink key={item.to} to={item.to}>
            {item.label}
          </RouteLink>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
