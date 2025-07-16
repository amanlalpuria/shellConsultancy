import { Code, Palette, Star, Target, TrendingUp, Users } from 'lucide-react';

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: 'What makes Shell Consultancy different from other recruitment agencies?',
    answer:
      "We don't just place talent — we prepare it. Our unique combination of recruitment and training ensures candidates are job-ready and aligned with industry needs.",
  },
  {
    question: 'How long does the training program take?',
    answer:
      'Our training programs range from 4-12 weeks depending on the specialization, with flexible scheduling options including weekend and evening batches.',
  },
  {
    question: 'Do you provide job placement after training?',
    answer:
      'Yes! We have a strong network of partner companies and provide placement assistance to all our training graduates with a high success rate.',
  },
  {
    question: 'What industries do you serve?',
    answer:
      'We serve diverse industries including technology, healthcare, finance, e-commerce, and more, with specialized recruitment strategies for each sector.',
  },
];

export interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Permanent Recruitment',
    description:
      'Find the perfect long-term talent for your organization with our comprehensive screening process.',
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Contract Staffing',
    description: 'Flexible staffing solutions for project-based needs and temporary requirements.',
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: 'Executive Search',
    description: 'Premium executive recruitment for C-level and senior management positions.',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Volume Hiring',
    description: 'Efficient bulk recruitment solutions for rapid scaling and expansion needs.',
  },
];

export interface TrainingProgram {
  icon: JSX.Element;
  title: string;
  description: string;
  skills: string[];
}

export const trainingPrograms: TrainingProgram[] = [
  {
    icon: <Code className="w-8 h-8" />,
    title: 'IT Languages Training',
    description: 'Master Java, Python, SQL, and other in-demand programming languages',
    skills: ['Java', 'Python', 'SQL', 'JavaScript', 'React'],
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'UI/UX Design',
    description: 'Hands-on design training with real-world project experience',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Digital Marketing',
    description: 'Practical digital marketing mastery with live campaign implementation',
    skills: ['SEO', 'Social Media', 'PPC', 'Analytics'],
  },
];

export const industries: string[] = [
  'Technology',
  'Healthcare',
  'Finance',
  'E-commerce',
  'Manufacturing',
  'Education',
  'Retail',
  'Consulting',
  'Startups',
  'Enterprise',
];

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Manan Sharma',
    role: 'CEO & Founder',
    image: '/team/manan.jpg?height=300&width=300',
    bio: '10+ years in talent acquisition and business strategy',
  },
  {
    name: 'Naresh Rao',
    role: 'Head of Training',
    image: '/team/nareshrao.jpg?height=300&width=300',
    bio: 'Tech lead with expertise in upskilling programs',
  },
  {
    name: 'Deepanshi Gaur',
    role: 'Recruitment Director',
    image: '/team/deepanshi.jpg?height=300&width=300',
    bio: 'Specialist in executive search and volume hiring',
  },
  {
    name: 'Aman Lalpuria',
    role: 'Technology Trainer',
    image: '/team/amanlalpuria.jpg?height=300&width=300',
    bio: 'Full-stack developer and coding bootcamp instructor',
  },
];

export interface Client {
  name: string;
  logo: string;
  industry: string;
}

export const valuedClients: Client[] = [
  {
    name: 'IBV Technologies Pvt Ltd',
    logo: '/clients/india_business_ventures_logo.jpeg?height=80&width=200',
    industry: 'Technology',
  },
  {
    name: 'Girnar Care',
    logo: '/clients/Girnarcare-Logo-1.png?height=80&width=200',
    industry: 'Consultancy',
  },
  {
    name: 'Enser communications Ltd.',
    logo: '/clients/Enser-communications-logo.png?height=80&width=200',
    industry: 'Technology',
  },
  {
    name: 'Transcom',
    logo: '/clients/Transcom.png?height=80&width=200',
    industry: 'BPO',
  },
  {
    name: 'Gretex Corporate Services Ltd.',
    logo: '/clients/gretex_corporate_services_limited_logo.jpeg?height=80&width=200',
    industry: 'Finance',
  },
  {
    name: 'Tech Mahindra',
    logo: '/clients/Tech_Mahindra-Logo.wine.png?height=80&width=200',
    industry: 'Technology',
  },
  {
    name: 'Conneqt Business Solutions',
    logo: '/clients/connectQ.jpeg?height=80&width=200',
    industry: 'Technology',
  },
  {
    name: 'Altruist Technologies Private Ltd.',
    logo: '/clients/altruist.png?height=80&width=200',
    industry: 'Healthcare',
  },
  {
    name: 'Frankfinn Institute of Air Hostess Training',
    logo: '/clients/Frankfinn.png?height=80&width=200',
    industry: 'Finance',
  },
  {
    name: 'Smile India Trust',
    logo: '/clients/smileIndiaTrust.jpeg?height=80&width=200',
    industry: 'E-commerce',
  },
  {
    name: 'Ebixcash',
    logo: '/clients/Ebixcash.png?height=80&width=200',
    industry: 'Finance',
  },
  {
    name: 'Galactic Client Services Pvt Ltd',
    logo: '/clients/Galactic Client Services Pvt Ltd.jpeg?height=80&width=200',
    industry: 'Finance',
  },
  {
    name: 'One Point One Solutions',
    logo: '/clients/1point.jpeg?height=80&width=200',
    industry: 'Finance',
  },
  {
    name: 'Infoneoo',
    logo: '/clients/Infoneoo.jpeg?height=80&width=200',
    industry: 'Finance',
  },
  {
    name: 'Wagnistrip | Travel Agency',
    logo: '/clients/wagnistrip.jpeg?height=80&width=200',
    industry: 'Finance',
  },
  {
    name: 'Synclovis Systems Pvt. Ltd',
    logo: '/clients/Synclovis Systems Pvt. Ltd.jpeg?height=80&width=200',
    industry: 'Finance',
  },
];
