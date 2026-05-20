import { BriefcaseBusiness, ChevronRight } from 'lucide-react';
import { roles } from '../content';
import PageHero from '../components/PageHero';
import RouteLink from '../components/RouteLink';
import '../styles/pages/Career/Career.css';

function Career() {
  return (
    <>
      <PageHero
        eyebrow="Career"
        icon={BriefcaseBusiness}
        title="Build career readiness with us."
        copy="Join a team focused on helping teenagers explore meaningful futures through practical learning and professional connection."
      />
      <section className="section page-section">
        <div className="role-list">
          {roles.map((role) => (
            <article className="event-card role-card" key={role.title}>
              <div className="event-date">Open</div>
              <div>
                <span>{role.type}</span>
                <h3>{role.title}</h3>
                <p>{role.copy}</p>
              </div>
              <RouteLink to="/contact" className="text-link">
                Apply
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
