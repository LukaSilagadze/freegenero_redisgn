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
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'About Us', to: '/about' },
  { label: 'News', to: '/news' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Career', to: '/career' },
  { label: 'Contact', to: '/contact' },
];

export const programs = [
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

export const courses = [
  {
    title: 'Career Discovery Lab',
    meta: 'Foundation',
    detail: 'A guided introduction to modern career paths, personal strengths, and decision making.',
    icon: Compass,
  },
  {
    title: 'Communication for Real Life',
    meta: 'Practical skills',
    detail: 'Practice presentations, interview habits, teamwork, feedback, and professional writing.',
    icon: UsersRound,
  },
  {
    title: 'Money Skills Starter',
    meta: 'Life readiness',
    detail: 'Learn budgeting, earning, saving, responsible spending, and simple financial planning.',
    icon: Target,
  },
  {
    title: 'Digital Work Basics',
    meta: 'Future work',
    detail: 'Explore tools, workflows, online safety, research, and how digital teams collaborate.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Portfolio Builder',
    meta: 'Project track',
    detail: 'Turn student work into a clear portfolio with projects, reflections, and next steps.',
    icon: BookOpenCheck,
  },
  {
    title: 'Professional Interview Studio',
    meta: 'Mentor access',
    detail: 'Prepare questions, meet professionals, and learn what different jobs look like day to day.',
    icon: Mic2,
  },
];

export const events = [
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

export const interviews = [
  'How a software engineer thinks through hard problems',
  'What healthcare careers look like beyond becoming a doctor',
  'From school project to startup idea: a founder conversation',
];

export const benefits = [
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

export const newsItems = [
  {
    tag: 'Program update',
    title: 'Freegenero launches new career-readiness workshops for teens',
    copy: 'The new workshop series helps students connect classroom learning with real-world decisions.',
  },
  {
    tag: 'Interview',
    title: 'What teenagers learn when professionals tell the truth about work',
    copy: 'Career stories become more useful when students hear the daily habits, tradeoffs, and surprises.',
  },
  {
    tag: 'Schools',
    title: 'How schools can bring career exploration into advisory time',
    copy: 'Short guided activities can help students build future readiness without adding another subject.',
  },
];

export const galleryItems = [
  'Career mapping session',
  'Student portfolio review',
  'Professional interview room',
  'Workshop collaboration',
  'School partner event',
  'Future skills lab',
];

export const roles = [
  {
    title: 'Student Program Facilitator',
    type: 'Part-time / hybrid',
    copy: 'Lead teen workshops, guide discussions, and help students turn curiosity into action.',
  },
  {
    title: 'Career Mentor Network Lead',
    type: 'Full-time',
    copy: 'Build relationships with professionals and shape safe, useful student interview experiences.',
  },
  {
    title: 'Learning Content Designer',
    type: 'Contract',
    copy: 'Create practical activities, reflection prompts, and projects for real-world skill tracks.',
  },
];
