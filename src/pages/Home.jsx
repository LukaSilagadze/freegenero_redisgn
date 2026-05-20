import {
  ArrowRight,
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Handshake,
  Headphones,
  Lightbulb,
  Mic2,
  Play,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import { benefits, events, interviews, programs } from '../content';
import FeatureCard from '../components/FeatureCard';
import FinalCta from '../components/FinalCta';
import RouteLink from '../components/RouteLink';

function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Programs />
      <Events />
      <Interviews />
      <Benefits />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">
          <Sparkles size={16} />
          Career discovery for teenagers
        </p>
        <h1>Help teens find direction before they have to choose a path.</h1>
        <p className="hero-lede">
          Freegenero helps students explore careers, learn practical skills, and
          connect with professionals through guided programs built for real life.
        </p>
        <div className="hero-actions">
          <RouteLink className="button button-primary" to="/courses">
            Explore courses
            <ArrowRight size={18} />
          </RouteLink>
          <RouteLink className="button button-secondary" to="/news">
            Read stories
            <Play size={17} />
          </RouteLink>
        </div>
        <div className="trust-row" aria-label="Freegenero highlights">
          <span>
            <CheckCircle2 size={17} />
            Teen-friendly
          </span>
          <span>
            <CheckCircle2 size={17} />
            Parent-trusted
          </span>
          <span>
            <CheckCircle2 size={17} />
            School-ready
          </span>
        </div>
      </div>
      <div className="hero-visual" aria-label="Student career exploration dashboard">
        <div className="orbit-card card-career">
          <span className="mini-icon">
            <Lightbulb size={19} />
          </span>
          <strong>Career match</strong>
          <p>Creative technology</p>
        </div>
        <div className="workspace-card">
          <div className="workspace-top">
            <span className="avatar">A</span>
            <span className="avatar avatar-yellow">M</span>
            <span className="avatar avatar-blue">R</span>
            <span className="live-pill">Live mentor room</span>
          </div>
          <div className="screen">
            <div className="screen-sidebar">
              <span />
              <span />
              <span />
            </div>
            <div className="screen-content">
              <div className="chart-line" />
              <div className="skill-grid">
                <span>Ideas</span>
                <span>Teams</span>
                <span>Money</span>
                <span>Tools</span>
              </div>
            </div>
          </div>
          <div className="mentor-note">
            <Mic2 size={18} />
            <span>Ask a professional how the work really feels.</span>
          </div>
        </div>
        <div className="orbit-card card-skills">
          <strong>4.8/5</strong>
          <p>student confidence score</p>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="section problem-section">
      <div className="section-heading narrow">
        <p className="eyebrow">The problem</p>
        <h2>Teenagers are asked to plan a future they have barely seen.</h2>
        <p>
          Career advice often arrives too late, feels too abstract, or focuses
          only on grades. Students need earlier exposure to real people, real
          skills, and real choices.
        </p>
      </div>
      <div className="problem-grid">
        <article className="problem-card">
          <span>01</span>
          <h3>Unclear options</h3>
          <p>Students know a few familiar careers, but not the range of modern paths available.</p>
        </article>
        <article className="problem-card">
          <span>02</span>
          <h3>Skills feel disconnected</h3>
          <p>Schoolwork can feel separate from communication, finance, digital work, and leadership.</p>
        </article>
        <article className="problem-card">
          <span>03</span>
          <h3>Limited professional access</h3>
          <p>Many teens do not have a safe, structured way to learn from working professionals.</p>
        </article>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section className="section solution-section">
      <div className="solution-panel">
        <div>
          <p className="eyebrow light">What Freegenero does</p>
          <h2>A guided bridge between school, skills, and the world of work.</h2>
        </div>
        <div className="solution-list">
          <p>
            <Handshake size={20} />
            Connect students with professionals through interviews, events, and mentor-led sessions.
          </p>
          <p>
            <BookOpenCheck size={20} />
            Build practical skills with short projects teenagers can actually use.
          </p>
          <p>
            <UsersRound size={20} />
            Give parents and schools a clear, structured way to support future readiness.
          </p>
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section className="section" id="programs">
      <div className="section-heading">
        <p className="eyebrow">Courses & programs</p>
        <h2>Practical learning tracks built around exploration.</h2>
      </div>
      <div className="card-grid three">
        {programs.map((program) => (
          <FeatureCard item={program} key={program.title}>
            <RouteLink to="/courses" className="text-link">
              Learn more
              <ChevronRight size={16} />
            </RouteLink>
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

function Events() {
  return (
    <section className="section events-section" id="events">
      <div className="split-heading">
        <div>
          <p className="eyebrow">Events & workshops</p>
          <h2>Live sessions that turn curiosity into momentum.</h2>
        </div>
        <RouteLink className="button button-secondary" to="/contact">
          View calendar
          <CalendarDays size={18} />
        </RouteLink>
      </div>
      <div className="event-list">
        {events.map((event) => (
          <article className="event-card" key={event.title}>
            <div className="event-date">{event.date}</div>
            <div>
              <span>{event.type}</span>
              <h3>{event.title}</h3>
            </div>
            <ChevronRight className="event-arrow" size={22} />
          </article>
        ))}
      </div>
    </section>
  );
}

function Interviews() {
  return (
    <section className="section interviews-section" id="interviews">
      <div className="podcast-card">
        <div className="podcast-art">
          <Headphones size={48} />
          <span />
          <span />
        </div>
        <div>
          <p className="eyebrow light">Professional interviews</p>
          <h2>Hear directly from people doing the work.</h2>
          <p>
            Short podcast-style conversations help teenagers understand what
            different careers look like day to day, not just on paper.
          </p>
          <ul>
            {interviews.map((item) => (
              <li key={item}>
                <CheckCircle2 size={18} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="section" id="benefits">
      <div className="section-heading">
        <p className="eyebrow">Benefits</p>
        <h2>Designed for the whole support system around a teenager.</h2>
      </div>
      <div className="card-grid three">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <article className="benefit-card" key={benefit.title}>
              <Icon size={28} />
              <h3>{benefit.title}</h3>
              <p>{benefit.copy}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Home;
