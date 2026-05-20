import { Building2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/pages/AboutUs/AboutUs.css';

function AboutUs() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t('pages.aboutEyebrow')}
        icon={Building2}
        title={t('pages.aboutTitle')}
        copy={t('pages.aboutCopy')}
      />
      <section className="section about-layout">
        <div className="story-panel">
          <p className="eyebrow">{t('about.approach')}</p>
          <h2>{t('about.title')}</h2>
          <p>{t('about.copy')}</p>
        </div>
        <div className="value-list">
          <article>
            <h3>{t('about.trustworthyTitle')}</h3>
            <p>{t('about.trustworthyCopy')}</p>
          </article>
          <article>
            <h3>{t('about.practicalTitle')}</h3>
            <p>{t('about.practicalCopy')}</p>
          </article>
          <article>
            <h3>{t('about.optimisticTitle')}</h3>
            <p>{t('about.optimisticCopy')}</p>
          </article>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
