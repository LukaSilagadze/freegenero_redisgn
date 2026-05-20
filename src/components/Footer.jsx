import { useLanguage } from '../i18n/LanguageContext';
import whiteLogo from '../assets/white.png';
import RouteLink from './RouteLink';

const footerSections = [
  {
    titleKey: 'footer.studyTitle',
    links: [
      { labelKey: 'nav.courses', to: '/courses' },
      { labelKey: 'nav.news', to: '/news' },
      { labelKey: 'nav.gallery', to: '/gallery' },
    ],
  },
  {
    titleKey: 'footer.companyTitle',
    links: [
      { labelKey: 'nav.about', to: '/about' },
      { labelKey: 'nav.contact', to: '/contact' },
      { labelKey: 'nav.career', to: '/career' },
    ],
  },
];

const legalLinks = [
  { labelKey: 'footer.privacy', href: '#/legal/privacy' },
  { labelKey: 'footer.terms', href: '#/legal/terms' },
  { labelKey: 'footer.cookies', href: '#/legal/cookies' },
];

const footerLabels = {
  en: {
    studyTitle: 'Study',
    companyTitle: 'Company',
    legalTitle: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    cookies: 'Cookie Policy',
    rights: '© {year} Freegenero. All rights reserved.',
  },
  ka: {
    studyTitle: 'სწავლა',
    companyTitle: 'კომპანია',
    legalTitle: 'სამართლებრივი',
    privacy: 'კონფიდენციალურობის პოლიტიკა',
    terms: 'მომსახურების პირობები',
    cookies: 'ქუქიების პოლიტიკა',
    rights: '© {year} Freegenero. ყველა უფლება დაცულია.',
  },
};

function Footer() {
  const { language, t } = useLanguage();
  const year = new Date().getFullYear();
  const footerText = footerLabels[language] || footerLabels.en;
  const getFooterLabel = (key) => footerText[key.replace('footer.', '')] || t(key);

  return (
    <footer className="footer-shell" id="footer">
      <div className="footer">
        <div className="footer-brand-block">
          <RouteLink className="brand footer-brand" to="/">
            <span className="footer-logo-surface">
              <img src={whiteLogo} alt="Freegenero logo" className="navbar-logo" />
            </span>
          </RouteLink>
          <p>{t('footer.copy')}</p>
        </div>

        <div className="footer-nav">
          {footerSections.map((section) => (
            <div className="footer-column" key={section.titleKey}>
              <h3>{getFooterLabel(section.titleKey)}</h3>
              <div className="footer-links">
                {section.links.map((item) => (
                  <RouteLink key={item.to} to={item.to}>
                    {t(item.labelKey)}
                  </RouteLink>
                ))}
              </div>
            </div>
          ))}

          <div className="footer-column">
            <h3>{getFooterLabel('footer.legalTitle')}</h3>
            <div className="footer-links">
              {legalLinks.map((item) => (
                <a href={item.href} key={item.labelKey}>
                  {getFooterLabel(item.labelKey)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{getFooterLabel('footer.rights').replace('{year}', year)}</span>
          <a href="#/legal/terms">{getFooterLabel('footer.terms')}</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
