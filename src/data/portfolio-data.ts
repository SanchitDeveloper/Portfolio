import PrezentraLogo from '@/assets/images/prezentra.jpg';
import Checkoutogo from '@/assets/images/checkout.png';
import GreenFeeDealLogo from '@/assets/images/greefeedeal.png';
import MyNetGoalsLogo from '@/assets/images/mynetgoal.png';
import ShiporFlyLogo from '@/assets/images/shiporfly.png';
import PhisingSemulatorLogo from '@/assets/images/phising.svg';
import EnvelopLogo from '@/assets/images/envelop.webp';
import HillManLogo from '@/assets/images/hillmainried.png';
import EveryLandLogo from '@/assets/images/everyland.svg';
import EFMXLogo from '@/assets/images/eFMX.png';
import KosherBnBLogo from '@/assets/images/kosherbnb.png';
import DanceLogo from '@/assets/images/moverLogo.png';
import Sanchit from '@/assets/images/sanchit.png';

export const portfolioData = {
  developer: {
    name: 'Sanchit',
    title: 'Full Stack Developer',
    description:
      'I build exceptional digital experiences that combine beautiful design with cutting-edge technology.',
    location: 'Mohali Punjab, IN',
    email: 'sanchitrajpu7778@gmail.com',
    socialLinks: {
      github: 'https://github.com',
      linkedin: 'https://www.linkedin.com/in/sanchit-rajput-5b10711b5',
      twitter: 'https://twitter.com'
    },
    resume: '/resume.pdf'
  },
  about: {
    summary:
      "I'm a passionate full-stack developer with over 5 years of experience building scalable web applications. My approach combines technical expertise with creative problem-solving to deliver exceptional user experiences.",
    yearsOfExperience: 4,
    companiesWorked: 1,
    projectsCompleted: 15,
    image: Sanchit.src
  },
  skills: [
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'React', level: 95 },
    { name: 'Next js', level: 60 },
    { name: 'Node js', level: 80 },
    { name: 'Express', level: 90 },
    { name: "Shopify", level: 90 },
    { name: "Chrome Extension", level: 85 },
    { name: 'GraphQL', level: 70 },
    { name: 'MongoDB', level: 75 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'AWS', level: 50 }
  ],
  experience: [
    {
      company: 'The Brihaspati Infotech Pvt. Ltd',
      position: 'Senior Frontend Developer',
      period: '2021 - Present',
      description:
        'Led the development of a complex SaaS platform using React, Next.js, and GraphQL. Improved site performance by 40% and implemented modern animation patterns.'
    }
  ],
  projects: [
    {
      id: 1,
      title: 'Screen Share Collaboration Web App',
      description:
        'A real-time web app that allows users to share their screen during online meetings. Built with WebSockets and Socket.io, it supports video and audio communication with a secure and smooth sharing experience. Ideal for remote support, presentations, and online classes.',
      technologies: [
        'Node Js',
        'Core JavaScript',
        'PostgreSQL',
        'Socket.io',
        'Express.js',
        'Pug (Template Engine)'
      ],
      image: PrezentraLogo.src,
      liveUrl: 'https://prezentra.com',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: 2,
      title: 'Dance Academy Management Web App',
      description:
        'A complete platform for dance academies to manage classes, students, notifications, and content. It includes role-based access for admins and trainers, integrated push notifications, and media storage via AWS S3, enhancing operational efficiency.',
      technologies: [
        'React',
        'Firebase',
        'Node Js',
        'Redux',
        'MongoDB',
        'Express',
        'Firebase Messaging',
        'Push Notification',
        'AWS S3',
        'TypeScript'
      ],
      image: DanceLogo.src,
      liveUrl: 'https://masdanceapp.com',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: 3,
      title: 'Property Price Estimator Chrome Extension',
      description:
        'A Chrome extension that helps users calculate property prices based on location, square footage, and local data. Useful for agents, investors, and homebuyers seeking quick and reliable estimates.',
      technologies: ['Webpack', 'React', 'Chrome Web Extension'],
      image: '',
      liveUrl: '',
      githubUrl: '',
      featured: false
    },
    {
      id: 4,
      title: 'Custom Shopify Checkout App',
      description:
        'This app replaces Shopify’s default checkout with a custom flow, integrating third-party services, validating fields, and offering a tailored customer experience, improving overall conversion rates.',
      technologies: ['Node Js', 'PostgreSQL', 'RESTful APIs', 'Express Js'],
      image: Checkoutogo.src,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 5,
      title: 'Golf Club Deal Management Portal',
      description:
        'An admin dashboard for golf clubs to create and manage deals. Includes listing control, user analytics, and notifications for offers, simplifying digital marketing for club managers.',
      technologies: ['Node JS', 'React Js', 'Express', 'MongoDB'],
      image: GreenFeeDealLogo.src,
      liveUrl: 'https://app2.greenfee-deals.de',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 6,
      title: 'Football Tournament Management System',
      description:
        'A web app for managing football tournaments with features like goal tracking, team registration, player stats, and real-time updates for fans and organizers.',
      technologies: [
        'Node Js',
        'React Js',
        'PostgreSQL',
        'Relational Databases',
        'AWS',
        'S3'
      ],
      image: MyNetGoalsLogo.src,
      liveUrl: 'https://mynetgoals.com/',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 7,
      title: 'Cyber Security Awareness Training Platform',
      description:
        'An LMS-style platform for companies to educate employees on cybersecurity best practices. Offers video lessons, assessments, and certification for compliance purposes.',
      technologies: ['Node Js', 'MongoDB', 'React Js', 'Express Js'],
      image: PhisingSemulatorLogo.src,
      liveUrl: 'https://app.secureaz.co.nz',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 8,
      title: 'E-Commerce Shopping Web App',
      description:
        'A full-featured e-commerce app for selling products online. Includes product catalog, cart, user authentication, order tracking, and payment gateway integration.',
      technologies: ['Node Js', 'PostgreSQL', 'RESTful APIs', 'Express Js'],
      image: ShiporFlyLogo.src,
      liveUrl: 'https://flyorship.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 9,
      title:
        'Dropshipping App for Fresh Handmade Bath, Beard, Hair, Skin & Shaving Products',
      description:
        'Developed a custom Shopify app designed specifically for merchants targeting the North American market with unique, white label product lines in the personal care industry. This app empowers small business owners, entrepreneurs, and startups to launch and manage their own branded collections of freshly handmade bath, beard, hair, skin, shaving, and soap products—all made in the USA and Canada.',
      technologies: ['Laravel', 'Shopify', 'Shopify APIs', 'Osiset', 'MySql'],
      image: HillManLogo.src,
      liveUrl: 'https://apps.shopify.com/hr-vegan-cosmetics-soaps',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 10,
      title: 'KosherBNB – Kosher Vacation Villas & Jewish Home Rentals',
      description:
        'Developed and launched KosherBNB, a specialized vacation rental platform catering to the global Jewish community. The site lets users discover and book kosher-certified villas and home rentals, with features tailored for seamless, secure bookings and exclusive member benefits.',
      technologies: ['Laravel', 'MySql'],
      image: KosherBnBLogo.src,
      liveUrl: 'https://www.thekosherbnb.com/',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 11,
      title: 'eFMX Shipping Automation Public Shopify App',
      description:
        'Built a feature-rich public Shopify app that streamlines shipping label generation for merchants using eFMX logistics. This solution automates every step merchants previously handled manually—no more order exports or manual uploads. With secure API integration, the app enables Shopify stores to authenticate directly with eFMX, check wallet balances, fetch real-time shipping rates, and generate organized consignments (groups) for new orders with just a few clicks.',
      technologies: ['Node Js', 'Shopify Polaris', 'RESTful APIs', 'Shopify'],
      image: EFMXLogo.src,
      liveUrl: 'https://apps.shopify.com/efmx-app',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 12,
      title:
        'Everyland – Comprehensive Real Estate Platform for Agencies, Builders, Developers, Agents & Customers',
      description:
        'Engineered a powerful real estate web platform that connects property builders, agencies, developers, agents, and customers in a unified ecosystem for managing listings, generating leads, and streamlining sales. Everyland offers role-based access, advanced search and filtering, dynamic modules for property management, and seamless workflow automation—all tailored for the Australian market.',
      technologies: ['Node js', 'React Js', 'PostgreSQL'],
      image: EveryLandLogo.src,
      liveUrl: 'https://everyland.com.au/sitedevnew',
      githubUrl: 'https://github.com',
      featured: false
    }
  ],
  testimonials: [
    {
      id: 1,
      name: 'Sarah Chen',
      position: 'CTO, TechCorp',
      content:
        'Alex is an exceptional developer who consistently delivers high-quality code. Their attention to detail and ability to create smooth, engaging animations sets them apart.',
      avatar: '/testimonials/sarah.jpg'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      position: 'Product Manager, WebSolutions',
      content:
        'Working with Alex was a pleasure. They have a unique ability to understand complex requirements and transform them into elegant, user-friendly interfaces.',
      avatar: '/testimonials/michael.jpg'
    },
    {
      id: 3,
      name: 'Jessica Taylor',
      position: 'Founder, StartupX',
      content:
        'Alex helped us rebuild our entire platform with a focus on performance and modern design. The results exceeded our expectations in every way.',
      avatar: '/testimonials/jessica.jpg'
    }
  ],
  services: [
    {
      title: 'Web Development',
      description:
        'Building responsive, scalable web applications with modern frameworks and best practices.',
      icon: 'Code'
    },
    {
      title: 'UI/UX Design',
      description:
        'Creating intuitive and engaging user interfaces with a focus on user experience.',
      icon: 'Layout'
    },
    {
      title: 'Animation Development',
      description:
        'Implementing smooth, performant animations that enhance user engagement.',
      icon: 'Activity'
    },
    {
      title: 'API Development',
      description:
        'Designing and building RESTful APIs and GraphQL endpoints for seamless data exchange.',
      icon: 'Database'
    }
  ]
};
