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
    yearsOfExperience: 5,
    companiesWorked: 3,
    projectsCompleted: 25
  },
  skills: [
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Express', level: 75 },
    // { name: "CSS/SCSS", level: 90 },
    // { name: "Tailwind CSS", level: 85 },
    { name: 'GraphQL', level: 70 },
    { name: 'MongoDB', level: 75 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'AWS', level: 65 }
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
        'Node.js',
        'Core JavaScript',
        'PostgreSQL',
        'Socket.io',
        'Express.js',
        'Pug (Template Engine)'
      ],
      image: '/projects/ecommerce.jpg',
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
      image: '/projects/task-app.jpg',
      liveUrl: 'https://masdanceapp.com',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: 3,
      title: 'Custom Design Shopify Product App',
      description:
        'A Shopify-integrated app where users can design and customize products before purchasing. It offers a visual editor, connects with Shopify GraphQL APIs, and stores designs in AWS S3, ideal for personalized product stores.',
      technologies: [
        'PHP',
        'Laravel',
        'MySql',
        'AWS S3',
        'Shopify Graphql APIs'
      ],
      image: '/projects/fitness-app.jpg',
      liveUrl: 'https://hillmanreid.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 4,
      title: 'Team Chat & Project Communication App',
      description:
        'A real-time chat and project communication tool designed for companies. It allows teams to chat under specific projects, exchange files, and manage timelines in one central dashboard.',
      technologies: ['Vue.js', 'D3.js', 'Express', 'MongoDB'],
      image: '/projects/finance-dashboard.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: 5,
      title: 'Property Price Estimator Chrome Extension',
      description:
        'A Chrome extension that helps users calculate property prices based on location, square footage, and local data. Useful for agents, investors, and homebuyers seeking quick and reliable estimates.',
      technologies: ['React', 'Chrome Web Extension'],
      image: '/projects/social-platform.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 6,
      title: 'Shopify Discount Code Generator App',
      description:
        'A custom app for Shopify stores to create and manage discount codes. Supports bulk creation, expiry settings, and auto-apply options, helping stores boost conversions during sales.',
      technologies: ['Shopify Rest APIs', 'Shopify Cli', 'Node Js', 'MongoDB'],
      image: '/projects/weather-app.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 7,
      title: 'Custom Shopify Checkout App',
      description:
        'This app replaces Shopify’s default checkout with a custom flow, integrating third-party services, validating fields, and offering a tailored customer experience, improving overall conversion rates.',
      technologies: ['Node Js', 'PostgreSQL', 'RESTful APIs', 'Express Js'],
      image: '/projects/fitness-app.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 8,
      title: 'Golf Club Deal Management Portal',
      description:
        'An admin dashboard for golf clubs to create and manage deals. Includes listing control, user analytics, and notifications for offers, simplifying digital marketing for club managers.',
      technologies: ['Node JS', 'React Js', 'Express', 'MongoDB'],
      image: '/projects/social-platform.jpg',
      liveUrl: 'https://app2.greenfee-deals.de',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 9,
      title: 'Football Tournament Management System',
      description:
        'A web app for managing football tournaments with features like goal tracking, team registration, player stats, and real-time updates for fans and organizers.',
      technologies: [
        'Node Js',
        'React Js',
        'PostgreSQL',
        'Relational Databases',
        'AWS S3',
        'REST APIs'
      ],
      image: '/projects/weather-app.jpg',
      liveUrl: 'https://mynetgoals.com/',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 10,
      title: 'Cyber Security Awareness Training Platform',
      description:
        'An LMS-style platform for companies to educate employees on cybersecurity best practices. Offers video lessons, assessments, and certification for compliance purposes.',
      technologies: ['Node Js', 'PostgreSQL', 'RESTful APIs', 'Express Js'],
      image: '/projects/fitness-app.jpg',
      liveUrl: 'https://app.secureaz.co.nz',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 11,
      title: 'E-Commerce Shopping Web App',
      description:
        'A full-featured e-commerce app for selling products online. Includes product catalog, cart, user authentication, order tracking, and payment gateway integration.',
      technologies: ['Node Js', 'PostgreSQL', 'RESTful APIs', 'Express Js'],
      image: '/projects/fitness-app.jpg',
      liveUrl: 'https://flyorship.com',
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
