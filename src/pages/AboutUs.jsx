import { Building2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import '../styles/pages/AboutUs/AboutUs.css';

function AboutUs() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        icon={Building2}
        title="We help teenagers see more possible futures."
        copy="Freegenero is an educational startup built for students, parents, and schools that want career readiness to feel practical, inspiring, and safe."
      />
      <section className="section about-layout">
        <div className="story-panel">
          <p className="eyebrow">Our approach</p>
          <h2>Exposure first, pressure later.</h2>
          <p>
            Teenagers do not need to have everything figured out. They need structured
            opportunities to explore options, practice useful skills, and meet people
            who can explain how work really happens.
          </p>
        </div>
        <div className="value-list">
          <article>
            <h3>Trustworthy</h3>
            <p>Designed with age-appropriate guidance for families, schools, and students.</p>
          </article>
          <article>
            <h3>Practical</h3>
            <p>Every program connects ideas to projects, conversations, or real-world decisions.</p>
          </article>
          <article>
            <h3>Optimistic</h3>
            <p>Students are encouraged to explore strengths without being locked into one path.</p>
          </article>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
