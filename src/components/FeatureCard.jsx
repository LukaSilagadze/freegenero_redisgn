import { useLanguage } from '../i18n/LanguageContext';

function FeatureCard({ item, className = '', children }) {
  const Icon = item.icon;
  const { t } = useLanguage();

  return (
    <article className={`feature-card ${className}`.trim()}>
      <span className="icon-badge">
        <Icon size={22} />
      </span>
      <span className="meta">{t(item.metaKey)}</span>
      <h3>{t(item.titleKey)}</h3>
      <p>{t(item.detailKey)}</p>
      {children}
    </article>
  );
}

export default FeatureCard;
