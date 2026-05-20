import {
  BookOpenCheck,
  BriefcaseBusiness,
  Compass,
  GraduationCap,
  Map,
  Mic2,
  School,
  ShieldCheck,
  Target,
  UsersRound,
} from 'lucide-react';

export const navItems = [
  { labelKey: 'nav.home', to: '/' },
  { labelKey: 'nav.courses', to: '/courses' },
  { labelKey: 'nav.about', to: '/about' },
  { labelKey: 'nav.news', to: '/news' },
  { labelKey: 'nav.gallery', to: '/gallery' },
  { labelKey: 'nav.career', to: '/career' },
  { labelKey: 'nav.contact', to: '/contact' },
];

export const programs = [
  {
    titleKey: 'programs.careerLab.title',
    detailKey: 'programs.careerLab.detail',
    metaKey: 'programs.careerLab.meta',
    icon: Map,
  },
  {
    titleKey: 'programs.skillsSprint.title',
    detailKey: 'programs.skillsSprint.detail',
    metaKey: 'programs.skillsSprint.meta',
    icon: BookOpenCheck,
  },
  {
    titleKey: 'programs.portfolio.title',
    detailKey: 'programs.portfolio.detail',
    metaKey: 'programs.portfolio.meta',
    icon: BriefcaseBusiness,
  },
];

export const courses = [
  {
    titleKey: 'courses.careerLab.title',
    metaKey: 'courses.careerLab.meta',
    detailKey: 'courses.careerLab.detail',
    icon: Compass,
  },
  {
    titleKey: 'courses.communication.title',
    metaKey: 'courses.communication.meta',
    detailKey: 'courses.communication.detail',
    icon: UsersRound,
  },
  {
    titleKey: 'courses.money.title',
    metaKey: 'courses.money.meta',
    detailKey: 'courses.money.detail',
    icon: Target,
  },
  {
    titleKey: 'courses.digital.title',
    metaKey: 'courses.digital.meta',
    detailKey: 'courses.digital.detail',
    icon: BriefcaseBusiness,
  },
  {
    titleKey: 'courses.portfolio.title',
    metaKey: 'courses.portfolio.meta',
    detailKey: 'courses.portfolio.detail',
    icon: BookOpenCheck,
  },
  {
    titleKey: 'courses.interviewStudio.title',
    metaKey: 'courses.interviewStudio.meta',
    detailKey: 'courses.interviewStudio.detail',
    icon: Mic2,
  },
];

export const events = [
  {
    dateKey: 'events.map.date',
    titleKey: 'events.map.title',
    typeKey: 'events.map.type',
  },
  {
    dateKey: 'events.designer.date',
    titleKey: 'events.designer.title',
    typeKey: 'events.designer.type',
  },
  {
    dateKey: 'events.money.date',
    titleKey: 'events.money.title',
    typeKey: 'events.money.type',
  },
];

export const interviews = [
  'interviews.engineer',
  'interviews.healthcare',
  'interviews.founder',
];

export const benefits = [
  {
    titleKey: 'benefits.students.title',
    copyKey: 'benefits.students.copy',
    icon: GraduationCap,
  },
  {
    titleKey: 'benefits.parents.title',
    copyKey: 'benefits.parents.copy',
    icon: ShieldCheck,
  },
  {
    titleKey: 'benefits.partners.title',
    copyKey: 'benefits.partners.copy',
    icon: School,
  },
];

export const newsItems = [
  {
    tagKey: 'news.launch.tag',
    titleKey: 'news.launch.title',
    copyKey: 'news.launch.copy',
  },
  {
    tagKey: 'news.interviews.tag',
    titleKey: 'news.interviews.title',
    copyKey: 'news.interviews.copy',
  },
  {
    tagKey: 'news.schools.tag',
    titleKey: 'news.schools.title',
    copyKey: 'news.schools.copy',
  },
];

export const galleryItems = [
  'gallery.careerMap',
  'gallery.portfolioReview',
  'gallery.interviewRoom',
  'gallery.workshop',
  'gallery.schoolEvent',
  'gallery.skillsLab',
];

export const roles = [
  {
    titleKey: 'roles.facilitator.title',
    typeKey: 'roles.facilitator.type',
    copyKey: 'roles.facilitator.copy',
  },
  {
    titleKey: 'roles.mentorLead.title',
    typeKey: 'roles.mentorLead.type',
    copyKey: 'roles.mentorLead.copy',
  },
  {
    titleKey: 'roles.designer.title',
    typeKey: 'roles.designer.type',
    copyKey: 'roles.designer.copy',
  },
];
