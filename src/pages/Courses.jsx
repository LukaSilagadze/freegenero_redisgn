import { BookOpenCheck } from 'lucide-react';
import { courses } from '../content';
import FeatureCard from '../components/FeatureCard';
import FinalCta from '../components/FinalCta';
import PageHero from '../components/PageHero';
import '../styles/pages/Courses/Courses.css';

function Courses() {
  return (
    <>
      <PageHero
        eyebrow="Courses"
        icon={BookOpenCheck}
        title="Practical courses for career confidence."
        copy="Freegenero courses combine short lessons, guided projects, professional insight, and reflection so teenagers can connect learning to real choices."
      />
      <section className="section page-section">
        <div className="card-grid three">
          {courses.map((course) => (
            <FeatureCard className="course-card" item={course} key={course.title} />
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}

export default Courses;
