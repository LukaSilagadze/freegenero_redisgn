import { BriefcaseBusiness, ChevronRight } from 'lucide-react';
import { roles } from '../content';
import PageHero from '../components/PageHero';
import RouteLink from '../components/RouteLink';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/pages/Career/Career.css';

function Career() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t('pages.careerEyebrow')}
        icon={BriefcaseBusiness}
        title={t('pages.careerTitle')}
        copy={t('pages.careerCopy')}
      />
      <section className="section page-section">
        <div className="role-list">
          {roles.map((role) => (
            <article className="event-card role-card" key={role.titleKey}>
              <div className="event-date">{t('roles.open')}</div>
              <div>
                <span>{t(role.typeKey)}</span>
                <h3>{t(role.titleKey)}</h3>
                <p>{t(role.copyKey)}</p>
              </div>
              <RouteLink to="/contact" className="text-link">
                {t('common.apply')}
                <ChevronRight size={16} />
              </RouteLink>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Career;
