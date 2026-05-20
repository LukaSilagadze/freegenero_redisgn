import { BookOpenCheck, ChevronDown } from 'lucide-react';
import { courses } from '../content';
import FinalCta from '../components/FinalCta';
import PageHero from '../components/PageHero';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/pages/Courses/Courses.css';

const courseCardDetails = [
  {
    backgroundClass: 'course-image-slot-1',
    durationKey: 'courseCards.careerLab.duration',
    includesKeys: [
      'courseCards.careerLab.includeOne',
      'courseCards.careerLab.includeTwo',
      'courseCards.careerLab.includeThree',
    ],
    priceKey: 'courseCards.careerLab.price',
  },
  {
    backgroundClass: 'course-image-slot-2',
    durationKey: 'courseCards.communication.duration',
    includesKeys: [
      'courseCards.communication.includeOne',
      'courseCards.communication.includeTwo',
      'courseCards.communication.includeThree',
    ],
    priceKey: 'courseCards.communication.price',
  },
  {
    backgroundClass: 'course-image-slot-3',
    durationKey: 'courseCards.money.duration',
    includesKeys: [
      'courseCards.money.includeOne',
      'courseCards.money.includeTwo',
      'courseCards.money.includeThree',
    ],
    priceKey: 'courseCards.money.price',
  },
  {
    backgroundClass: 'course-image-slot-4',
    durationKey: 'courseCards.digital.duration',
    includesKeys: [
      'courseCards.digital.includeOne',
      'courseCards.digital.includeTwo',
      'courseCards.digital.includeThree',
    ],
    priceKey: 'courseCards.digital.price',
  },
  {
    backgroundClass: 'course-image-slot-5',
    durationKey: 'courseCards.portfolio.duration',
    includesKeys: [
      'courseCards.portfolio.includeOne',
      'courseCards.portfolio.includeTwo',
      'courseCards.portfolio.includeThree',
    ],
    priceKey: 'courseCards.portfolio.price',
  },
  {
    backgroundClass: 'course-image-slot-6',
    durationKey: 'courseCards.interviewStudio.duration',
    includesKeys: [
      'courseCards.interviewStudio.includeOne',
      'courseCards.interviewStudio.includeTwo',
      'courseCards.interviewStudio.includeThree',
    ],
    priceKey: 'courseCards.interviewStudio.price',
  },
];

function Courses() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t('pages.coursesEyebrow')}
        icon={BookOpenCheck}
        title={t('pages.coursesTitle')}
        copy={t('pages.coursesCopy')}
      />
      <section className="section page-section courses-showcase">
        <div className="course-card-grid">
          {courses.map((course, index) => (
            <CourseImageCard
              course={course}
              details={courseCardDetails[index]}
              key={course.titleKey}
            />
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}

function CourseImageCard({ course, details }) {
  const { t } = useLanguage();

  return (
    <article className={`course-image-card ${details.backgroundClass}`} tabIndex="0">
      <div className="course-image-overlay" />
      <div className="course-title-wrap">
        <span className="course-tag">{t(course.metaKey)}</span>
        <h2>{t(course.titleKey)}</h2>
      </div>
      <div className="course-glass-panel">
        <div className="course-glass-handle">
          <span>{t('courseCards.detailsTitle')}</span>
          <ChevronDown size={24} />
        </div>
        <div className="course-glass-content">
          <p>{t(course.detailKey)}</p>
          <dl>
            <div>
              <dt>{t('courseCards.durationLabel')}</dt>
              <dd>{t(details.durationKey)}</dd>
            </div>
            <div>
              <dt>{t('courseCards.includesLabel')}</dt>
              <dd>
                {details.includesKeys.map((key) => (
                  <span key={key}>{t(key)}</span>
                ))}
              </dd>
            </div>
            <div>
              <dt>{t('courseCards.priceLabel')}</dt>
              <dd>{t(details.priceKey)}</dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  );
}

export default Courses;
