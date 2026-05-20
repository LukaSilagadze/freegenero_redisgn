import { BookOpenCheck } from 'lucide-react';
import { courses } from '../content';
import FeatureCard from '../components/FeatureCard';
import FinalCta from '../components/FinalCta';
import PageHero from '../components/PageHero';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/pages/Courses/Courses.css';

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
      <section className="section page-section">
        <div className="card-grid three">
          {courses.map((course) => (
            <FeatureCard className="course-card" item={course} key={course.titleKey} />
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}

export default Courses;
