import { ChevronRight, Newspaper } from 'lucide-react';
import { newsItems } from '../content';
import PageHero from '../components/PageHero';

function News() {
  return (
    <>
      <PageHero
        eyebrow="News"
        icon={Newspaper}
        title="Updates, interviews, and career-readiness ideas."
        copy="Follow Freegenero stories from programs, professional interviews, school partnerships, and student skill-building."
      />
      <section className="section page-section">
        <div className="news-grid">
          {newsItems.map((item) => (
            <article className="news-card" key={item.title}>
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <a className="text-link" href="mailto:hello@freegenero.com">
                Request article
                <ChevronRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default News;
