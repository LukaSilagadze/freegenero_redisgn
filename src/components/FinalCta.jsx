import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import RouteLink from './RouteLink';

function FinalCta() {
  const { t } = useLanguage();

  return (
    <section className="section final-cta" id="cta">
      <div>
        <p className="eyebrow light">{t('finalCta.eyebrow')}</p>
        <h2>{t('finalCta.title')}</h2>
      </div>
      <RouteLink className="button button-light" to="/contact">
        {t('finalCta.button')}
        <ArrowRight size={18} />
      </RouteLink>
    </section>
  );
}

export default FinalCta;
