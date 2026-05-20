import { ArrowRight } from 'lucide-react';
import RouteLink from './RouteLink';

function FinalCta() {
  return (
    <section className="section final-cta" id="cta">
      <div>
        <p className="eyebrow light">Start with direction</p>
        <h2>Give teenagers a clearer way to explore what comes next.</h2>
      </div>
      <RouteLink className="button button-light" to="/contact">
        Contact Freegenero
        <ArrowRight size={18} />
      </RouteLink>
    </section>
  );
}

export default FinalCta;
