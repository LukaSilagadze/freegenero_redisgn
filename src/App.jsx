import React from 'react';
import {
  ArrowRight,
  BookOpenCheck,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Handshake,
  Headphones,
  Lightbulb,
  Map,
  Menu,
  Mic2,
  Play,
  School,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import './App.css';

const programs = [
  {
    title: 'Career Discovery Lab',
    detail: 'Explore future paths through guided projects, mentor stories, and reflection prompts.',
    meta: 'Ages 13-17',
    icon: Map,
  },
  {
    title: 'Real-World Skills Sprint',
    detail: 'Practice communication, money basics, digital tools, teamwork, and problem solving.',
    meta: '6-week track',
    icon: BookOpenCheck,
  },
  {
    title: 'Future Builder Portfolio',
    detail: 'Turn learning into a visible portfolio students can share with parents and schools.',
    meta: 'Project-based',
    icon: BriefcaseBusiness,
  },
];

const events = [
  {
    date: 'Jun 12',
    title: 'Design Your First Career Map',
    type: 'Online workshop',
  },
  {
    date: 'Jun 20',
    title: 'Ask a Product Designer',
    type: 'Live professional Q&A',
  },
  {
    date: 'Jul 03',
    title: 'Money Skills for Teenagers',
    type: 'Practical skills session',
  },
];

const interviews = [
  'How a software engineer thinks through hard problems',
  'What healthcare careers look like beyond becoming a doctor',
  'From school project to startup idea: a founder conversation',
];

const benefits = [
  {
    title: 'Students',
    copy: 'Build confidence, discover strengths, and learn skills that make school feel connected to real life.',
    icon: GraduationCap,
  },
  {
    title: 'Parents',
    copy: 'See structured progress, age-appropriate guidance, and clearer conversations about future choices.',
    icon: ShieldCheck,
  },
  {
    title: 'Schools & Partners',
    copy: 'Bring career readiness, professional exposure, and practical learning into student communities.',
    icon: School,
  },
];

function App() {
  return (
    <main className="site-shell">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Programs />
      <Events />
      <Interviews />
      <Benefits />
      <FinalCta />
      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#top" aria-label="Freegenero home">
        <span className="brand-mark">F</span>
        <span>Freegenero</span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#programs">Programs</a>
        <a href="#events">Events</a>
        <a href="#interviews">Interviews</a>
        <a href="#benefits">Benefits</a>
      </nav>
      <div className="nav-actions">
        <a className="nav-login" href="#footer">For schools</a>
        <a className="button button-small button-primary" href="#cta">
          Start exploring
        </a>
        <button className="menu-button" aria-label="Open navigation menu">
          <Menu size={20} />
        </button>
      </div>
    </header>
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
        <h1>
          Help teens find direction before they have to choose a path.
        </h1>
        <p className="hero-lede">
          Freegenero helps students explore careers, learn practical skills, and
          connect with professionals through guided programs built for real life.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#programs">
            Explore programs
            <ArrowRight size={18} />
          </a>
          <a className="button button-secondary" href="#interviews">
            Watch interviews
            <Play size={17} />
          </a>
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
        {programs.map((program) => {
          const Icon = program.icon;
          return (
            <article className="feature-card" key={program.title}>
              <span className="icon-badge">
                <Icon size={22} />
              </span>
              <span className="meta">{program.meta}</span>
              <h3>{program.title}</h3>
              <p>{program.detail}</p>
              <a href="#cta" className="text-link">
                Learn more
                <ChevronRight size={16} />
              </a>
            </article>
          );
        })}
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
        <a className="button button-secondary" href="#cta">
          View calendar
          <CalendarDays size={18} />
        </a>
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

function FinalCta() {
  return (
    <section className="section final-cta" id="cta">
      <div>
        <p className="eyebrow light">Start with direction</p>
        <h2>Give teenagers a clearer way to explore what comes next.</h2>
      </div>
      <a className="button button-light" href="mailto:hello@freegenero.com">
        Contact Freegenero
        <ArrowRight size={18} />
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">F</span>
          <span>Freegenero</span>
        </a>
        <p>Career exploration, practical skills, and professional exposure for teenagers.</p>
      </div>
      <div className="footer-links">
        <a href="#programs">Programs</a>
        <a href="#events">Events</a>
        <a href="#interviews">Interviews</a>
        <a href="#benefits">Partners</a>
      </div>
    </footer>
  );
}

export default App;
