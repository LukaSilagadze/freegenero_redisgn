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
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/pages/Home/Home.css';

function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Programs />
      <Benefits />
      <FinalCta />
    </>
  );
}

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero section" id="top">
      <div className="hero-copy">
        <h1 className="hero-title">{t('home.heroTitle')}</h1>
        <p className="hero-lede">
          {t('home.heroCopy')}
        </p>
        <div className="hero-actions">
          <RouteLink className="button button-primary" to="/courses">
            {t('home.heroButton')}
            <ArrowRight size={18} />
          </RouteLink>
        </div>
        <div className="trust-row" aria-label="Freegenero highlights">
          <span>
            <CheckCircle2 size={17} />
            {t('home.trustTeen')}
          </span>
          <span>
            <CheckCircle2 size={17} />
            {t('home.trustParent')}
          </span>
          <span>
            <CheckCircle2 size={17} />
            {t('home.trustSchool')}
          </span>
        </div>
      </div>
      <div className="hero-visual" aria-label="Student career exploration dashboard">
        <div className="orbit-card card-career">
          <span className="mini-icon">
            <Lightbulb size={19} />
          </span>
          <strong>{t('home.careerMatch')}</strong>
          <p>{t('home.creativeTechnology')}</p>
        </div>
        <div className="workspace-card">
          <div className="workspace-top">
            <span className="avatar">A</span>
            <span className="avatar avatar-yellow">M</span>
            <span className="avatar avatar-blue">R</span>
            <span className="live-pill">{t('home.liveMentorRoom')}</span>
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
                <span>{t('home.idea')}</span>
                <span>{t('home.teams')}</span>
                <span>{t('home.money')}</span>
                <span>{t('home.tools')}</span>
              </div>
            </div>
          </div>
          <div className="mentor-note">
            <Mic2 size={18} />
            <span>{t('home.mentorNote')}</span>
          </div>
        </div>
        <div className="orbit-card card-skills">
          <strong>4.8/5</strong>
          <p>{t('home.confidenceScore')}</p>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const { t } = useLanguage();

  return (
    <section className="section problem-section">
      <div className="section-heading narrow">
        <p className="eyebrow">{t('home.problemEyebrow')}</p>
        <h2>{t('home.problemTitle')}</h2>
        <p>{t('home.problemCopy')}</p>
      </div>
      <div className="problem-grid">
        <article className="problem-card">
          <span>01</span>
          <h3>{t('home.problemOneTitle')}</h3>
          <p>{t('home.problemOneCopy')}</p>
        </article>
        <article className="problem-card">
          <span>02</span>
          <h3>{t('home.problemTwoTitle')}</h3>
          <p>{t('home.problemTwoCopy')}</p>
        </article>
        <article className="problem-card">
          <span>03</span>
          <h3>{t('home.problemThreeTitle')}</h3>
          <p>{t('home.problemThreeCopy')}</p>
        </article>
      </div>
    </section>
  );
}

function Solution() {
  const { t } = useLanguage();

  return (
    <section className="solution-section">
      <div className="solution-panel">
        <div>
          <p className="eyebrow light">{t('home.solutionEyebrow')}</p>
          <h2>{t('home.solutionTitle')}</h2>
        </div>
        <div className="solution-list">
          <p>
            <Handshake size={20} />
            {t('home.solutionOne')}
          </p>
          <p>
            <BookOpenCheck size={20} />
            {t('home.solutionTwo')}
          </p>
          <p>
            <UsersRound size={20} />
            {t('home.solutionThree')}
          </p>
        </div>
      </div>
    </section>
  );
}

function Programs() {
  const { t } = useLanguage();

  return (
    <section className="section" id="programs">
      <div className="section-heading">
        <p className="eyebrow">{t('home.programsEyebrow')}</p>
        <h2>{t('home.programsTitle')}</h2>
      </div>
      <div className="card-grid three">
        {programs.map((program) => (
          <FeatureCard item={program} key={program.titleKey}>
            <RouteLink to="/courses" className="text-link">
              {t('common.learnMore')}
              <ChevronRight size={16} />
            </RouteLink>
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

function Events() {
  const { t } = useLanguage();

  return (
    <section className="section events-section" id="events">
      <div className="split-heading">
        <div>
          <p className="eyebrow">{t('home.eventsEyebrow')}</p>
          <h2>{t('home.eventsTitle')}</h2>
        </div>
        <RouteLink className="button button-secondary" to="/contact">
          {t('home.viewCalendar')}
          <CalendarDays size={18} />
        </RouteLink>
      </div>
      <div className="event-list">
        {events.map((event) => (
          <article className="event-card" key={event.titleKey}>
            <div className="event-date">{t(event.dateKey)}</div>
            <div>
              <span>{t(event.typeKey)}</span>
              <h3>{t(event.titleKey)}</h3>
            </div>
            <ChevronRight className="event-arrow" size={22} />
          </article>
        ))}
      </div>
    </section>
  );
}

function Interviews() {
  const { t } = useLanguage();

  return (
    <section className="section interviews-section" id="interviews">
      <div className="podcast-card">
        <div className="podcast-art">
          <Headphones size={48} />
          <span />
          <span />
        </div>
        <div>
          <p className="eyebrow light">{t('home.interviewsEyebrow')}</p>
          <h2>{t('home.interviewsTitle')}</h2>
          <p>{t('home.interviewsCopy')}</p>
          <ul>
            {interviews.map((item) => (
              <li key={item}>
                <CheckCircle2 size={18} />
                {t(item)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const { t } = useLanguage();

  return (
    <section className="section" id="benefits">
      <div className="section-heading">
        <p className="eyebrow">{t('home.benefitsEyebrow')}</p>
        <h2>{t('home.benefitsTitle')}</h2>
      </div>
      <div className="card-grid three">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <article className="benefit-card" key={benefit.titleKey}>
              <Icon size={28} />
              <h3>{t(benefit.titleKey)}</h3>
              <p>{t(benefit.copyKey)}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Home;
